import pluginSonarJS from 'eslint-plugin-sonarjs'

/**
 * === CONSOLIDACIÓN DE REGLAS SONARJS ===
 *
 * Este módulo carga TODAS las reglas de sonarjs, EXCEPTO:
 * 1. Las definidas explícitamente en 'security/plugins/sonarjs-security.js' (core security)
 * 2. Las web-specific definidas en 'ecosystem/web/*' (base/extended/complete)
 *
 * Esto evita duplicación implícita:
 * - Reglas de seguridad core → controladas en sonarjs-security.js
 * - Reglas web-specific → controladas en ecosystem/web/
 * - Reglas de calidad/general → cargadas dinámicamente aquí
 *
 * Nota: Este patrón automático mantiene sincronía cuando sonarjs se actualiza
 * con nuevas reglas (las nuevas se cargan automáticamente, a menos que se
 * agreguen explícitamente a algún Set de exclusión).
 */

const securityRules = new Set([
  // Core security rules (no web-specific)
  'no-hardcoded-passwords',
  'no-hardcoded-secrets',
  'hardcoded-secret-signatures',
  'sql-queries',
  'weak-ssl',
  'no-weak-keys',
  'csrf',
  'hashing',
  'no-clear-text-protocols',
  'unverified-certificate',
  'unverified-hostname',
  'encryption-secure-mode',
  'no-weak-cipher',
  'no-hardcoded-ip',
  'no-os-command-from-path',
  'os-command',
  'no-unsafe-unzip',
  'publicly-writable-directories',
  'insecure-jwt-token',
  'hidden-files',
  'confidential-information-logging',
  'no-ip-forward',
  'no-intrusive-permissions',
  'session-regeneration',

  /*
   * Web-specific rules are now in ecosystem/web/ (handled separately)
   * Exclude these from dynamic loading to avoid duplication
   */
  'insecure-cookie',
  'cors',
  'link-with-target-blank',
  'disabled-auto-escaping',
  'x-powered-by',
  'content-length',
  'disabled-resource-integrity',
  'content-security-policy',
  'no-mixed-content',
  'frame-ancestors',
  'no-mime-sniff',
  'no-referrer-policy',
  'strict-transport-security',
  'no-angular-bypass-sanitization',
])

const isDeprecatedRule = rule => {
  const deprecatedRules = [
    'no-tab',
    'no-redundant-parentheses',
    'useless-string-operation',
    'cookies',
    'web-sql-database',
    'conditional-indentation',
    'regular-expr',
    'encryption',
    'xpath',
    'sockets',
    'process-argv',
    'standard-input',
    'certificate-transparency',
    'dns-prefetching',
    'aws-s3-bucket-server-encryption',
    'no-vue-bypass-sanitization',
    'encryption',
  ]

  return deprecatedRules.includes(rule)
}

const isStyleRule = rule => {
  return rule.includes('name') || rule.includes('max-') || rule.includes('comment') ||
    rule.includes('indentation') || rule.includes('file-header') || rule === 'todo-tag' ||
    rule === 'fixme-tag' || rule === 'no-commented-code'
}

const isComplexityRule = rule => rule.includes('complexity') || rule.includes('nested')

const isAwsRule = rule => rule.startsWith('aws-')

const isTestRule = rule => rule.includes('test') || rule.includes('chai') || rule.includes('assertions')

const isPreferenceRule = rule => {
  // Excluir reglas de calidad importantes del filtro de preferencias
  const qualityRules = ['prefer-immediate-return']

  if (qualityRules.includes(rule)) return false

  return rule.includes('prefer-') || rule.includes('use-') || rule.includes('enforce-')
}

const getRuleConfig = rule => {
  if (isStyleRule(rule)) return 'off'

  if (isComplexityRule(rule)) return 'off'

  if (isAwsRule(rule)) return 'off'

  if (isTestRule(rule)) return 'off'

  if (isPreferenceRule(rule)) return 'off'

  return 'error'
}

export default {
  name: 'cardinal/quality/sonarjs-extended',
  plugins: {
    sonarjs: pluginSonarJS,
  },
  rules: {
    ...Object.fromEntries(
      Object.keys(pluginSonarJS.rules)
        .filter(rule => !isDeprecatedRule(rule))
        .filter(rule => !securityRules.has(rule))
        .map(rule => [`sonarjs/${rule}`, getRuleConfig(rule)])
    ),
  },
}
