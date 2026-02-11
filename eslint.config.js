import { all } from './src/index.js'

export default [
  {
    ignores: [
      'docs/.vitepress/cache/**',
      'docs/.vitepress/dist/**',
      'node_modules/**',
    ],
  },
  ...all,
  // Desactivar regla de extensiones para ES modules nativos (sin bundler)
  {
    rules: {
      'import-x/extensions': 'off',
      'sonarjs/no-implicit-dependencies': 'off',
    },
  },
]
