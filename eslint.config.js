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
  {
    rules: {
      'import-x/extensions': 'off',
      'sonarjs/no-implicit-dependencies': 'off',
    },
  },
]
