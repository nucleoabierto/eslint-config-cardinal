# Integración CI/CD

> **Automatiza ESLint Cardinal en tu pipeline de CI/CD**

Integrar ESLint Cardinal en tu pipeline de CI/CD asegura calidad de código consistente y previene errores antes de que
lleguen a producción.

## 🎯 Beneficios de CI/CD Integration

### Calidad Automatizada

- ✅ **Cero errores de formato** - Código siempre consistente
- ✅ **Prevención de bugs** - Problemas detectados en PR
- ✅ **Code reviews enfocadas** - Sin discusiones de estilo
- ✅ **Quality gates** - Solo código calidad pasa a producción

### Mejoras en Equipo

- ✅ **Onboarding rápido** - Nuevos miembros siguen estándares automáticamente
- ✅ **Consistencia** - Todo el equipo sigue mismas reglas
- ✅ **Productividad** - Menos tiempo en correcciones manuales
- ✅ **Confianza** - Despliegues más seguros

---

## 🔧 GitHub Actions

### Workflow Básico

```yaml
# .github/workflows/lint.yml
name: ESLint Cardinal

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  lint:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run ESLint Cardinal
      run: npx eslint . --format=github
      
    - name: Upload ESLint results
      if: failure()
      uses: actions/upload-artifact@v3
      with:
        name: eslint-report
        path: eslint-report.json
```

### Workflow Avanzado

```yaml
# .github/workflows/quality.yml
name: Code Quality

on:
  pull_request:
    branches: [ main ]

jobs:
  quality:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16, 18, 20]
        
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Cache ESLint
      uses: actions/cache@v3
      with:
        path: ~/.cache/eslint
        key: eslint-${{ runner.os }}-${{ matrix.node-version }}
        
    - name: Run ESLint Cardinal
      run: |
        npx eslint . \
          --format=json \
          --output-file=eslint-report.json \
          --max-warnings=0
          
    - name: Comment PR with ESLint results
      if: failure()
      uses: actions/github-script@v6
      with:
        script: |
          const fs = require('fs');
          const report = JSON.parse(fs.readFileSync('eslint-report.json', 'utf8'));
          
          const errors = report.filter(r => r.severity === 2);
          const warnings = report.filter(r => r.severity === 1);
          
          const comment = `
          ## ESLint Cardinal Results ❌
          
          - **Errors**: ${errors.length}
          - **Warnings**: ${warnings.length}
          
          ${errors.length > 0 ? '### 🔴 Errors must be fixed before merge' : ''}
          ${warnings.length > 0 ? '### 🟡 Warnings should be addressed' : ''}
          
          [Ver detalles en el workflow](https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }})
          `;
          
          github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: comment
          });
```

---

## 🔄 GitLab CI

### Configuration Básica

```yaml
# .gitlab-ci.yml
stages:
  - lint
  - test

eslint:
  stage: lint
  image: node:18
  
  before_script:
    - npm ci
  
  script:
    - npx eslint . --format=gitlab > eslint-report.json || true
    - npx eslint . --max-warnings=0
  
  artifacts:
    reports:
      junit: eslint-report.json
    paths:
      - eslint-report.json
    expire_in: 1 week
  
  only:
    - merge_requests
    - main
    - develop
```

### Configuration Avanzada

```yaml
# .gitlab-ci.yml
variables:
  NODE_VERSION: "18"
  ESLINT_CACHE_DIR: ".eslintcache"

stages:
  - lint
  - test
  - deploy

cache:
  key: eslint-${CI_COMMIT_REF_SLUG}
  paths:
    - node_modules/
    - $ESLINT_CACHE_DIR

eslint:
  stage: lint
  image: node:$NODE_VERSION
  
  before_script:
    - npm ci --cache .npm --prefer-offline
  
  script:
    - npx eslint . 
      --format=json 
      --output-file=eslint-report.json 
      --cache 
      --cache-location $ESLINT_CACHE_DIR
      --max-warnings=0
  
  artifacts:
    reports:
      junit: eslint-report.json
    paths:
      - eslint-report.json
      - $ESLINT_CACHE_DIR
    expire_in: 1 week
  
  coverage: '/All files[^|]*\|[^|]*\s+([\d\.]+)/'
  
  only:
    - merge_requests
    - main
    - develop
    
  except:
    - schedules

eslint_scheduled:
  stage: lint
  image: node:$NODE_VERSION
  
  before_script:
    - npm ci --cache .npm --prefer-offline
  
  script:
    - npx eslint . --format=checkstyle --output-file=checkstyle.xml
    - npx eslint . --max-warnings=0
  
  artifacts:
    reports:
      junit: checkstyle.xml
    expire_in: 1 week
  
  only:
    - schedules
```

---

## 🐳 Docker Integration

### Dockerfile con ESLint

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código fuente
COPY . .

# Instalar ESLint Cardinal como dev dependency
RUN npm install --save-dev eslint-config-cardinal

# Crear script de lint
RUN echo '#!/bin/sh\nnpx eslint . --max-warnings=0' > /usr/local/bin/lint && \
    chmod +x /usr/local/bin/lint

# Ejecutar lint en build
RUN lint

# Resto del build...
CMD ["node", "src/index.js"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    volumes:
      - .:/app
      - /app/node_modules
    command: npm start
    
  lint:
    build: .
    volumes:
      - .:/app
      - /app/node_modules
    command: npx eslint . --max-warnings=0
    profiles:
      - lint
```

---

## 🔍 Pre-commit Hooks

### Husky Configuration

```bash
# Instalar Husky
npm install --save-dev husky

# Inicializar Husky
npx husky install

# Añadir hook pre-commit
npx husky add .husky/pre-commit "npx eslint . --fix"
```

### Lint-staged Integration

```bash
# Instalar lint-staged
npm install --save-dev lint-staged

# Configurar en package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "git add"
    ]
  }
}

# Actualizar pre-commit hook
npx husky set .husky/pre-commit "npx lint-staged"
```

### Pre-commit Configuration Avanzada

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files

  - repo: local
    hooks:
      - id: eslint-cardinal
        name: ESLint Cardinal
        entry: npx eslint --fix
        language: system
        files: \.(js|jsx|ts|tsx)$
        pass_filenames: false
        always_run: true
```

---

## 🚀 Jenkins Pipeline

### Jenkinsfile Básico

```groovy
// Jenkinsfile
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Setup') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npx eslint . --format=checkstyle --output-file=eslint-report.xml || true'
            }
            post {
                always {
                    publishCheckstyle resultsPattern: 'eslint-report.xml'
                }
                failure {
                    error('ESLint Cardinal found issues that must be fixed')
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
```

### Jenkinsfile Avanzado

```groovy
// Jenkinsfile
pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18'
        ESLINT_CACHE_DIR = '.eslintcache'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Setup Node.js') {
            steps {
                sh "nvm use ${NODE_VERSION}"
                sh 'npm ci --cache .npm --prefer-offline'
            }
        }
        
        stage('Lint with Cache') {
            steps {
                cache(cacheName: 'eslint', cacheKey: "eslint-${env.BUILD_NUMBER}") {
                    sh """
                        npx eslint . \
                            --format=json \
                            --output-file=eslint-report.json \
                            --cache \
                            --cache-location ${ESLINT_CACHE_DIR} \
                            --max-warnings=0
                    """
                }
            }
            post {
                always {
                    archiveArtifacts artifacts: 'eslint-report.json', fingerprint: true
                }
                failure {
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: '.',
                        reportFiles: 'eslint-report.json',
                        reportName: 'ESLint Report'
                    ])
                    error('ESLint Cardinal violations detected')
                }
            }
        }
    }
}
```

---

## 📊 Quality Gates

### SonarQube Integration

```yaml
# .github/workflows/sonar.yml
name: SonarQube Analysis

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  sonarqube:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      with:
        fetch-depth: 0
        
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run ESLint Cardinal
      run: |
        npx eslint . \
          --format=checkstyle \
          --output-file=eslint-checkstyle.xml \
          --max-warnings=0
          
    - name: SonarQube Scan
      uses: sonarqube-quality-gate-action@master
      env:
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

### Quality Metrics

```yaml
# .github/workflows/quality-metrics.yml
name: Quality Metrics

on:
  pull_request:
    branches: [ main ]

jobs:
  metrics:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run ESLint with Metrics
      run: |
        npx eslint . \
          --format=json \
          --output-file=eslint-metrics.json \
          --format=markdown \
          --output-file=eslint-report.md
          
    - name: Calculate Quality Score
      id: quality
      run: |
        ERROR_COUNT=$(jq '[.[] | select(.severity == 2)] | length' eslint-metrics.json)
        WARNING_COUNT=$(jq '[.[] | select(.severity == 1)] | length' eslint-metrics.json)
        TOTAL_FILES=$(jq '[.[] | .filePath] | unique | length' eslint-metrics.json)
        
        QUALITY_SCORE=$((100 - (ERROR_COUNT * 10) - (WARNING_COUNT * 2)))
        
        echo "error_count=$ERROR_COUNT" >> $GITHUB_OUTPUT
        echo "warning_count=$WARNING_COUNT" >> $GITHUB_OUTPUT
        echo "total_files=$TOTAL_FILES" >> $GITHUB_OUTPUT
        echo "quality_score=$QUALITY_SCORE" >> $GITHUB_OUTPUT
        
    - name: Update PR with Metrics
      uses: actions/github-script@v6
      with:
        script: |
          const metrics = {
            errors: '${{ steps.quality.outputs.error_count }}',
            warnings: '${{ steps.quality.outputs.warning_count }}',
            files: '${{ steps.quality.outputs.total_files }}',
            score: '${{ steps.quality.outputs.quality_score }}'
          };
          
          const comment = `
          ## 📊 Quality Metrics
          
          | Metric | Value |
          |--------|-------|
          | 🚨 Errors | ${metrics.errors} |
          | ⚠️ Warnings | ${metrics.warnings} |
          | 📁 Files | ${metrics.files} |
          | 🎯 Quality Score | ${metrics.score}/100 |
          
          ${metrics.score >= 90 ? '✅ Excellent quality!' : ''}
          ${metrics.score >= 80 && metrics.score < 90 ? '🟡 Good quality, minor improvements needed' : ''}
          ${metrics.score < 80 ? '🔴 Quality needs improvement' : ''}
          `;
          
          github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: comment
          });
```

---

## 🔧 Configuration Files

### ESLint Config para CI

```js
// eslint.config.js - Configuración optimizada para CI
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    // Optimizado para CI
    cache: true,
    cacheLocation: '.eslintcache',
    
    rules: {
      // Reglas más estrictas en CI
      'no-console': 'error', // No console en CI
      'no-debugger': 'error', // No debugger en CI
      
      // Warnings como errores en CI
      'prefer-const': 'error',
      'no-unused-vars': 'error',
    },
  },
  
  // Ignorar archivos generados
  {
    ignores: [
      'dist/**',
      'build/**',
      'coverage/**',
      'node_modules/**',
      '*.min.js',
    ],
  },
]
```

### Package.json Scripts

```json
{
  "scripts": {
    "lint": "eslint . --max-warnings=0",
    "lint:fix": "eslint . --fix",
    "lint:ci": "eslint . --format=json --output-file=eslint-report.json --max-warnings=0",
    "lint:report": "eslint . --format=markdown --output-file=eslint-report.md",
    "precommit": "lint-staged",
    "quality-check": "npm run lint && npm run test && npm run build"
  }
}
```

---

## 🎯 Best Practices

### 1. Caching Strategy

```yaml
# GitHub Actions con cache optimizado
- name: Cache ESLint
  uses: actions/cache@v3
  with:
    path: |
      ~/.cache/eslint
      .eslintcache
    key: eslint-${{ runner.os }}-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      eslint-${{ runner.os }}-
```

### 2. Parallel Execution

```yaml
# Ejecutar lint en paralelo con tests
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Lint
        run: npm run lint:ci
        
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Test
        run: npm test
        
  quality-gate:
    needs: [lint, test]
    runs-on: ubuntu-latest
    steps:
      - name: Quality Gate
        run: echo "All checks passed!"
```

### 3. Failure Handling

```yaml
# Manejo inteligente de fallos
- name: Run ESLint
  run: |
    npx eslint . --format=json --output-file=eslint-report.json || true
    
- name: Check Results
  run: |
    ERROR_COUNT=$(jq '[.[] | select(.severity == 2)] | length' eslint-report.json)
    if [ $ERROR_COUNT -gt 0 ]; then
      echo "❌ Found $ERROR_COUNT errors"
      exit 1
    fi
    
    WARNING_COUNT=$(jq '[.[] | select(.severity == 1)] | length' eslint-report.json)
    if [ $WARNING_COUNT -gt 10 ]; then
      echo "⚠️ Found $WARNING_COUNT warnings (too many)"
      exit 1
    fi
    
    echo "✅ Quality checks passed"
```

### 4. Reporting

```yaml
# Reportes detallados
- name: Generate ESLint Report
  run: |
    npx eslint . \
      --format=json \
      --output-file=eslint-report.json \
      --format=markdown \
      --output-file=eslint-report.md \
      --format=checkstyle \
      --output-file=eslint-checkstyle.xml
      
- name: Upload Reports
  uses: actions/upload-artifact@v3
  with:
    name: eslint-reports
    path: |
      eslint-report.json
      eslint-report.md
      eslint-checkstyle.xml
```

---

## 📈 Monitoring y Alertas

### Slack Notifications

```yaml
# Notificaciones a Slack
- name: Notify Slack on Failure
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: failure
    channel: '#dev-alerts'
    text: 'ESLint Cardinal found issues in PR #${{ github.event.number }}'
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

### Email Notifications

```yaml
# Notificaciones por email
- name: Send Email Report
  if: failure()
  uses: dawidd6/action-send-mail@v3
  with:
    server_address: smtp.gmail.com
    server_port: 587
    username: ${{ secrets.EMAIL_USERNAME }}
    password: ${{ secrets.EMAIL_PASSWORD }}
    subject: 'ESLint Cardinal Report - ${{ github.repository }}'
    body: file://eslint-report.md
    to: ${{ secrets.NOTIFICATION_EMAIL }}
```

---

## 🚀 Troubleshooting

### Problemas Comunes

#### 1. ESLint no encontrado en CI

```yaml
# Solución: Usar npx o instalar globalmente
- name: Install ESLint globally
  run: npm install -g eslint

- name: Run ESLint
  run: eslint . --max-warnings=0
```

#### 2. Cache no funciona

```yaml
# Solución: Configurar cache correctamente
- name: Cache dependencies
  uses: actions/cache@v3
  with:
    path: |
      ~/.npm
      ~/.cache/eslint
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

#### 3. Timeout en proyectos grandes

```yaml
# Solución: Limitar archivos o usar timeout
- name: Run ESLint with timeout
  run: |
    timeout 10m npx eslint src/ --max-warnings=0 || {
      echo "ESLint timeout - running on critical files only"
      npx eslint src/**/*.{js,ts} --max-warnings=0
    }
```

---

*¿Necesitas [ver guía de personalización](./customization) o [referencia de reglas](./rules-reference)?*
