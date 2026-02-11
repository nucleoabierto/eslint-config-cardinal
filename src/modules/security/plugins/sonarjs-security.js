import pluginSonarJS from 'eslint-plugin-sonarjs'

/**
 * @module cardinal/safety/sonarjs-security
 * @summary Reglas críticas de seguridad de SonarJS (core, no web-specific).
 * @remarks Previene vulnerabilidades graves: contraseñas hardcodeadas, SQL injection, eval, etc.
 *
 * Reglas removidas por deprecación en sonarjs:
 * - sonarjs/encryption (deprecada, reemplazada por encryption-secure-mode)
 * - sonarjs/no-vue-bypass-sanitization (deprecada, componente eliminado del plugin)
 *
 * NOTA DE CONSOLIDACIÓN:
 * Las siguientes 14 reglas específicas de navegador/web se han movido a ecosystem/web/:
 * - sonarjs/insecure-cookie → ecosystem/web/base.js
 * - sonarjs/cors → ecosystem/web/base.js
 * - sonarjs/link-with-target-blank → ecosystem/web/base.js
 * - sonarjs/disabled-auto-escaping → ecosystem/web/base.js
 * - sonarjs/content-security-policy → ecosystem/web/base.js
 * - sonarjs/strict-transport-security → ecosystem/web/base.js
 * - sonarjs/x-powered-by → ecosystem/web/extended.js
 * - sonarjs/content-length → ecosystem/web/extended.js
 * - sonarjs/disabled-resource-integrity → ecosystem/web/extended.js
 * - sonarjs/no-mixed-content → ecosystem/web/extended.js
 * - sonarjs/frame-ancestors → ecosystem/web/extended.js
 * - sonarjs/no-mime-sniff → ecosystem/web/extended.js
 * - sonarjs/no-referrer-policy → ecosystem/web/extended.js
 * - sonarjs/no-angular-bypass-sanitization → ecosystem/web/extended.js
 *
 * Este módulo se enfoca en seguridad general (no específica de web/navegador).
 */

export default {
  name: 'cardinal/safety/sonarjs-security',
  plugins: {
    sonarjs: pluginSonarJS,
  },
  rules: {
    /* Prevención de contraseñas en código - vulnerabilidad grave */
    // eslint-disable-next-line sonarjs/no-hardcoded-passwords
    'sonarjs/no-hardcoded-passwords': 'error',

    /* Secretos hardcodeados en código */
    'sonarjs/no-hardcoded-secrets': 'error',

    /* Detectar firmas de secretos hardcodeados */
    'sonarjs/hardcoded-secret-signatures': 'error',

    /* Prevenir SQL injection */
    'sonarjs/sql-queries': 'error',

    /* SSL débil */
    'sonarjs/weak-ssl': 'error',

    /* Claves criptográficas débiles */
    'sonarjs/no-weak-keys': 'error',

    /* Protección CSRF */
    'sonarjs/csrf': 'error',

    /* Hashing seguro */
    'sonarjs/hashing': 'error',

    /* Protocolos de texto claro son inseguros */
    'sonarjs/no-clear-text-protocols': 'error',

    /* Certificados no verificados */
    'sonarjs/unverified-certificate': 'error',

    /* Hostname no verificado */
    'sonarjs/unverified-hostname': 'error',

    /* Modo de encriptación seguro */
    'sonarjs/encryption-secure-mode': 'error',

    /* Cifrados débiles */
    'sonarjs/no-weak-cipher': 'error',

    /* IPs hardcodeadas */
    'sonarjs/no-hardcoded-ip': 'error',

    /* Comandos OS desde path */
    'sonarjs/no-os-command-from-path': 'error',

    /* Comandos OS inseguros */
    'sonarjs/os-command': 'error',

    /* Unzip inseguro */
    'sonarjs/no-unsafe-unzip': 'error',

    /* Directorios públicamente escribibles */
    'sonarjs/publicly-writable-directories': 'error',

    /* Permisos JWT inseguros */
    'sonarjs/insecure-jwt-token': 'error',

    /* Archivos ocultos */
    'sonarjs/hidden-files': 'error',

    /* Logging de información confidencial */
    'sonarjs/confidential-information-logging': 'error',

    /* IP forward */
    'sonarjs/no-ip-forward': 'error',

    /* Permisos intrusivos */
    'sonarjs/no-intrusive-permissions': 'error',

    /* Regeneración de sesión */
    'sonarjs/session-regeneration': 'error',

  },
}
