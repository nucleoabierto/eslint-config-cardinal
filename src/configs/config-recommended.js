import { createBaseConfig } from '../base-config.js'
import configRelaxed from '../modules/config/relaxed.js'
import correctnessErrors from '../modules/correctness/errors.js'
import correctnessSyntax from '../modules/correctness/syntax.js'
import correctnessVariables from '../modules/correctness/variables.js'
import ecosystemImports from '../modules/ecosystem/imports/base.js'
import ecosystemNode from '../modules/ecosystem/node/base.js'
import ecosystemPromises from '../modules/ecosystem/promises.js'
import ecosystemWebBase from '../modules/ecosystem/web/base.js'
import modernEsFeatures from '../modules/modern/es-features.js'
import qualityEssential from '../modules/quality/essential.js'
import qualityRecommended from '../modules/quality/recommended.js'
import securityRecommended from '../modules/security/recommended.js'
import styleFormatting from '../modules/style/formatting.js'

/**
 * @module cardinal/config-recommended
 * @summary Preset por defecto que equilibra productividad y calidad.
 * @remarks Incluye basic + quality recommended + security + ecosystem (imports, node, promises).
 * Este es el preset recomendado para la mayoría de proyectos.
 */

const baseConfig = createBaseConfig('recommended')

/**
 * @summary Conjunto de configuraciones que forman el preset `recommended`.
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
  securityRecommended,
  ecosystemImports,
  ecosystemNode,
  ecosystemPromises,
  ecosystemWebBase,
  configRelaxed,
]
