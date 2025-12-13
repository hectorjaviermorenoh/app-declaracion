/******************************
 * CONFIGURACIÓN INICIAL
 ******************************/
const CARPETA_PRINCIPAL = "declaracion";
const JSON_CONFIGURACION = "configuracion.json";
const JSON_USUARIOS = "usuarios.json";
const JSON_ROLES = "roles.json";
const JSON_PRODUCTOS = "productos.json";
const JSON_BDD_DATOS = "bddatos.json";
const JSON_BDD_FACTURAS = "bddatosFacturas.json";
const JSON_LOGS = "logs.json";
const JSON_DATOS_TRIBUTARIOS = "datosTributarios.json";
const TOKEN_SECRET = "528138845199053779904519";

/******************************
 * CONSTANTE DE CONFIGURACIONES INICIALES
 ******************************/
const CONFIG_INICIAL = {
  CARPETA_PRINCIPAL: CARPETA_PRINCIPAL,
  TAMANO_MAX_MB: 10,
  TIPOS_PERMITIDOS: ["pdf", "jpg", "png", "docx", "txt", "xlsx"]
};

const DATOS_TRIBUTARIOS_INICIALES = [
  { id: "nit", label: "Número de Identificación Tributaria (NIT)", valor: "", orden: 1 },
  { id: "primerApellido", label: "Primer apellido", valor: "", orden: 2 },
  { id: "segundoApellido", label: "Segundo apellido", valor: "", orden: 3 },
  { id: "primerNombre", label: "Primer nombre", valor: "", orden: 4 },
  { id: "otrosNombres", label: "Otros nombres", valor: "", orden: 5 },
  { id: "codigoDireccionSeccional", label: "Código Dirección Seccional", valor: "", orden: 6 },
  { id: "codigoActividadEconomica", label: "Cód. Actividad económica", valor: "", orden: 7 }
];

const ROLES_INICIALES = [
    {
    "rol": "administrador",
    "permisos": [
      "*"
    ]
  }
];

/******************************
 * 🔐 CONFIGURACIÓN DE PERMISOS Y VALIDACIÓN
 ******************************/

// 🧩 Funciones expuestas al frontend (de lógica del negocio)
const FUNCIONES_LOGICA_NEGOCIO = [
  // --- GET ---
  "getConfig",
  "getFuncionesLogicaNegocio",
  "getRoles",
  "getUsuarios",
  "getProductos",
  "getDatosTributarios",
  "getLogs",
  "getProductosPorArchivo",
  "getTotalesFacturas",

  // --- POST ---
  "inicializarForzado",
  "subirArchivo",
  "subirArchivoFacturas",
  "setConfig",
  "limpiarLogsAntiguos",
  "addRol",
  "updateRol",
  "deleteRol",
  "addUsuario",
  "updateUsuario",
  "deleteUsuario",
  "addProducto",
  "deleteProducto",
  "replaceArchivo",
  "addDatoTributario",
  "updateDatoTributario",
  "deleteDatoTributario",
  "moveDatoTributario",
  "generarBackupZIP"
];

// ⚙️ Funciones generales internas — permitidas a todos los usuarios autenticados
const FUNCIONES_GENERALES = [
  "ping",
  "verificarTokenYAutorizar",
  "validarPermiso",
  "registrarLog",
  "manejarError",
  "leerJSON",
  "guardarJSON",
  "obtenerOCrearCarpeta",
  "normalizarTexto",
  "normalizarNombreArchivo",
  "toggleUsuarioActivo",
  "inicializarSistema",
  "getArchivosPorAnio"

];




/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA DESDE APPS SCRIPT Y CREACION DE CARPETAS Y ARCHIVOS INICIALES
 ******************************/
function inicializarSistema() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {
    // 1. Crear carpeta principal si no existe
    const carpetaPrincipal = obtenerOCrearCarpeta(CARPETA_PRINCIPAL);

    // 2. Crear JSON de configuración si no existe
    crearArchivoJSONSiNoExiste(carpetaPrincipal, JSON_CONFIGURACION, CONFIG_INICIAL);

    const correoAdmin = Session.getActiveUser().getEmail();

    // 3. Crear JSON de usuarios si no existe
    crearArchivoJSONSiNoExiste(carpetaPrincipal, JSON_USUARIOS, [
      { correo: correoAdmin, nombre: "Administrador", rol: "administrador", activo: true }
    ]);

    // 4. Crear JSON de productos si no existe
    crearArchivoJSONSiNoExiste(carpetaPrincipal, JSON_PRODUCTOS, []);

    // 5. Crear JSON de bddatos si no existe
    crearArchivoJSONSiNoExiste(carpetaPrincipal, JSON_BDD_DATOS, []);

    // 6. Crear JSON de bddatos si no existe
    crearArchivoJSONSiNoExiste(carpetaPrincipal, JSON_BDD_FACTURAS, []);

    // 7. Crear JSON de logs si no existe
    crearArchivoJSONSiNoExiste(carpetaPrincipal, JSON_LOGS, []);

    // 8. Crear datos tributarios con valores iniciales
    crearArchivoJSONSiNoExiste(carpetaPrincipal, JSON_DATOS_TRIBUTARIOS, DATOS_TRIBUTARIOS_INICIALES);

    // 9. Crear Roles con valores iniciales
    crearArchivoJSONSiNoExiste(carpetaPrincipal, JSON_ROLES, ROLES_INICIALES);

    Logger.log("✅ Sistema inicializado correctamente");

  } finally {
    lock.releaseLock();
  }
}
/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA SOLO ARCHIVOS
 ******************************/
function inicializarSistemaSeguro(data) {
  const correo = Session.getActiveUser().getEmail() || data.correo || "";

  // 1. Validar admin
  if (!esAdmin(correo)) {
    return respuestaJSON({ status: "error", mensaje: "⛔ No autorizado", correo });
  }

  // 2. Validar confirmación
  if (!data.confirmacion || data.confirmacion !== "INICIALIZAR") {
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Debe confirmar escribiendo INICIALIZAR"
    });
  }

  // 3. Inicializar sistema
  inicializarSistemaForzado();


  return respuestaJSON({
    status: "ok",
    mensaje: "✅ Sistema reinicializado correctamente inicializarSistemaSeguro",
    correo
  });
}
/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA FORZADO Y BORRADO DE CARPETAS
 ******************************/

/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA FORZADO Y BORRADO DE CARPETAS
 ******************************/
function inicializarSistemaForzado(correoAdmin, borrarCarpetas) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  const correoEjecutor = correoAdmin?.correo || "sistema"; // 👈 quién ejecuta la acción

  try {
    const carpetaPrincipal = obtenerOCrearCarpeta(CARPETA_PRINCIPAL);

    let resultadoLimpieza = null;
    if (borrarCarpetas) {
      resultadoLimpieza = limpiarCarpetas(); // devuelve objeto {mensaje: "..."}
    }

    // 1️⃣ Sobrescribir configuración
    guardarORecrearJSON(carpetaPrincipal, JSON_CONFIGURACION, CONFIG_INICIAL);

    // 2️⃣ Sobrescribir usuarios con el correo enviado
    guardarORecrearJSON(carpetaPrincipal, JSON_USUARIOS, [
      { correo: correoAdmin?.correo, nombre: "Administrador", rol: "administrador", activo: true }
    ]);

    // 3️⃣ Vaciar productos, bddatos y logs
    guardarORecrearJSON(carpetaPrincipal, JSON_PRODUCTOS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_BDD_DATOS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_BDD_FACTURAS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_LOGS, []);

    // 4️⃣ Crear datos tributarios con valores iniciales
    guardarORecrearJSON(carpetaPrincipal, JSON_DATOS_TRIBUTARIOS, DATOS_TRIBUTARIOS_INICIALES);

    // 5️⃣ Registrar acción en logs
    registrarLog("inicializarSistemaForzado", correoEjecutor, {
      mensaje: "🔁 Sistema reinicializado forzadamente",
      correoAdmin: correoAdmin?.correo,
      borrarCarpetas,
      limpieza: resultadoLimpieza ? resultadoLimpieza.mensaje : "Sin borrar carpetas",
      fecha: new Date().toISOString()
    });

    Logger.log(`✅ Sistema reinicializado forzadamente por ${correoEjecutor}`);

    return {
      status: "ok",
      mensaje: "✅ Sistema reinicializado correctamente",
      correo: correoAdmin?.correo,
      limpieza: resultadoLimpieza ? resultadoLimpieza.mensaje : "Sin borrar carpetas"
    };

  } catch (err) {
    // 🚨 En caso de error, también registramos en logs
    registrarLog("ERROR_inicializarSistemaForzado", correoEjecutor, {
      mensaje: err.message,
      stack: err.stack
    });
    throw err;
  } finally {
    lock.releaseLock();
  }
}


/******************************
 * 🔒 FUNCIONES DE SEGURIDAD
 ******************************/
function esAdmin(correo) {
  let usuarios = leerJSON(JSON_USUARIOS);
  let user = usuarios.find(u => {
    return u.correo && u.correo.toLowerCase().trim() === correo.toLowerCase().trim();
  });
  return user && user.rol === "administrador";
}
function verificarTokenYAutorizar(token) {
  const CLIENT_ID = "648554486893-4b33o1cei2rfhv8ehn917ovf60h1u9q4.apps.googleusercontent.com";
  const tokenInfoUrl = 'https://oauth2.googleapis.com/tokeninfo?id_token=' + token;
  
  try {
    const response = UrlFetchApp.fetch(tokenInfoUrl, { method: 'GET', muteHttpExceptions: true });
    const tokenPayload = JSON.parse(response.getContentText());

    if (tokenPayload.error) {
      return { autorizado: false, mensaje: "Token inválido o expirado" };
    }
    if (tokenPayload.aud !== CLIENT_ID) {
      return { autorizado: false, mensaje: "ID de cliente incorrecto" };
    }

    const userEmail = tokenPayload.email;
    const userNombre = tokenPayload.name;
    const userPicture = tokenPayload.picture;
    const usuarios = leerJSON(JSON_USUARIOS);
    const roles = leerJSON(JSON_ROLES);

    const usuario = usuarios.find(u => u.correo === userEmail && u.activo);
    if (!usuario) {
      return { autorizado: false, mensaje: "Usuario no registrado o inactivo" };
    }

    const rol = roles.find(r => r.rol === usuario.rol);
    if (!rol) {
      return { autorizado: false, mensaje: "Rol no definido para el usuario" };
    }

    return {
      autorizado: true,
      correo: userEmail,
      nombre: userNombre,
      picture: userPicture,
      rol: usuario.rol,
      permisos: rol.permisos
    };

  } catch (err) {
    return { autorizado: false, mensaje: "Error al verificar token: " + err.message };
  }
}
function validarPermiso(usuario, accion) {
  // 🚫 Usuario no autenticado
  if (!usuario || !usuario.autorizado) return false;

  // 🟢 Permitir funciones generales a todos los roles autenticados
  if (FUNCIONES_GENERALES.includes(accion)) return true;

  // 👑 Rol administrador o wildcard "*" = acceso total
  if (usuario.rol === "administrador") return true;
  if (usuario.permisos && usuario.permisos.includes("*")) return true;

  // 🧩 Validar acción dentro de las funciones de lógica del negocio
  if (FUNCIONES_LOGICA_NEGOCIO.includes(accion)) {
    const tienePermiso = usuario.permisos && usuario.permisos.includes(accion);

    if (!tienePermiso) {
      registrarLog("PERMISO_DENEGADO", usuario.correo, {
        accionIntentada: accion,
        rol: usuario.rol,
        permisosDisponibles: usuario.permisos
      });
    }

    return tienePermiso;
  }

  // ⚠️ Si la acción no está registrada en ninguna lista, la denegamos
  registrarLog("PERMISO_DESCONOCIDO", usuario.correo, { accion });
  return false;
}

/************************************************************************************ */
/************************************************************************************ */

/**
 * 🔑 GENERA un token de sesión propio (JWT-like)
 * Este token se genera DESPUÉS de que Google valida al usuario.
 */
function generarTokenPropio(usuarioInfo) {
  const payload = {
    // Info del usuario (verificada por Google)
    correo: usuarioInfo.correo,
    rol: usuarioInfo.rol,
    nombre: usuarioInfo.nombre,
    picture: usuarioInfo.picture,
    permisos: usuarioInfo.permisos,
    
    // 💡 Tiempos de vida (iat = issued at, exp = expiration)
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (8 * 60 * 60) // 👈 Válido por 8 horas
    // exp: Math.floor(Date.now() / 1000) + (30 * 60) // 👈 Válido por 1 horas
  };
  
  // Codificamos el payload (String -> Byte[] -> Base64WebSafe)
  const payloadStr = JSON.stringify(payload);
  const payloadB64 = Utilities.base64EncodeWebSafe(payloadStr, Utilities.Charset.UTF_8); // ✅ CORREGIDO 1

  // Creamos la firma
  // computeHmacSha256Signature necesita el payloadB64 como String, lo cual es correcto
  const signature = Utilities.computeHmacSha256Signature(payloadB64, TOKEN_SECRET); 

  // Codificamos la firma (Byte[] -> Base64WebSafe)
  const signatureB64 = Utilities.base64EncodeWebSafe(signature); // ✅ CORREGIDO 2
  
  // Formato: [payload].[signature]
  return payloadB64 + "." + signatureB64;
}

/**
 * 🔐 VALIDA un token de sesión propio
 * Se usará en CADA petición (doGet/doPost) excepto en el login.
 */
function verificarTokenPropio(token) {
  if (!token) {
    return { autorizado: false, mensaje: "No se proporcionó token" };
  }

  try {
    const parts = token.split('.');
    if (parts.length !== 2) {
      return { autorizado: false, mensaje: "Token malformado" };
    }
    
    const [payloadB64, signatureB64] = parts;
    
    // 1. Verificar la firma
    const signature = Utilities.base64DecodeWebSafe(signatureB64);
    const expectedSignature = Utilities.computeHmacSha256Signature(payloadB64, TOKEN_SECRET);
    
    // Comparación segura de los bytes de la firma
    if (signature.length !== expectedSignature.length || !signature.every((byte, i) => byte === expectedSignature[i])) {
      return { autorizado: false, mensaje: "Firma de token inválida" };
    }
    
    // 2. Decodificar payload
    const payloadStr = Utilities.newBlob(Utilities.base64DecodeWebSafe(payloadB64)).getDataAsString();
    const payload = JSON.parse(payloadStr);

    // 3. Verificar expiración
    if (payload.exp * 1000 < Date.now()) {
      return { autorizado: false, mensaje: "Token expirado" };
    }

    // ✅ Si todo está ok, devolvemos el payload del usuario
    return { autorizado: true, ...payload };
  
  } catch (e) {
    return { autorizado: false, mensaje: "Error al validar token: " + e.message };
  }
}


/**
 * 📞 MANEJA EL INTERCAMBIO DE TOKEN
 * El cliente llama a esta función con el token de Google.
 * Esta función devuelve un token propio.
 */
function handleGoogleLogin(data) {
  const { googleToken } = data;
  if (!googleToken) {
    return respuestaJSON({ status: "error", mensaje: "No se recibió el token de Google (googleToken)" });
  }
  
  // 1. Validar el token de Google y buscar usuario (función que YA TENÍAS)
  const infoUsuarioGoogle = verificarTokenYAutorizar(googleToken);
  
  if (!infoUsuarioGoogle.autorizado) {
    // Si el token de Google es inválido o el usuario no está en usuarios.json
    return respuestaJSON(infoUsuarioGoogle);
  }
  
  // 2. Si es válido, generar nuestro propio token de sesión
  const tokenPropio = generarTokenPropio(infoUsuarioGoogle);
  
  // 3. Devolver el token propio y la info del usuario al cliente
  return respuestaJSON({
    status: "ok",
    token: tokenPropio, // 👈 Nuestro token
    user: {            // 👈 Info del usuario para el AuthContext
      correo: infoUsuarioGoogle.correo,
      nombre: infoUsuarioGoogle.nombre,
      picture: infoUsuarioGoogle.picture,
      rol: infoUsuarioGoogle.rol,
      permisos: infoUsuarioGoogle.permisos
    }
  });
}

/************************************************************************************ */
/************************************************************************************ */

/******************************
 * MANEJO CENTRALIZADO DE ERRORES
 ******************************/
function manejarError(err, contexto, usuario) {
  const mensaje = err && err.message ? err.message : "Error desconocido";

  const detalle = {
    contexto: contexto,
    usuario: usuario || "desconocido",
    mensaje: mensaje,
    stack: err && err.stack ? err.stack : null,
    fecha: new Date().toISOString()
  };

  // Guardar en logs.json
  registrarLog("ERROR", usuario || "desconocido", detalle);

  return respuestaJSON({
    status: "error",
    codigo: "E_INTERNO",
    mensaje: mensaje,
    contexto: contexto
  });
}

function generarBackupZIP(usuario) {
  try {
    const carpetaPrincipal = obtenerOCrearCarpeta(CARPETA_PRINCIPAL);
    const fecha = new Date();

    const nombreZip = `Backup_Declaracion_${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}_${fecha.getHours()}-${fecha.getMinutes()}.zip`;

    const blobs = [];

    // Archivos raíz
    const archivos = carpetaPrincipal.getFiles();
    while (archivos.hasNext()) {
      blobs.push(archivos.next().getBlob());
    }

    // Subcarpetas (mantener estructura)
    const carpetas = carpetaPrincipal.getFolders();
    while (carpetas.hasNext()) {
      const carpeta = carpetas.next();
      const subArchivos = carpeta.getFiles();
      while (subArchivos.hasNext()) {
        const archivo = subArchivos.next();
        blobs.push(
          archivo.getBlob().setName(`${carpeta.getName()}/${archivo.getName()}`)
        );
      }
    }

    const blobZip = Utilities.zip(blobs, nombreZip);

    // ⭐ Solo lo enviamos al frontend → NO guardar en Drive
    const base64Data = Utilities.base64Encode(blobZip.getBytes());

    registrarLog("backup", usuario.correo, `Se generó un backup descargado por el usuario`);

    return {
      status: "ok",
      base64: base64Data,
      mimeType: blobZip.getContentType(),
      nombreArchivo: nombreZip,
      mensaje: "✅ Backup generado con éxito"
    };

  } catch (err) {
    return { status: "error", mensaje: "❌ Error al generar backup: " + err.message };
  }
}

/******************************
 * FUNCIONES AUXILIARES
 ******************************/
function obtenerOCrearCarpeta(nombre) {
  const carpetas = DriveApp.getFoldersByName(nombre);
  return carpetas.hasNext() ? carpetas.next() : DriveApp.createFolder(nombre);
}
function obtenerOCrearCarpetaEn(carpetaPadre, nombre) {
  let carpetas = carpetaPadre.getFoldersByName(nombre);
  return carpetas.hasNext() ? carpetas.next() : carpetaPadre.createFolder(nombre);
}
function crearArchivoJSONSiNoExiste(carpeta, nombreArchivo, contenidoInicial) {
  const archivos = carpeta.getFilesByName(nombreArchivo);
  if (!archivos.hasNext()) {
    carpeta.createFile(nombreArchivo, JSON.stringify(contenidoInicial, null, 2), MimeType.PLAIN_TEXT);
    Logger.log(`📄 Archivo creado: ${nombreArchivo}`);
  } else {
    Logger.log(`ℹ️ Archivo ya existe: ${nombreArchivo}`);
  }
}
function guardarJSON(nombreArchivo, contenido) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s

  try {
    const carpeta = obtenerOCrearCarpeta(CARPETA_PRINCIPAL);
    const archivos = carpeta.getFilesByName(nombreArchivo);
    if (!archivos.hasNext()) throw new Error(`Archivo no encontrado: ${nombreArchivo}`);
    const archivo = archivos.next();
    archivo.setContent(JSON.stringify(contenido, null, 2));
  } catch (err) {
    Logger.log(`❌ Error al guardar ${nombreArchivo}: ${err.message}`);
    registrarLog("guardarJSON", "sistema", { archivo: nombreArchivo, error: err.message });
    return false;
  } finally {
    lock.releaseLock();
  }

}
function leerJSON(nombreArchivo) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // 🔒 Lock aplicado

  try {
    const carpeta = obtenerOCrearCarpeta(CARPETA_PRINCIPAL);
    const archivos = carpeta.getFilesByName(nombreArchivo);
    if (!archivos.hasNext()) throw new Error(`Archivo no encontrado: ${nombreArchivo}`);
    const archivo = archivos.next();

    return JSON.parse(archivo.getBlob().getDataAsString());

  } finally {
    lock.releaseLock();
  }
}
function respuestaJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function guardarORecrearJSON(carpeta, nombreArchivo, contenidoInicial) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {
    const archivos = carpeta.getFilesByName(nombreArchivo);
    if (archivos.hasNext()) {
      const archivo = archivos.next();
      archivo.setContent(JSON.stringify(contenidoInicial, null, 2));
    } else {
      carpeta.createFile(nombreArchivo, JSON.stringify(contenidoInicial, null, 2), MimeType.PLAIN_TEXT);
    }
  } finally {
    lock.releaseLock();
  }
}
function normalizarTexto(texto) {
  if (!texto) return "";
  return texto
    .toString()
    .trim()                        // quitar espacios inicio/fin
    .toLowerCase()                 // todo a minúsculas
    .normalize("NFD")              // separar letras de tildes (á -> a + ́)
    .replace(/[\u0300-\u036f]/g, "") // quitar tildes y diacríticos
    .replace(/\s+/g, " ")          // múltiples espacios → uno
    .replace(/\./g, "");           // quitar puntos
}
function normalizarNombreArchivo(nombreOriginal) {
  // Elimina la extensión del archivo
  let nombreBase = nombreOriginal.replace(/\.[^/.]+$/, "");

  // Convierte todo a minúsculas y reemplaza caracteres no alfanuméricos por espacios
  nombreBase = nombreBase.toLowerCase().replace(/[^a-z0-9]+/gi, " ").trim();

  // Divide en palabras y capitaliza cada una
  let nombrePascal = nombreBase
    .split(" ")
    .filter(Boolean) // elimina espacios dobles
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

  return nombrePascal;
}
function verificarArchivoDuplicado(carpetaDestino, nombreArchivo) {
  const archivos = carpetaDestino.getFilesByName(nombreArchivo);
  return archivos.hasNext() ? archivos.next() : null;
}
function validarArchivo(archivoBlob, config) {
  let extension = archivoBlob.getName().split(".").pop().toLowerCase();
  let tamanoMB = archivoBlob.getBytes().length / (1024 * 1024);

  if (!config.TIPOS_PERMITIDOS.includes(extension)) {
    return { ok: false, mensaje: "❌ Tipo de archivo no permitido" };
  }
  if (tamanoMB > config.TAMANO_MAX_MB) {
    return { ok: false, mensaje: `❌ Tamaño máximo permitido: ${config.TAMANO_MAX_MB} MB` };
  }

  return { ok: true, extension };
}
function guardarArchivoEnDrive(config, archivoBlob, anio, subcarpeta, usarExistente) {
  const nombrePascal = normalizarNombreArchivo(archivoBlob.getName());
  const extension = archivoBlob.getName().split(".").pop().toLowerCase();
  const nuevoNombre = `${nombrePascal}.${extension}`;

  const carpetaPrincipal = obtenerOCrearCarpeta(config.CARPETA_PRINCIPAL);
  const carpetaAnio = obtenerOCrearCarpetaEn(carpetaPrincipal, anio);
  const carpetaDestino = subcarpeta
    ? obtenerOCrearCarpetaEn(carpetaAnio, subcarpeta)
    : carpetaAnio;

  const existente = verificarArchivoDuplicado(carpetaDestino, nuevoNombre);

  if (existente && !usarExistente) {
    return {
      ok: false,
      status: "exists",
      mensaje: "⚠️ Ya existe un archivo con este nombre",
      idArchivo: existente.getId(),
      link: existente.getUrl(),
      nombreArchivo: nuevoNombre,
    };
  }

  const file = existente && usarExistente
    ? existente
    : carpetaDestino.createFile(archivoBlob);

  if (!existente || !usarExistente) file.setName(nuevoNombre);

  return {
    ok: true,
    file,
    nuevoNombre,
    link: file.getUrl(),
  };
}
function capturarPayload(e, isMultipart) {
  try {
    return {
      parametros: e.parameter || null,
      postData: e.postData ? e.postData.contents : null,
      isMultipart: !!isMultipart
    };
  } catch (error) {
    // Si falla la captura, devolvemos un objeto para que el caller lo maneje
    throw new Error('Error al capturar payload: ' + error.message);
  }
}
function obtenerPayloadArchivo(e, isMultipart, camposEsperados) {
  const payload = { debug: capturarPayload(e, isMultipart) };

  if (isMultipart) {
    payload.archivoBlob = e.files.archivo;
    camposEsperados.forEach(campo => {
      payload[campo] = e.parameter[campo] || "";
    });
  } else {
    const data = JSON.parse(e.postData.contents);
    if (!data.archivo) throw new Error("❌ No se envió archivo");
    payload.archivoBlob = Utilities.newBlob(
      Utilities.base64Decode(data.archivo.base64),
      data.archivo.tipo || MimeType.BINARY,
      data.archivo.nombre
    );
    camposEsperados.forEach(campo => {
      payload[campo] = data[campo] || "";
    });
  }

  return payload;
}
function registrarLog(accion, usuario, detalle) {

  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // hasta 30s esperando

  try {
    let logs = leerJSON(JSON_LOGS);
    const nuevoLog = {
      fecha: new Date().toISOString(),
      accion,
      usuario: usuario || "desconocido",
      detalle: detalle || {}
    };
    logs.push(nuevoLog);
    guardarJSON(JSON_LOGS, logs);
    return nuevoLog; // opcional, para debug

  } finally {
    lock.releaseLock();
  }
}
function limpiarCarpetas() {
  const carpetaPrincipal = obtenerOCrearCarpeta(CARPETA_PRINCIPAL);
  const subcarpetas = carpetaPrincipal.getFolders();
  const archivos = carpetaPrincipal.getFiles();

  // Borrar subcarpetas (años, etc.)
  while (subcarpetas.hasNext()) {
    const carpeta = subcarpetas.next();
    carpeta.setTrashed(true); // Manda a papelera
  }

  return { mensaje: "🗑️ Carpetas borradas correctamente" };

}

/******************************
 * MÉTODO DOGET
 ******************************/
function doGet(e) {
  try {
    const accion = e.parameter.accion;
    const token = e.parameter.token;
    let usuario; // Variable para guardar el usuario validado

    // --- 1. AUTENTICACIÓN (NUEVO) ---
    // Todas las acciones GET requieren un token propio válido
    if (!token) {
      return respuestaJSON({ autorizado: false, mensaje: "Token de sesión requerido" });
    }
    
    usuario = verificarTokenPropio(token); // 👈 USA EL NUEVO VALIDADOR
    
    if (!usuario.autorizado) {
      return respuestaJSON({ autorizado: false, mensaje: usuario.mensaje });
    }
    
    // --- 2. AUTORIZACIÓN (PERMISOS) ---
    if (!validarPermiso(usuario, accion)) {
      return respuestaJSON({ autorizado: false, mensaje: "No tienes permiso para ejecutar " + accion });
    }
    
    // --- 3. SWITCH DE ACCIONES ---
    switch (accion) {

      case "ping":
        // 1. Si llegó aquí, el token es válido.
        
        // 2. Generar un NUEVO token de sesión con 8 horas más de vida
        const nuevoTokenPropio = generarTokenPropio(usuario);
        
        // 3. Devolver el nuevo token y los datos de usuario
        return respuestaJSON({
          status: "ok",
          mensaje: "Token de sesión renovado",
          autorizado: true,
          token: nuevoTokenPropio, // 👈 NUEVO TOKEN
          ...usuario 
        });

      case "getConfig":
        return getConfig();
      case "getFuncionesLogicaNegocio":
        return getFuncionesLogicaNegocio();
      case "getUsuarios":
        return getUsuarios();
      case "getRoles":
        return getRoles();
      case "getProductos":
        return respuestaJSON({status: "ok", data: leerJSON(JSON_PRODUCTOS)});
        // return getProductos();

      case "getDatosTributarios":
        return getDatosTributarios();

      case "getLogs":
        return getLogs();

      case "getArchivosPorAnio":
        const anio = e.parameter.anio;
        if (!anio) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar un año" });
        }
        return getArchivosPorAnio(anio);

      case "getFacturasPorAnio":
        const anioF = e.parameter.anio;
        if (!anioF) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar un año" });
        }
        return getFacturasPorAnio(anioF);

      case "getProductosPorArchivo":
        const archivoId = e.parameter.archivoId;
        if (!archivoId) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar archivoId" });
        }
        return getProductosPorArchivo(archivoId);

      default:
        return respuestaJSON({ status: "error", mensaje: "Acción no reconocida backens" });
    }

  } catch (err) {
    const correo = (e && e.parameter && e.parameter.correo) || "desconocido";
    return manejarError(err, "doGet", correo);
  }
}
/******************************
 * MÉTODO DOPOST
 ******************************/
function doPost(e) {
  try {
    let accion = "";
    let data = {};
    const isMultipart = e.files && Object.keys(e.files).length > 0;

    // --- 1. PARSEO DE REQUEST (Sin cambios) ---
    if (isMultipart) {
      accion = e.parameter.accion || "";
      data = e.parameter; 
    } else if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        return respuestaJSON({
          success: false,
          status: "error_json",
          mensaje: "❌ Error al parsear el cuerpo JSON: " + err.message,
        });
      }
      accion = data.accion || "";
    } else {
      return respuestaJSON({
        success: false,
        status: "sin_datos",
        mensaje: "❌ No se recibió ni JSON ni archivos en la solicitud",
        parametros: e.parameter || null,
      });
    }

    // --- 2. AUTENTICACIÓN Y AUTORIZACIÓN (NUEVO) ---
    let usuario; // Variable para guardar el usuario validado

    // La acción 'googleLogin' es pública (no requiere token previo)
    // Todas las demás acciones SÍ requieren un token propio
    if (accion !== "googleLogin") {
      const token = e.parameter.token || data.token;
      if (!token) {
        return respuestaJSON({
          autorizado: false,
          success: false,
          status: "sin_token",
          mensaje: "Token de sesión requerido",
        });
      }

      usuario = verificarTokenPropio(token); // 👈 USA EL NUEVO VALIDADOR

      if (!usuario.autorizado) {
        return respuestaJSON({
          autorizado: false,
          success: false,
          status: "token_invalido",
          mensaje: usuario.mensaje || "Token inválido o expirado",
        });
      }

      // Validar permisos (como antes, pero con el 'usuario' del token)
      if (!validarPermiso(usuario, accion)) {
        return respuestaJSON({
          autorizado: false,
          success: false,
          status: "sin_permiso",
          mensaje: "No tienes permiso para ejecutar " + accion,
        });
      }
    }

    // --- 3. SWITCH DE ACCIONES ---
    // Ahora 'usuario' está disponible para todas las funciones que lo necesiten
    switch (accion) {
      case "googleLogin": // 👈 NUEVA ACCIÓN
        return handleGoogleLogin(data);

      case "inicializarForzado":
        const confirmar = data.confirmar;
        const borrarCarpetas = data.borrarCarpetas === true || data.borrarCarpetas === "true";

        if (confirmar !== "INICIALIZAR") {
          return respuestaJSON({ status: "error", mensaje: "⚠️ Confirmación inválida, escriba INICIALIZAR" });
        }

        // --- 👇 CORRECCIÓN 3 ---
        if (usuario.rol !== "administrador") {
          return respuestaJSON({
            status: "sin_permiso",
            mensaje: "Solo el rol administrador puede reinicializar el sistema",
          });
        }

        const resultado = inicializarSistemaForzado(usuario, borrarCarpetas);
        
        return respuestaJSON({ ...resultado });

      case "subirArchivo":
        return subirArchivoProducto(e, isMultipart, usuario);
      case "subirArchivoFacturas":
        return subirArchivoFacturas(e, isMultipart, usuario);
      case "updateConfig":
        return updateConfig(data, usuario);
      case "generarBackupZIP":
        return respuestaJSON(generarBackupZIP(usuario));
      case "limpiarLogsAntiguos":
        return limpiarLogsAntiguos(usuario);
      case "addRol":
        return addRol(data, usuario);
      case "updateRol":
        return updateRol(data, usuario);
      case "deleteRol":
        return deleteRol(data, usuario);
      case "addUsuario":
        return addUsuario(data, usuario);
      case "toggleUsuarioActivo":
        return toggleUsuarioActivo(data, usuario);
      case "updateUsuario":
        return updateUsuario(data, usuario);
      case "deleteUsuario":
        return deleteUsuario(data, usuario);
      case "addProducto":
        return addProducto(data, usuario);
      case "deleteProducto":
        return deleteProducto(data.id, usuario);
      case "replaceArchivo":
        return replaceArchivo(data, usuario);
      case "inicializarSistema":
        return inicializarSistemaSeguro(data, usuario);
      case "addDatoTributario":
        return addDatoTributario(data, usuario);
      case "updateDatoTributario":
        return updateDatoTributario(data, usuario);
      case "deleteDatoTributario":
        return deleteDatoTributario(data, usuario);
      case "moveDatoTributario":
        return moveDatoTributario(data, usuario);
      case "updateFactura":
        return updateFactura(data, usuario);

      case "deleteFactura":
        return deleteFactura(data, usuario);

      default:
        return respuestaJSON({ status: "error", mensaje: "Acción no reconocida backend post" });
    }

  } catch (err) {
    const correo = (e && e.parameter && e.parameter.correo) || "desconocido";
    return manejarError(err, "doPost", correo);
  }
}
/******************************
 * FUNCIONES DE LOGICA DEL NEGOCIO
 ******************************/

function getFuncionesLogicaNegocio() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {

    if (!FUNCIONES_LOGICA_NEGOCIO || !Array.isArray(FUNCIONES_LOGICA_NEGOCIO)) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se encontraron funciones de lógica de negocio definidas.",
        datos: [],
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "📘 Funciones de lógica de negocio obtenidas correctamente.",
      datos: FUNCIONES_LOGICA_NEGOCIO,
    });

  } catch (err) {
    manejarError(err, "getFuncionesLogicaNegocio");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al obtener las funciones de lógica de negocio.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}

/******************************
 * 🔧 CRUD DE CONFIGURACIÓN (versión final)
 ******************************/

function getConfig() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const config = leerJSON(JSON_CONFIGURACION);

    return respuestaJSON({
      status: "ok",
      mensaje: "⚙️ Configuración obtenida correctamente.",
      datos: config,
    });
  } catch (err) {
    manejarError(err, "getConfig");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al obtener la configuración.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function updateConfig(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const configActual = leerJSON(JSON_CONFIGURACION) || {};
    const correoEjecutor = usuario?.correo || "sistema";

    const nuevaConfig = {
      ...configActual,
      TAMANO_MAX_MB: data.TAMANO_MAX_MB ?? configActual.TAMANO_MAX_MB,
      TIPOS_PERMITIDOS: Array.isArray(data.TIPOS_PERMITIDOS)
        ? data.TIPOS_PERMITIDOS
        : configActual.TIPOS_PERMITIDOS,
    };

    guardarJSON(JSON_CONFIGURACION, nuevaConfig);
    registrarLog("updateConfig", correoEjecutor, {
      mensaje: "Configuración actualizada",
      nuevaConfig,
    });

    return respuestaJSON({
      status: "ok",
      mensaje: "✅ Configuración actualizada correctamente.",
      datos: nuevaConfig,
    });
  } catch (err) {
    manejarError(err, "updateConfig", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar la configuración.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}

/******************************
 * 🔧 CRUD DE ROLES (versión final, integrada con doPost y token)
 ******************************/

function getRoles() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const roles = leerJSON(JSON_ROLES) || [];

    if (!roles.length) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se encontraron roles registrados en el sistema.",
        data: [],
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "📘 Roles obtenidos correctamente.",
      data: roles,
    });
  } catch (err) {
    manejarError(err, "getRoles");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al obtener los roles. Intenta nuevamente o contacta al administrador.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function addRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const roles = leerJSON(JSON_ROLES) || [];
    // const nuevoRol = normalizarTexto(data?.rol || "").trim();
    const nuevoRol = data?.rol;
    const permisosIniciales = Array.isArray(data?.permisos)
      ? data.permisos
      : [];
    const correoUsuario = usuario?.correo || "sistema";

    if (!nuevoRol)
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ El nombre del rol es obligatorio.",
      });

    // Validar duplicado
    if (roles.some((r) => r.rol.toLowerCase() === nuevoRol.toLowerCase()))
      return respuestaJSON({
        status: "error",
        mensaje: `⚠️ Ya existe un rol con el nombre "${nuevoRol}".`,
      });

    // Crear nuevo rol con permisos iniciales
    const nuevo = { rol: nuevoRol, permisos: permisosIniciales };
    roles.push(nuevo);
    guardarJSON(JSON_ROLES, roles);

    registrarLog("addRol", correoUsuario, `Rol creado: ${nuevoRol}`);

    return respuestaJSON({
      status: "ok",
      mensaje: `✅ Rol "${nuevoRol}" creado correctamente.`,
      datos: roles,
    });
  } catch (err) {
    manejarError(err, "addRol", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al crear el rol. Intenta nuevamente o contacta al administrador.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function updateRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const roles = leerJSON(JSON_ROLES) || [];
    const { rol, permisos } = data;
    const correoUsuario = usuario?.correo || "sistema";

    if (!rol)
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ El nombre del rol es obligatorio.",
      });

    const index = roles.findIndex((r) => r.rol === rol);
    if (index === -1)
      return respuestaJSON({
        status: "error",
        mensaje: `⚠️ El rol "${rol}" no existe en el sistema.`,
      });

    // El rol administrador conserva permisos totales
    if (rol === "administrador") {
      roles[index].permisos = ["*"];
    } else {
      roles[index].permisos = Array.isArray(permisos) ? permisos : [];
    }

    guardarJSON(JSON_ROLES, roles);

    registrarLog("updateRol", correoUsuario, `Permisos actualizados para el rol: ${rol}`);

    return respuestaJSON({
      status: "ok",
      mensaje: `✅ Permisos actualizados correctamente para el rol "${rol}".`,
      datos: roles,
    });
  } catch (err) {
    manejarError(err, "updateRol", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al actualizar el rol. Intenta nuevamente o contacta al administrador.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function deleteRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const { rol } = data;
    const correoUsuario = usuario?.correo || "sistema";

    if (!rol)
      return respuestaJSON({
        status: "error",
        mensaje: "El nombre del rol es obligatorio",
      });

    if (rol === "administrador")
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se puede eliminar el rol administrador.",
      });

    const roles = leerJSON(JSON_ROLES) || [];
    const usuarios = leerJSON(JSON_USUARIOS) || [];

    // Verificar si el rol está asignado a algún usuario
    const enUso = usuarios.some((u) => u.rol === rol);
    if (enUso)
      return respuestaJSON({
        status: "error",
        mensaje: `⚠️ No se puede eliminar el rol "${rol}" porque tiene usuarios asignados.`,
      });

    const nuevosRoles = roles.filter((r) => r.rol !== rol);
    guardarJSON(JSON_ROLES, nuevosRoles);

    registrarLog("deleteRol", correoUsuario, `Rol eliminado: ${rol}`);
    return respuestaJSON({
      status: "ok",
      mensaje: `🗑️ Rol "${rol}" eliminado correctamente.`,
      datos: nuevosRoles,
    });
  } catch (err) {
    manejarError(err, "deleteRol", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Ocurrió un error interno al intentar eliminar el rol. Intenta nuevamente o contacta al administrador",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}


// Usuarios

function getUsuarios() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];

    if (!usuarios.length) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se encontraron usuarios registrados.",
        datos: [],
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "📋 Usuarios obtenidos correctamente.",
      datos: usuarios,
    });
  } catch (err) {
    manejarError(err, "getUsuarios");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al obtener la lista de usuarios.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}


function addUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, nombre, rol } = data;
    const correoEjecutor = usuario?.correo || "sistema";

    if (!correo || !nombre || !rol)
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ Todos los campos son obligatorios (correo, nombre, rol).",
      });

    if (usuarios.some((u) => u.correo.toLowerCase() === correo.toLowerCase()))
      return respuestaJSON({
        status: "error",
        mensaje: `⚠️ Ya existe un usuario con el correo "${correo}".`,
      });

    const nuevoUsuario = {
      correo,
      nombre,
      rol,
      activo: true,
    };

    usuarios.push(nuevoUsuario);
    guardarJSON(JSON_USUARIOS, usuarios);

    registrarLog("addUsuario", correoEjecutor, `Usuario creado: ${correo}`);
    return respuestaJSON({
      status: "ok",
      mensaje: `✅ Usuario "${correo}" creado correctamente.`,
      datos: usuarios,
    });
  } catch (err) {
    manejarError(err, "addUsuario", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al crear el usuario.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}

function updateUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, nombre, rol } = data;
    const correoEjecutor = usuario?.correo || "sistema";

    const index = usuarios.findIndex((u) => u.correo === correo);
    if (index === -1)
      return respuestaJSON({
        status: "error",
        mensaje: `⚠️ No se encontró el usuario con correo "${correo}".`,
      });

    usuarios[index].nombre = nombre || usuarios[index].nombre;
    usuarios[index].rol = rol || usuarios[index].rol;

    guardarJSON(JSON_USUARIOS, usuarios);
    registrarLog("updateUsuario", correoEjecutor, `Usuario actualizado: ${correo}`);

    return respuestaJSON({
      status: "ok",
      mensaje: `✅ Usuario "${correo}" actualizado correctamente.`,
      datos: usuarios,
    });
  } catch (err) {
    manejarError(err, "updateUsuario", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar usuario.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}

function toggleUsuarioActivo(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, activo } = data;
    const correoEjecutor = usuario?.correo || "sistema";

    const index = usuarios.findIndex((u) => u.correo === correo);
    if (index === -1)
      return respuestaJSON({
        status: "error",
        mensaje: `⚠️ No se encontró el usuario con correo "${correo}".`,
      });

    usuarios[index].activo = Boolean(activo);
    guardarJSON(JSON_USUARIOS, usuarios);

    registrarLog("toggleUsuarioActivo", correoEjecutor, `Usuario ${activo ? "activado" : "desactivado"}: ${correo}`);
    return respuestaJSON({
      status: "ok",
      mensaje: `🔁 Usuario "${correo}" ${activo ? "activado" : "desactivado"} correctamente.`,
      datos: usuarios,
    });
  } catch (err) {
    manejarError(err, "toggleUsuarioActivo", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al cambiar el estado del usuario.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}

function deleteUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo } = data;
    const correoEjecutor = usuario?.correo || "sistema";

    if (correo === correoEjecutor) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ No puedes eliminar tu propio usuario" });
    }

    if (!correo)
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ Debe especificar el correo del usuario a eliminar.",
      });

    const usuarioAEliminar = usuarios.find((u) => u.correo === correo);
    if (!usuarioAEliminar)
      return respuestaJSON({
        status: "error",
        mensaje: `⚠️ No se encontró el usuario "${correo}".`,
      });

    if (usuarioAEliminar.rol === "administrador")
      return respuestaJSON({
        status: "error",
        mensaje: "🚫 No se puede eliminar un usuario con rol administrador.",
      });

    const nuevosUsuarios = usuarios.filter((u) => u.correo !== correo);
    guardarJSON(JSON_USUARIOS, nuevosUsuarios);

    registrarLog("deleteUsuario", correoEjecutor, `Usuario eliminado: ${correo}`);
    return respuestaJSON({
      status: "ok",
      mensaje: `🗑️ Usuario "${correo}" eliminado correctamente.`,
      datos: nuevosUsuarios,
    });
  } catch (err) {
    manejarError(err, "deleteUsuario", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al eliminar usuario.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}

// Productos
function addProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let productos = leerJSON(JSON_PRODUCTOS);
    const correoEjecutor = usuario?.correo || "sistema";
    let resultados = [];

    // Si llega un solo producto, lo convertimos a array
    let listaProductos = data.productos || [data];

    listaProductos.forEach(p => {
      const yaExiste = productos.some(u => normalizarTexto(u.nombre) === normalizarTexto(p.nombre));
      if (yaExiste) {
        resultados.push({ nombre: p.nombre, status: "error", mensaje: "⚠️ Ya existe este producto" });
        return;
      }

      const nuevoProd = {
        id: "prod" + new Date().getTime() + Math.floor(Math.random() * 1000),
        nombre: p.nombre,
        descripcion: p.descripcion || "",
        entidad: p.entidad || "",
        tipo: p.tipo || ""
      };
      productos.push(nuevoProd);
      resultados.push({ nombre: p.nombre, status: "ok", mensaje: "Producto agregado", id: nuevoProd.id });

      registrarLog("addProducto", correoEjecutor, { producto: nuevoProd });
    });

    guardarJSON(JSON_PRODUCTOS, productos);

    return respuestaJSON({ 
      status: "ok", 
      resultados
      });
  } finally {
    lock.releaseLock();
  }
}
function deleteProducto(id, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    let productos = leerJSON(JSON_PRODUCTOS);
    const correoEjecutor = usuario?.correo || "sistema";

    const eliminado = productos.find(p => p.id === id);

    let nuevos = productos.filter(p => p.id !== id);
    guardarJSON(JSON_PRODUCTOS, nuevos);

    // ✅ Registrar log
    registrarLog("deleteProducto", correoEjecutor, {
      productoEliminado: eliminado || id
    });
    return respuestaJSON({ status: "ok", mensaje: "Producto eliminado", productos: nuevos });

  } finally {
    lock.releaseLock();
  }
}
// Archivos
function subirArchivoProducto(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    let config = leerJSON(JSON_CONFIGURACION);
    const correoEjecutor = usuario?.correo || "sistema";

    // 👀 Capturamos el payload que llegó
    const camposEsperados = ["anio", "productosId"];
    const payload = obtenerPayloadArchivo(e, isMultipart, camposEsperados);

    const archivoBlob = payload.archivoBlob;
    const anio = payload.anio;
    let productosId = payload.productosId || [];

    const debugPayload = payload.debug;

    if (!archivoBlob || productosId.length === 0 || !anio) {
      return respuestaJSON({
        success: false,
        message: "❌ Faltan campos obligatorios",
        debug: debugPayload,
      });
    }

    // Si viene como string separado por comas, convertir a array
    if (typeof productosId === "string") {
      productosId = productosId.split(",");
    }


    // --- Validar extensión y tamaño ---
    const validacion = validarArchivo(archivoBlob, config);
    if (!validacion.ok) {
      return respuestaJSON({ success: false, message: validacion.mensaje });
    }
    const extension = validacion.extension;

    // --- Guardar en Drive ---
    const usarExistente = isMultipart 
        ? e.parameter.usarExistente === "true" 
        : (JSON.parse(e.postData.contents).usarExistente === true);

    const resultadoDrive = guardarArchivoEnDrive(config, archivoBlob, anio, null, usarExistente);

    if (!resultadoDrive.ok) {
        return respuestaJSON({
            success: true,
            status: resultadoDrive.status,
            message: resultadoDrive.mensaje,
            idArchivo: resultadoDrive.idArchivo,
            link: resultadoDrive.link,
            nombreArchivo: resultadoDrive.nombreArchivo,
            productosAsociados: productosId,
            debug: debugPayload
        });
    }

    const file = resultadoDrive.file;



    // --- Registrar en base de datos ---
    let bddatos = leerJSON(JSON_BDD_DATOS);
    let productos = leerJSON(JSON_PRODUCTOS);

    productosId.forEach(pid => {
      let prod = productos.find(p => p.id === pid);
      if (prod) {
        let registro = {
        registroId: "reg" + new Date().getTime() + "_" + pid,
        fileId: file.getId(),       // 👈 ahora explícito
        productoId: pid,
        nombreProducto: prod.nombre,
        descripcion: prod.descripcion || "",
        entidad: prod.entidad || "", 
        tipo: prod.tipo || "", 
        anio,
        nombreArchivo: resultadoDrive.nuevoNombre,
        link: resultadoDrive.link,
        fecha: new Date().toISOString()
      };
        bddatos.push(registro);
      }
    });

    guardarJSON(JSON_BDD_DATOS, bddatos);


    // ✅ Registrar log con nombres de productos
    const productosAfectados = productosId.map(pid => {
      const p = productos.find(x => x.id === pid);
      return p ? `${p.nombre} (${p.entidad || "sin entidad"})` : pid;
    });

    registrarLog("subirArchivo", correoEjecutor, {
      archivo: archivoBlob.getName(),
      productos: productosAfectados,
      productosId,
      anio,
      nombreArchivoFinal: resultadoDrive.nuevoNombre || file.getName(),
      link: file.getUrl()
    });

    return respuestaJSON({
      success: true,
      status: "ok",
      message: "📂 Archivo subido correctamente",
      idArchivo: file.getId(),          // 👈 ID en Drive
      link: file.getUrl(),              // 👈 Enlace de Drive
      productosAsociados: productosId,
      debug: debugPayload, // 👈 siempre devolvemos lo que entró
    });
  } catch (error) {
    // ⚠️ Capturar cualquier error inesperado
    return respuestaJSON({
      success: false,
      status: "error_interno",
      message: "⚠️ Error interno al subir el archivo linea 998: " + error.message,
      stack: error.stack ? error.stack.substring(0, 500) : undefined, // útil para depuración
    });

  } finally {
    lock.releaseLock();
  }
}
function subirArchivoFacturas(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    let config = leerJSON(JSON_CONFIGURACION);
    const correoEjecutor = usuario?.correo || "sistema";

    // 👀 Capturamos el payload que llegó
    const camposEsperados = ["anio", "entidad", "descripcion", "valor", "metodoPago"];
    const payload = obtenerPayloadArchivo(e, isMultipart, camposEsperados);

    const archivoBlob = payload.archivoBlob;
    const anio = payload.anio;
    const entidad = payload.entidad;
    const descripcion = payload.descripcion;
    const valor = payload.valor;
    const metodoPago = payload.metodoPago;

    const debugPayload = payload.debug;

    if (!archivoBlob || !anio) {
      return respuestaJSON({
        success: false,
        message: "❌ Faltan campos obligatorios (archivo o año)",
        debug: debugPayload,
      });
    }


    // --- Validar extensión y tamaño ---
    const validacion = validarArchivo(archivoBlob, config);
    if (!validacion.ok) {
      return respuestaJSON({ success: false, message: validacion.mensaje });
    }
    const extension = validacion.extension;

    // --- Guardar en Drive ---
     const usarExistente = isMultipart 
        ? e.parameter.usarExistente === "true" 
        : (JSON.parse(e.postData.contents).usarExistente === true);

    const resultadoDrive = guardarArchivoEnDrive(config, archivoBlob, anio, "facturas", usarExistente);

    if (!resultadoDrive.ok) {
        return respuestaJSON({
            success: true,
            status: resultadoDrive.status,
            message: resultadoDrive.mensaje,
            idArchivo: resultadoDrive.idArchivo,
            link: resultadoDrive.link,
            nombreArchivo: resultadoDrive.nombreArchivo,
            debug: debugPayload
        });
    }

    const file = resultadoDrive.file;


    // --- Registrar en base de datos ---
    let bddatos = leerJSON(JSON_BDD_FACTURAS);


    const registro = {
      registroId: "fac" + new Date().getTime() + Math.round(Math.random() * 10000),
      fileId: file.getId(),
      anio,
      entidad,
      descripcion,
      valor: Number(valor),   // 👈 convertir a número
      metodoPago,
      nombreArchivo: resultadoDrive.nuevoNombre,
      link: resultadoDrive.link,
      fecha: new Date().toISOString(),
    };



    bddatos.push(registro);
    guardarJSON(JSON_BDD_FACTURAS, bddatos);

    // ✅ Registrar log
    registrarLog("subirArchivoFacturas", correoEjecutor, {
      archivo: archivoBlob.getName(),
      anio,
      entidad,
      valor,
      metodoPago,
    });

    return respuestaJSON({
      success: true,
      status: "ok",
      message: "📂 Factura subida correctamente",
      idArchivo: file.getId(),
      link: file.getUrl(),
      debug: debugPayload,
    });

  } finally {
    lock.releaseLock();
  }
}
function replaceArchivo(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {

    let bddatos = leerJSON(JSON_BDD_DATOS);
    const correoEjecutor = usuario?.correo || "sistema";

    // 1. Buscar el registro base
    let registroBase = bddatos.find(r => r.productoId === data.productoId && r.anio === data.anio);
    if (!registroBase) {
      return respuestaJSON({ status: "error", mensaje: "❌ No existe archivo para ese producto y año" });
    }

    // 2. Determinar registros a modificar
    let registrosRelacionados = [];
    if (data.replaceOnlyThis === true) {
      registrosRelacionados = [registroBase];
    } else {
      registrosRelacionados = bddatos.filter(r => r.fileId === registroBase.fileId && r.anio === data.anio);
    }

    if (registrosRelacionados.length === 0) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ No se encontraron registros relacionados" });
    }

    // --- Datos de archivo viejo ---
    const oldFileId = registroBase.fileId;
    const oldFileName = registroBase.nombreArchivo || "(desconocido)";
    let borradoOk = false;

    // 3. Subir nuevo archivo (nombre normalizado)
    let nombreNormalizado = normalizarNombreArchivo(data.archivo.nombre);

    const extensionMatch = data.archivo.nombre.match(/\.[^/.]+$/);
    if (extensionMatch) {
      nombreNormalizado += extensionMatch[0];
    }

    const archivoBlob = Utilities.newBlob(
      Utilities.base64Decode(data.archivo.base64),
      data.archivo.tipo || MimeType.BINARY,
      nombreNormalizado
    );

    const carpetaPrincipal = obtenerOCrearCarpeta(CARPETA_PRINCIPAL);
    const carpetaAnio = obtenerOCrearCarpetaEn(carpetaPrincipal, data.anio);
    let file = carpetaAnio.createFile(archivoBlob);

    // 4. Actualizar registros seleccionados
    registrosRelacionados.forEach(r => {
      r.fileId = file.getId();
      r.nombreArchivo = file.getName();
      r.link = file.getUrl();
      r.fecha = new Date().toISOString();
    });

    // 5. Borrar archivo viejo solo si es global y nadie más lo usa
    if (data.replaceOnlyThis !== true) {
      try {
        if (oldFileId) {
          DriveApp.getFileById(oldFileId).setTrashed(true);
          borradoOk = true;
        }
      } catch (e) {
        Logger.log("⚠️ No se pudo borrar archivo anterior: " + e.message);
      }
    }

    guardarJSON(JSON_BDD_DATOS, bddatos);

    // ✅ Registrar log con nombres de productos afectados
    const productosAfectados = registrosRelacionados.map(r => {
      return r.nombreProducto 
        ? `${r.nombreProducto} (${r.entidad || "sin entidad"})` 
        : r.productoId;
    });

    registrarLog("replaceArchivo", correoEjecutor, {
      nuevoFileId: file.getId(),
      nuevoNombre: nombreNormalizado,
      productosAfectados,
      anio: data.anio,
      replaceOnlyThis: data.replaceOnlyThis === true,
      archivoBorrado: borradoOk ? oldFileName : "no borrado",
      linkNuevoArchivo: file.getUrl()
    });

    // 6. Respuesta
    return respuestaJSON({
      status: "ok",
      mensaje: `Archivo reemplazado en ${registrosRelacionados.length} producto(s). ${borradoOk ? "📂 Archivo viejo borrado: " + oldFileName : "⚠️ Archivo anterior no fue borrado"}`,
      archivoId: file.getId(),
      registros: registrosRelacionados
    });

  } finally {
    lock.releaseLock();
  }
}
function getArchivosPorAnio(anio) {
  const bddatos = leerJSON(JSON_BDD_DATOS);
  const productos = leerJSON(JSON_PRODUCTOS);

  // Filtrar registros por año
  const registros = bddatos.filter(r => r.anio === anio);

  // Enriquecer con info del producto (entidad, tipo, descripcion)
  const resultado = registros.map(r => {
    const prod = productos.find(p => p.id === r.productoId) || {};
    return {
      idArchivo: r.id,
      registroId: r.registroId,            // 👈 nuevo campo con el ID real en Drive
      productoId: r.productoId,
      nombreProducto: r.nombreProducto,
      entidad: r.entidad || "",
      tipo: r.tipo || "",
      descripcion: r.descripcion || "",
      anio: r.anio,
      nombreArchivo: r.nombreArchivo,
      link: r.link,
      fecha: r.fecha
    };
  });

  return respuestaJSON({ status: "ok", anio, archivos: resultado });
  
}

function getProductos() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const productos = leerJSON(JSON_PRODUCTOS);

    // 🧩 Si el archivo está vacío o no hay productos
    if (!productos || productos.length === 0) {
      return respuestaJSON({
        status: "ok",
        mensaje: "No hay productos para mostrar",
        data: []
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "Productos obtenidos correctamente",
      data: productos
    });

  } catch (error) {
    return respuestaJSON({
      status: "error",
      mensaje: "Error al obtener productos",
      detalle: error.message || "No se pudo leer el archivo JSON_PRODUCTOS"
    });

  } finally {
    lock.releaseLock();
  }
}



function getFacturasPorAnio(anio) {
  let data = leerJSON(JSON_BDD_FACTURAS);

  const filtrado = data.filter(f => String(f.anio) === String(anio));

  return respuestaJSON({
    status: "ok",
    data: filtrado,
  });
}
function updateFactura(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let bddatos = leerJSON(JSON_BDD_FACTURAS);
    const correoEjecutor = usuario?.correo || "sistema";

    const { registroId, entidad, descripcion, valor, metodoPago } = data;

    if (!registroId) {
      return respuestaJSON({
        status: "error",
        mensaje: "❌ Se requiere el registroId para actualizar la factura."
      });
    }

    const index = bddatos.findIndex(f => f.registroId === registroId);
    if (index === -1) {
      return respuestaJSON({
        status: "error",
        mensaje: `❌ No se encontró la factura con ID ${registroId}.`
      });
    }

    // --- Actualizar campos ---
    if (entidad !== undefined) bddatos[index].entidad = entidad;
    if (descripcion !== undefined) bddatos[index].descripcion = descripcion;
    if (valor !== undefined) bddatos[index].valor = Number(valor);
    if (metodoPago !== undefined) bddatos[index].metodoPago = metodoPago;

    guardarJSON(JSON_BDD_FACTURAS, bddatos);

    registrarLog("updateFactura", correoEjecutor, { registroId });

    return respuestaJSON({
      status: "ok",
      mensaje: "✅ Factura actualizada correctamente.",
      datos: bddatos[index]
    });

  } finally {
    lock.releaseLock();
  }
}
function deleteFactura(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let bddatos = leerJSON(JSON_BDD_FACTURAS);
    const correoEjecutor = usuario?.correo || "sistema";

    const { registroId } = data;

    if (!registroId) {
      return respuestaJSON({
        status: "error",
        mensaje: "❌ Se requiere el registroId para eliminar la factura."
      });
    }

    const factura = bddatos.find(f => f.registroId === registroId);
    if (!factura) {
      return respuestaJSON({
        status: "error",
        mensaje: `❌ No se encontró la factura con ID ${registroId}.`
      });
    }

    // --- 1. Eliminar archivo en Drive ---
    try {
      const archivo = DriveApp.getFileById(factura.fileId);
      archivo.setTrashed(true);
    } catch (_) {
      // Si no existe, no se cae
    }

    // --- 2. Eliminar registro ---
    const nuevos = bddatos.filter(f => f.registroId !== registroId);
    guardarJSON(JSON_BDD_FACTURAS, nuevos);

    registrarLog("deleteFactura", correoEjecutor, { registroId });

    return respuestaJSON({
      status: "ok",
      mensaje: "🗑️ Factura eliminada correctamente.",
      datos: factura
    });

  } finally {
    lock.releaseLock();
  }
}



function getProductosPorArchivo(fileId) {
  const bddatos = leerJSON(JSON_BDD_DATOS);
  const productos = leerJSON(JSON_PRODUCTOS);

  // Filtrar registros por fileId
  const registros = bddatos.filter(r => r.fileId === fileId);

  if (registros.length === 0) {
    return respuestaJSON({ status: "error", mensaje: "❌ No hay productos asociados a este archivo" });
  }

  const resultado = registros.map(r => {
    const prod = productos.find(p => p.id === r.productoId) || {};
    return {
      productoId: r.productoId,
      nombreProducto: prod.nombre || r.nombreProducto,
      descripcion: prod.descripcion || "",
      entidad: prod.entidad || "",
      tipo: prod.tipo || "",
      anio: r.anio,
      nombreArchivo: r.nombreArchivo,
      link: r.link,
      fecha: r.fecha
    };
  });

  return respuestaJSON({ status: "ok", fileId, productos: resultado });
}
function getDatosTributarios() {
  let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);

  // ⚡ Normalizar: asignar orden único si falta
  let maxOrden = datos.reduce((max, d) => Math.max(max, d.orden || 0), 0);
  datos.forEach((d) => {
    if (d.orden === undefined) {
      maxOrden++;
      d.orden = maxOrden;
    }
  });

  // Guardar de nuevo si hubo cambios
  guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

  // Ordenar siempre por orden
  datos.sort((a, b) => (a.orden || 0) - (b.orden || 0));

  return respuestaJSON({ status: "ok", data: datos });
}
function addDatoTributario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // hasta 30s esperando

  try {
    let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);
    const correoEjecutor = usuario?.correo || "sistema";

    // 🔎 Validar duplicados en label o valor normalizados
    const yaExiste = datos.some(d =>
      normalizarTexto(d.label) === normalizarTexto(data.label) ||
      (normalizarTexto(d.label) === normalizarTexto(data.label) && normalizarTexto(d.valor) === normalizarTexto(data.valor))
    );

    if (yaExiste) {
      return respuestaJSON({
        status: "error",
        mensaje: `⚠️ Ya existe un dato tributario con el mismo label o valor`
      });
    }

    // 🔹 Calcular el orden (último + 1)
    const maxOrden = datos.length > 0 ? Math.max(...datos.map(d => d.orden || 0)) : 0;

    // 📦 Crear nuevo registro (guardamos lo que llega sin cambios)
    const nuevo = {
      id: data.id || ("dato" + new Date().getTime()),
      label: data.label || "",
      valor: data.valor || "",
      orden: maxOrden + 1
    };

    datos.push(nuevo);
    guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

    // ✅ Registrar log
    registrarLog("addDatoTributario", correoEjecutor, {
      datoTributarioAdicionado: nuevo
    });

    return respuestaJSON({ status: "ok", mensaje: "Dato agregado", datos });
  } finally {
    lock.releaseLock();
  }
}
function updateDatoTributario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // hasta 30s esperando

  try {
    let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);
    const correoEjecutor = usuario?.correo || "sistema";

    const idx = datos.findIndex(d => d.id === data.id);
    if (idx === -1) return respuestaJSON({ status: "error", mensaje: "Dato no encontrado" });

    // ⚡ Solo persistir estos campos
    const dataLimpia = {
      id: datos[idx].id,                 // nunca cambia
      orden: data.orden ?? datos[idx].orden, // conservar si no viene
      label: data.label ?? datos[idx].label,
      valor: data.valor ?? datos[idx].valor
    };

    datos[idx] = dataLimpia;
    guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

     // ✅ Registrar log
    registrarLog("updateDatoTributario", correoEjecutor, {
      datoTributarioActualizado: data
    });
    return respuestaJSON({ status: "ok", mensaje: "Dato actualizado", datos });

  } finally {
    lock.releaseLock();
  }
}
function deleteDatoTributario(data, usuario) {

  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // hasta 30s esperando

  try {
    let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);
    const correoEjecutor = usuario?.correo || "sistema";

    datos = datos.filter(d => d.id !== data.id);
    guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

    // ✅ Registrar log
    registrarLog("deleteDatoTributario", correoEjecutor, {
      datoTributarioBorrado: data.id || data
    });
    return respuestaJSON({ status: "ok", mensaje: "Dato eliminado", datos });

  } finally {
    lock.releaseLock();
  }

}
function moveDatoTributario(data, usuario) {
  const { id, direction } = data;  // 👈 desestructurar el objeto
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);
    const correoEjecutor = usuario?.correo || "sistema";

    // Ordenarlos antes de mover
    datos.sort((a, b) => (a.orden || 0) - (b.orden || 0));

    const index = datos.findIndex(d => d.id === id);
    if (index === -1) {
      return respuestaJSON({ status: "error", mensaje: "❌ No se encontró el dato" });
    }

    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= datos.length) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ Movimiento inválido" });
    }


    // Intercambiar orden
    const tempOrden = datos[index].orden;
    datos[index].orden = datos[targetIndex].orden;
    datos[targetIndex].orden = tempOrden;

    guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

    registrarLog("moveDatoTributario", correoEjecutor, {
      idMovido: id,
      direccion: direction
    });

    return respuestaJSON({ status: "ok", mensaje: "Dato movido", datos });
  } finally {
    lock.releaseLock();
  }
}
// Manejo de logs
function getLogs() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // Espera hasta 30s si otro proceso usa el recurso

  try {
    const logs = leerJSON(JSON_LOGS);

    // 🧩 Si el archivo está vacío o no hay logs
    if (!logs || logs.length === 0) {
      return respuestaJSON({
        status: "ok",
        mensaje: "No hay logs para mostrar",
        logs: []
      });
    }

    // ✅ Ordenar: el más reciente primero
    const logsOrdenados = [...logs].reverse();

    return respuestaJSON({
      status: "ok",
      mensaje: "Logs obtenidos correctamente",
      logs: logsOrdenados
    });

  } catch (error) {
    // 🚨 Si hubo un problema al leer el archivo
    return respuestaJSON({
      status: "error",
      mensaje: "Error al obtener logs",
      detalle: error.message || "No se pudo leer el archivo de logs"
    });

  } finally {
    lock.releaseLock();
  }
}
function limpiarLogsAntiguos(usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // Esperar hasta 30 segundos

  try {
    let logs = leerJSON(JSON_LOGS);
    const correoEjecutor = usuario?.correo || "sistema";

    // Si hay 10 o menos, no hacemos nada
    if (!logs || logs.length <= 10) {
      return respuestaJSON({
        status: "ok",
        mensaje: "No se eliminaron logs. Hay 10 o menos registros.",
        total: logs.length
      });
    }

    // 🕒 Ordenar los logs del más reciente al más antiguo
    logs.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    // 📦 Conservar los 10 más recientes
    const logsConservados = logs.slice(0, 10);
    const eliminados = logs.length - logsConservados.length;

    // 💾 Guardar de nuevo
    guardarJSON(JSON_LOGS, logsConservados);

    // 📘 Registrar acción en logs (opcional)
    registrarLog("limpiarLogsAntiguos", correoEjecutor, {
      eliminados,
      totalFinal: logsConservados.length
    });

    return respuestaJSON({
      status: "ok",
      mensaje: `🧹 ${eliminados} logs eliminados, se conservaron los 10 más recientes.`,
      totalFinal: logsConservados.length
    });

  } catch (error) {
    return manejarError(error, "limpiarLogsAntiguos", Session.getActiveUser().getEmail());
  } finally {
    lock.releaseLock();
  }
}







