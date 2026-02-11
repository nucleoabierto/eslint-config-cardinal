import { createBaseConfig } from '../base-config.js'
import configRelaxed from '../modules/config/relaxed.js'
import correctnessErrors from '../modules/correctness/errors.js'
import correctnessSyntax from '../modules/correctness/syntax.js'
import correctnessVariables from '../modules/correctness/variables.js'
import ecosystemImports from '../modules/ecosystem/imports/base.js'
import ecosystemImportsExtended from '../modules/ecosystem/imports/extended.js'
import ecosystemPromises from '../modules/ecosystem/promises.js'
import ecosystemReact from '../modules/ecosystem/react.js'
import ecosystemWebBase from '../modules/ecosystem/web/base.js'
import ecosystemWebExtended from '../modules/ecosystem/web/extended.js'
import modernEsFeatures from '../modules/modern/es-features.js'
import qualityEssential from '../modules/quality/essential.js'
import qualityUnicornEssential from '../modules/quality/plugins/unicorn-essential.js'
import qualityUnicornExtended from '../modules/quality/plugins/unicorn-extended.js'
import qualityUnicornWeb from '../modules/quality/plugins/unicorn-web.js'
import qualityRecommended from '../modules/quality/recommended.js'
import securityCritical from '../modules/security/critical.js'
import securityRecommended from '../modules/security/recommended.js'
import styleFormatting from '../modules/style/formatting.js'
import typescriptBase from '../modules/typescript/base.js'
import typescriptExtended from '../modules/typescript/extended.js'

/**
 * @module cardinal/config-web
 * @summary Preset especializado para desarrollo web frontend (SPA, Next.js, frameworks web).
 * @remarks Incluye todas las reglas esenciales de JavaScript + TypeScript + React + seguridad web.
 * Excluye reglas específicas de Node.js que no aplicarían en frontend.
 */

const baseConfig = createBaseConfig('web', [
  '**/*.js',
  '**/*.mjs',
  '**/*.jsx',
  '**/*.ts',
  '**/*.tsx',
  '**/*.mts',
])

/**
 * @summary Conjunto de configuraciones que forman el preset `web`.
 * @returns {import('eslint').Linter.Config[]} Lista ordenada para ESLint Flat Config.
 */
export default [
  baseConfig,
  correctnessErrors,
  correctnessSyntax,
  correctnessVariables,
  modernEsFeatures,
  styleFormatting,
  qualityEssential,
  qualityRecommended,
  qualityUnicornEssential,
  qualityUnicornExtended,
  qualityUnicornWeb,
  securityCritical,
  securityRecommended,
  ecosystemImports,
  ecosystemImportsExtended,
  ecosystemPromises,
  ecosystemWebBase,
  ecosystemWebExtended,
  configRelaxed,
  ...(ecosystemReact ? [ecosystemReact] : []),
  ...(typescriptBase ? [typescriptBase] : []),
  ...(typescriptExtended ? [typescriptExtended] : []),
]
