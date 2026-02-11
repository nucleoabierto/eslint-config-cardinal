import { createBaseConfig } from '../base-config.js'
import configRelaxed from '../modules/config/relaxed.js'
import correctnessErrors from '../modules/correctness/errors.js'
import correctnessSyntax from '../modules/correctness/syntax.js'
import correctnessVariables from '../modules/correctness/variables.js'
import ecosystemImports from '../modules/ecosystem/imports/base.js'
import ecosystemNode from '../modules/ecosystem/node/base.js'
import ecosystemPromises from '../modules/ecosystem/promises.js'
import modernEsFeatures from '../modules/modern/es-features.js'
import qualityEssential from '../modules/quality/essential.js'
import qualityRecommended from '../modules/quality/recommended.js'
import securityCritical from '../modules/security/critical.js'
import securityRecommended from '../modules/security/recommended.js'
import styleFormatting from '../modules/style/formatting.js'
import typescriptBase from '../modules/typescript/base.js'

/**
 * @module cardinal/config-typescript
 * @summary Preset orientado a proyectos con TypeScript y reglas type-aware.
 * @remarks Amplía `recommended` con seguridad crítica y TypeScript base.
 */

const baseConfig = createBaseConfig('typescript', [
  '**/*.js',
  '**/*.mjs',
  '**/*.cjs',
  '**/*.ts',
  '**/*.tsx',
  '**/*.mts',
  '**/*.cts',
])

/**
 * @summary Conjunto de configuraciones que conforman el preset `typescript`.
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
  securityCritical,
  securityRecommended,
  ecosystemImports,
  ecosystemNode,
  ecosystemPromises,
  configRelaxed,
  ...(typescriptBase ? [typescriptBase] : []),
]
