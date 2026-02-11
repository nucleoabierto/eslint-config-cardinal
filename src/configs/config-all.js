import { createBaseConfig } from '../base-config.js'
import configRelaxed from '../modules/config/relaxed.js'
import correctnessErrors from '../modules/correctness/errors.js'
import correctnessSyntax from '../modules/correctness/syntax.js'
import correctnessVariables from '../modules/correctness/variables.js'
import ecosystemImports from '../modules/ecosystem/imports/base.js'
import ecosystemImportsComplete from '../modules/ecosystem/imports/complete.js'
import ecosystemImportsExtended from '../modules/ecosystem/imports/extended.js'
import ecosystemNode from '../modules/ecosystem/node/base.js'
import ecosystemNodeComplete from '../modules/ecosystem/node/complete.js'
import ecosystemNodeExtended from '../modules/ecosystem/node/extended.js'
import ecosystemPromises from '../modules/ecosystem/promises.js'
import ecosystemReact from '../modules/ecosystem/react.js'
import ecosystemWebBase from '../modules/ecosystem/web/base.js'
import ecosystemWebExtended from '../modules/ecosystem/web/extended.js'
import modernEsFeatures from '../modules/modern/es-features.js'
import qualityComments from '../modules/quality/comments.js'
import qualityEssential from '../modules/quality/essential.js'
import qualitySonarjsExtended from '../modules/quality/plugins/sonarjs-extended.js'
import qualityUnicornComplete from '../modules/quality/plugins/unicorn-complete.js'
import qualityUnicornEssential from '../modules/quality/plugins/unicorn-essential.js'
import qualityUnicornExtended from '../modules/quality/plugins/unicorn-extended.js'
import qualityUnicornWeb from '../modules/quality/plugins/unicorn-web.js'
import qualityRecommended from '../modules/quality/recommended.js'
import qualityRegex from '../modules/quality/regex.js'
import qualityStrict from '../modules/quality/strict.js'
import securityCritical from '../modules/security/critical.js'
import securityComplete from '../modules/security/plugins/security-complete.js'
import securitySonarjs from '../modules/security/plugins/sonarjs-security.js'
import securityRecommended from '../modules/security/recommended.js'
import styleFormattingStrict from '../modules/style/formatting-strict.js'
import styleFormatting from '../modules/style/formatting.js'
import typescriptBase from '../modules/typescript/base.js'
import typescriptExtended from '../modules/typescript/extended.js'
import typescriptStrict from '../modules/typescript/strict.js'

/**
 * @module cardinal/config-all
 * @summary Preset más completo con cobertura máxima para proyectos críticos.
 * @remarks Incluye todas las capas de severidad: essential + recommended + strict.
 * Ofrece cobertura máxima para proyectos críticos con todo el ecosistema
 * JavaScript/TypeScript/React.
 */

const baseConfig = createBaseConfig('all', [
  '**/*.js',
  '**/*.mjs',
  '**/*.cjs',
  '**/*.ts',
  '**/*.tsx',
  '**/*.mts',
  '**/*.cts',
])

/**
 * @summary Conjunto de configuraciones que forman el preset `all`.
 * @returns {import('eslint').Linter.Config[]} Lista ordenada para ESLint Flat Config.
 */
export default [
  baseConfig,
  correctnessErrors,
  correctnessSyntax,
  correctnessVariables,
  modernEsFeatures,
  styleFormatting,
  styleFormattingStrict,
  qualityEssential,
  qualityRecommended,
  qualityStrict,
  qualityComments,
  qualityRegex,
  qualityUnicornEssential,
  qualityUnicornExtended,
  qualityUnicornComplete,
  qualityUnicornWeb,
  qualitySonarjsExtended,
  securityCritical,
  securityRecommended,
  securitySonarjs,
  securityComplete,
  ecosystemImports,
  ecosystemImportsExtended,
  ecosystemImportsComplete,
  ecosystemNode,
  ecosystemNodeExtended,
  ecosystemNodeComplete,
  ecosystemPromises,
  ecosystemWebBase,
  ecosystemWebExtended,
  configRelaxed,
  ...(ecosystemReact ? [ecosystemReact] : []),
  ...(typescriptBase ? [typescriptBase] : []),
  ...(typescriptExtended ? [typescriptExtended] : []),
  ...(typescriptStrict ? [typescriptStrict] : []),
]
