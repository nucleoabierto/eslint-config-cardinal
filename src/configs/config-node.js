import { createBaseConfig } from '../base-config.js'
import configRelaxed from '../modules/config/relaxed.js'
import correctnessErrors from '../modules/correctness/errors.js'
import correctnessSyntax from '../modules/correctness/syntax.js'
import correctnessVariables from '../modules/correctness/variables.js'
import ecosystemImports from '../modules/ecosystem/imports/base.js'
import ecosystemImportsExtended from '../modules/ecosystem/imports/extended.js'
import ecosystemNode from '../modules/ecosystem/node/base.js'
import ecosystemNodeExtended from '../modules/ecosystem/node/extended.js'
import ecosystemPromises from '../modules/ecosystem/promises.js'
import modernEsFeatures from '../modules/modern/es-features.js'
import qualityEssential from '../modules/quality/essential.js'
import qualityUnicornEssential from '../modules/quality/plugins/unicorn-essential.js'
import qualityUnicornExtended from '../modules/quality/plugins/unicorn-extended.js'
import qualityRecommended from '../modules/quality/recommended.js'
import securityCritical from '../modules/security/critical.js'
import securityRecommended from '../modules/security/recommended.js'
import styleFormatting from '../modules/style/formatting.js'
import typescriptBase from '../modules/typescript/base.js'
import typescriptExtended from '../modules/typescript/extended.js'

/**
 * @module cardinal/config-node
 * @summary Preset especializado para desarrollo backend con Node.js.
 * @remarks Incluye todas las reglas esenciales de JavaScript + TypeScript + Node.js específico.
 * Excluye reglas específicas de navegador que no aplicarían en Node.js.
 */

const baseConfig = createBaseConfig('node', [
  '**/*.js',
  '**/*.mjs',
  '**/*.cjs',
  '**/*.ts',
  '**/*.mts',
  '**/*.cts',
])

/**
 * @summary Conjunto de configuraciones que forman el preset `node`.
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
  securityCritical,
  securityRecommended,
  ecosystemImports,
  ecosystemImportsExtended,
  ecosystemNode,
  ecosystemNodeExtended,
  ecosystemPromises,
  configRelaxed,
  ...(typescriptBase ? [typescriptBase] : []),
  ...(typescriptExtended ? [typescriptExtended] : []),
]
