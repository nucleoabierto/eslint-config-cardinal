import { createBaseConfig } from '../base-config.js'
import configRelaxed from '../modules/config/relaxed.js'
import correctnessErrors from '../modules/correctness/errors.js'
import correctnessSyntax from '../modules/correctness/syntax.js'
import correctnessVariables from '../modules/correctness/variables.js'
import ecosystemImports from '../modules/ecosystem/imports/base.js'
import ecosystemNode from '../modules/ecosystem/node/base.js'
import ecosystemPromises from '../modules/ecosystem/promises.js'
import ecosystemReact from '../modules/ecosystem/react.js'
import modernEsFeatures from '../modules/modern/es-features.js'
import qualityEssential from '../modules/quality/essential.js'
import qualityRecommended from '../modules/quality/recommended.js'
import securityRecommended from '../modules/security/recommended.js'
import styleFormatting from '../modules/style/formatting.js'

/**
 * @module cardinal/config-react
 * @summary Preset orientado a proyectos React modernos con JSX y accesibilidad.
 * @remarks Activa reglas de React, Hooks y A11y cuando los plugins correspondientes están
 * disponibles.
 */

const baseConfig = createBaseConfig('react', [
  '**/*.js',
  '**/*.jsx',
  '**/*.mjs',
  '**/*.cjs',
])

/**
 * @summary Conjunto de configuraciones que conforman el preset `react`.
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
  configRelaxed,
  ...(ecosystemReact ? [ecosystemReact] : []),
]
