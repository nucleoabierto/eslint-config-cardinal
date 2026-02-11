import { createBaseConfig } from '../base-config.js'
import configRelaxed from '../modules/config/relaxed.js'
import correctnessErrors from '../modules/correctness/errors.js'
import correctnessSyntax from '../modules/correctness/syntax.js'
import correctnessVariables from '../modules/correctness/variables.js'
import modernEsFundamentals from '../modules/modern/es-fundamentals.js'
import qualityEssential from '../modules/quality/essential.js'
import styleFormatting from '../modules/style/formatting.js'

/**
 * @module cardinal/config-basic
 * @summary Preset fundamental con reglas esenciales de calidad y estilo.
 * @remarks Punto de partida minimalista para proyectos JavaScript modernos.
 * Incluye: correctness (errors, syntax, variables) + modern (es-fundamentals) + style (formatting)
 * + quality (essential) + relaxed.
 */

const baseConfig = createBaseConfig('basic')

/**
 * @summary Conjunto de configuraciones que conforman el preset `basic`.
 * @returns {import('eslint').Linter.FlatConfig[]} Lista ordenada para ESLint Flat Config.
 */
export default [
  baseConfig,
  correctnessErrors,
  correctnessSyntax,
  correctnessVariables,
  modernEsFundamentals,
  styleFormatting,
  qualityEssential,
  configRelaxed,
]
