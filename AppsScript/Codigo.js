/******************************
 * Version 
 ******************************/
 const VERSION = "2101261146AM";

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
const ZEICHENSCHLUESSEL = "528138845199053779904519";

/******************************
 * CONSTANTE DE CONFIGURACIONES INICIALES
 ******************************/
const CONFIG_INICIAL = {
  CARPETA_PRINCIPAL: "",
  TAMANO_MAX_MB: 10,
  TIPOS_PERMITIDOS: ["pdf", "jpg", "jpeg", "png", "docx", "txt", "xlsx"],
  TOKEN_EXP_MINUTOS: 60 // 👈 Nuevo: Valor por defecto (1 hora)
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
  },
  {
    "rol": "Contador",
    "permisos": [
      "getDatosTributarios",
      "getProductosPorArchivo",
      "subirArchivoProducto",
      "replaceArchivo",
      "subirArchivoFacturas",
      "addProducto",
      "deleteProducto",
      "addDatoTributario",
      "updateDatoTributario",
      "updateAllDatosTributarios",
      "deleteDatoTributario",
      "moveDatoTributario",
      "getFacturasPorAnio",
      "updateFactura",
      "deleteFactura",
    ]
  },
  {
    "rol": "Declarante",
    "permisos": [
      "getDatosTributarios",
      "getProductosPorArchivo",
      "subirArchivoProducto",
      "replaceArchivo",
      "subirArchivoFacturas",
      "addProducto",
      "deleteProducto",
      "addDatoTributario",
      "updateDatoTributario",
      "updateAllDatosTributarios",
      "deleteDatoTributario",
      "moveDatoTributario",
      "getFacturasPorAnio",
      "updateFactura",
      "deleteFactura",
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
  "getRoles",
  "getUsuarios",
  "getDatosTributarios",
  "getLogs",
  "getProductosPorArchivo",
  "getFacturasPorAnio",


  // --- POST ---
  "subirArchivoProducto",
  "replaceArchivo",
  "deleteRegistroProducto",
  "editRegistroProducto",
  "subirArchivoFacturas",
  "updateFactura",
  "deleteFactura",
  "addRol",
  "updateRol",
  "deleteRol",
  "addUsuario",
  "updateUsuario",
  "deleteUsuario",
  "addProducto",
  "deleteProducto",
  "addDatoTributario",
  "updateDatoTributario",
  "updateAllDatosTributarios",
  "deleteDatoTributario",
  "moveDatoTributario",
  "actualizarConfig",
  "generarBackupZIP",
  "limpiarLogsAntiguos",
  "inicializarSistemaForzado",
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
  "obtenerOCrearCarpetaRaiz",
  "normalizarTexto",
  "normalizarNombreArchivo",
  "toggleUsuarioActivo",
  "inicializarSistema",
  "getArchivosPorAnio",
  "getFuncionesLogicaNegocio",
  "getProductos",

];

// PROTECCIÓN: Quitar acceso a los JSON al crear usuario o toggleUsuario
const ARCHIVOS_PROTEGIDOS = [JSON_CONFIGURACION, JSON_USUARIOS, JSON_ROLES, JSON_PRODUCTOS, JSON_BDD_DATOS, JSON_BDD_FACTURAS, JSON_LOGS, JSON_DATOS_TRIBUTARIOS];


/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA DESDE APPS SCRIPT Y CREACION DE CARPETAS Y ARCHIVOS INICIALES
 ******************************/
function inicializarSistema() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const correoAdmin = Session.getActiveUser().getEmail();

    // 1️⃣ Crear carpeta principal con nombre aleatorio para independencia total
    // Usamos el prefijo definido para que cada usuario tenga su carpeta única
    const nombreUnico = `${CARPETA_PRINCIPAL}_${correoAdmin.split("@")[0].replace(/[^a-zA-Z]/g, "").substring(0, 4).toUpperCase()}`;

    // 🔍 VALIDACIÓN: Buscar si la carpeta ya existe
    const carpetasExistentes = DriveApp.getRootFolder().getFoldersByName(nombreUnico);


    if (carpetasExistentes.hasNext()) {
      const carpetaExistente = carpetasExistentes.next();
      const idExistente = carpetaExistente.getId();
      
      Logger.log("⚠️ El sistema ya estaba inicializado. Carpeta encontrada: " + nombreUnico);
      
      return { 
        status: "existente", 
        mensaje: "El sistema ya se encuentra inicializado para este usuario.",
        id: idExistente, 
        nombre: nombreUnico 
      };
    }

    // 2️⃣ Si no existe, proceder con la creación (Paso original)
    const carpetaPrincipal = DriveApp.getRootFolder().createFolder(nombreUnico);
    const carpetaPrincipalId = carpetaPrincipal.getId();

    // 🎨 CAMBIO DE COLOR CARPETA (Drive API v3)
    // Nota: Drive no permite cualquier hex arbitrario, usamos el verde más cercano al #198754
    try {
      // En v3 se usa Drive.Files.update
      Drive.Files.update({
        "folderColorRgb": "#198754"
      }, carpetaPrincipalId);
    } catch (e) {
      Logger.log("Nota: No se pudo aplicar el color en v3: " + e.message);
    }


    // 2️⃣ Construir configuración con el ID REAL
    const configInicialConId = {
      ...CONFIG_INICIAL,
      CARPETA_PRINCIPAL: nombreUnico,
      CARPETA_PRINCIPAL_ID: carpetaPrincipalId
    };

    // 3️⃣ Guardar configuración
    guardarORecrearJSON(carpetaPrincipal, JSON_CONFIGURACION, configInicialConId);

    // 4️⃣ Crear archivos base
    const archivosAInicializar = [
      { nombre: JSON_USUARIOS, datos: [{ correo: correoAdmin, nombre: "Administrador", rol: "administrador", activo: true }] },
      { nombre: JSON_PRODUCTOS, datos: [] },
      { nombre: JSON_BDD_DATOS, datos: [] },
      { nombre: JSON_BDD_FACTURAS, datos: [] },
      { nombre: JSON_LOGS, datos: [] },
      { nombre: JSON_DATOS_TRIBUTARIOS, datos: DATOS_TRIBUTARIOS_INICIALES },
      { nombre: JSON_ROLES, datos: ROLES_INICIALES }
    ];

    archivosAInicializar.forEach(item => {
      crearArchivoJSONSiNoExiste(carpetaPrincipal, item.nombre, item.datos);
    });

    // 5️⃣ AUTO-PROTECCIÓN (Opcional)
    // Si el administrador es el mismo dueño del script, no hace falta ocultárselos a él mismo,
    // pero si inicializas para otro, aquí podrías llamar a la lógica de ocultar.

    Logger.log("✅ Sistema inicializado correctamente con ID: " + carpetaPrincipalId);
    
    return { status: "ok", id: carpetaPrincipalId, nombre: nombreUnico };

  } catch (e) {
    Logger.log("❌ Error en inicialización: " + e.message);
    throw e;
  } finally {
    lock.releaseLock();
  }
}
/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA SOLO ARCHIVOS
 ******************************/
// function inicializarSistemaSeguro(data) {
//   const correo = Session.getActiveUser().getEmail() || data.correo || "";

//   // 1. Validar admin
//   if (!esAdmin(correo)) {
//     return respuestaJSON({ status: "error", mensaje: "⛔ No autorizado", correo });
//   }

//   // 2. Validar confirmación
//   if (!data.confirmacion || data.confirmacion !== "INICIALIZAR") {
//     return respuestaJSON({
//       status: "error",
//       mensaje: "❌ Debe confirmar escribiendo INICIALIZAR"
//     });
//   }

//   // 3. Inicializar sistema
//   inicializarSistemaForzado();


//   return respuestaJSON({
//     status: "ok",
//     mensaje: "✅ Sistema reinicializado correctamente inicializarSistemaSeguro",
//     correo
//   });
// }
/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA FORZADO Y BORRADO DE CARPETAS
 ******************************/
function inicializarSistemaForzado(correoAdmin, borrarCarpetas) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = correoAdmin?.correo || "sistema";

  try {
    // 1️⃣ Leer configuración actual
    const config = leerJSON(JSON_CONFIGURACION);

    const usuariosActuales = leerJSON(JSON_USUARIOS) || [];
    const propietario = usuariosActuales[0];

    if (correoEjecutor !== propietario.correo) {
      throw new Error("Solo el propietario del sistema puede reinicializarlo");
    }

    if (usuariosActuales.length === 0) {
      throw new Error("usuarios.json está vacío. No se puede determinar el propietario.");
    }

    if (!config.CARPETA_PRINCIPAL_ID) {
      throw new Error("CARPETA_PRINCIPAL_ID no está definido en configuracion.json");
    }

    // 2️⃣ Obtener carpeta por ID (NO por nombre)
    const carpetaPrincipal = DriveApp.getFolderById(config.CARPETA_PRINCIPAL_ID);

    // 3️⃣ Limpieza controlada
    let resultadoLimpieza = null;
    if (borrarCarpetas) {
      resultadoLimpieza = limpiarCarpetas(); // devuelve objeto {mensaje: "..."}
    }

    // 4️⃣ Reescribir configuración (manteniendo ID)
    guardarORecrearJSON(carpetaPrincipal, JSON_CONFIGURACION, {
      ...CONFIG_INICIAL,
      CARPETA_PRINCIPAL: config?.CARPETA_PRINCIPAL || `${CARPETA_PRINCIPAL}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      CARPETA_PRINCIPAL_ID: carpetaPrincipal.getId()
    });

    guardarORecrearJSON(carpetaPrincipal, JSON_USUARIOS, [
      {
        ...propietario,
        activo: true
      }
    ]);

    // 6️⃣ Vaciar datos
    guardarORecrearJSON(carpetaPrincipal, JSON_PRODUCTOS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_BDD_DATOS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_BDD_FACTURAS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_LOGS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_DATOS_TRIBUTARIOS, DATOS_TRIBUTARIOS_INICIALES);
    guardarORecrearJSON(carpetaPrincipal, JSON_ROLES, ROLES_INICIALES);

    // 7️⃣ Registrar log
    registrarLog("inicializarSistemaForzado", correoEjecutor, {
      mensaje: "🔁 Sistema reinicializado forzadamente",
      correoAdmin: correoAdmin?.correo,
      borrarCarpetas,
      limpieza: resultadoLimpieza?.mensaje || "Sin borrar carpetas",
      fecha: new Date().toISOString()
    });

    return {
      status: "ok",
      mensaje: "✅ Sistema reinicializado correctamente",
      correo: correoAdmin?.correo,
      limpieza: resultadoLimpieza?.mensaje || "Sin borrar carpetas"
    };

  } catch (err) {
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
// function esAdmin(correo) {
//   let usuarios = leerJSON(JSON_USUARIOS);
//   let user = usuarios.find(u => {
//     return u.correo && u.correo.toLowerCase().trim() === correo.toLowerCase().trim();
//   });
//   return user && user.rol === "administrador";
// }

function verificarTokenYAutorizar(token) {
  const CLIENT_ID = "648554486893-4b33o1cei2rfhv8ehn917ovf60h1u9q4.apps.googleusercontent.com";
  const tokenInfoUrl = 'https://oauth2.googleapis.com/tokeninfo?id_token=' + token;
  
  try {
    const response = UrlFetchApp.fetch(tokenInfoUrl, { method: 'GET', muteHttpExceptions: true });
    const tokenPayload = JSON.parse(response.getContentText());

    // 🚩 Fallo: Token inválido o expirado
    if (tokenPayload.error) {
      registrarLog("LOGIN_FALLIDO", "sistema", { mensaje: "Token de Google inválido o expirado", error: tokenPayload.error });
      return { autorizado: false, mensaje: "Token inválido o expirado" };
    }

    // 🚩 Fallo: El Client ID no coincide
    if (tokenPayload.aud !== CLIENT_ID) {
      registrarLog("LOGIN_FALLIDO", tokenPayload.email || "sistema", { mensaje: "ID de cliente incorrecto (aud mismatch)", aud: tokenPayload.aud });
      return { autorizado: false, mensaje: "ID de cliente incorrecto" };
    }

    const userEmail = tokenPayload.email;
    const userNombre = tokenPayload.name;
    const userPicture = tokenPayload.picture;
    const usuarios = leerJSON(JSON_USUARIOS);
    const roles = leerJSON(JSON_ROLES);

    const usuario = usuarios.find(u => u.correo === userEmail && u.activo);

    // 🚩 Fallo: Usuario no existe en el sistema o está inactivo
    if (!usuario) {
      registrarLog("LOGIN_FALLIDO", userEmail, { mensaje: "Usuario no registrado o inactivo en la base de datos" });
      return { autorizado: false, mensaje: "Usuario no registrado o inactivo" };
    }

    const rol = roles.find(r => r.rol === usuario.rol);

    // 🚩 Fallo: El rol asignado no existe en la configuración
    if (!rol) {
      registrarLog("LOGIN_FALLIDO", userEmail, { mensaje: "Rol no definido para el usuario", rolAsignado: usuario.rol });
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
    // 🚩 Fallo: Error de conexión o excepción del sistema
    registrarLog("LOGIN_ERROR_SISTEMA", "sistema", { mensaje: "Error excepcional en verificarTokenYAutorizar", error: err.message });
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
/**
 * 🔑 GENERA un token de sesión propio (JWT-like)
 * Este token se genera DESPUÉS de que Google valida al usuario.
 */
function generarTokenPropio(usuarioInfo) {

  // 1. Leer la configuración actual de Drive
  const config = leerJSON(JSON_CONFIGURACION) || {};
  // 2. Obtener los minutos o usar 60 por defecto si no existe
  const minutosExp = config.TOKEN_EXP_MINUTOS || 60;

  const payload = {
    // Info del usuario (verificada por Google)
    correo: usuarioInfo.correo,
    rol: usuarioInfo.rol,
    nombre: usuarioInfo.nombre,
    picture: usuarioInfo.picture,
    permisos: usuarioInfo.permisos,
    
    // 💡 Tiempos de vida (iat = issued at, exp = expiration)
    iat: Math.floor(Date.now() / 1000),
    // exp: Math.floor(Date.now() / 1000) + (1 * 60) // 👈 Válido por 3 minutos
    // exp: Math.floor(Date.now() / 1000) + (8 * 60 * 60) // 👈 Válido por 8 horas
    // exp: Math.floor(Date.now() / 1000) + (30 * 60) // 👈 Válido por 1 horas
    exp: Math.floor(Date.now() / 1000) + (minutosExp * 60)
  };
  
  // Codificamos el payload (String -> Byte[] -> Base64WebSafe)
  const payloadStr = JSON.stringify(payload);
  const payloadB64 = Utilities.base64EncodeWebSafe(payloadStr, Utilities.Charset.UTF_8); // ✅ CORREGIDO 1

  // Creamos la firma
  // computeHmacSha256Signature necesita el payloadB64 como String, lo cual es correcto
  const signature = Utilities.computeHmacSha256Signature(payloadB64, ZEICHENSCHLUESSEL); 

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
    const expectedSignature = Utilities.computeHmacSha256Signature(payloadB64, ZEICHENSCHLUESSEL);
    
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

  // 🚩 Fallo: No se recibió el token en la petición
  if (!googleToken) {
    registrarLog("LOGIN_FALLIDO", "sistema", { mensaje: "No se recibió el token de Google en el payload" });
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

  // ✅ LOG POSITIVO: Registrar solamente el correo
  registrarLog("LOGIN_EXITOSO", infoUsuarioGoogle.correo);
  
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
    const carpetaPrincipal = obtenerOCrearCarpetaRaiz();
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
function obtenerOCrearCarpetaRaiz() {
  const root = DriveApp.getRootFolder();
  let nombreCarpeta;

  // 1. Obtener email de forma segura
  // Intentamos EffectiveUser si ActiveUser falla
  const correo = Session.getActiveUser().getEmail() || Session.getEffectiveUser().getEmail();

  const prefijoUsuario = correo.split("@")[0]
                            .replace(/[^a-zA-Z]/g, "")
                            .substring(0, 4)
                            .toUpperCase();
                            
  nombreCarpeta = `${CARPETA_PRINCIPAL}_${prefijoUsuario}`.trim();
  

  Logger.log("Buscando carpeta: '" + nombreCarpeta + "'");
  
  // 2. Buscar en la raíz
  const carpetas = root.getFoldersByName(nombreCarpeta);
  let carpetaDestino;

  if (carpetas.hasNext()) {
    carpetaDestino = carpetas.next();
    Logger.log("✅ Carpeta encontrada: " + carpetaDestino.getId());
  } else {
    // 3. Crear usando el objeto root directamente
    carpetaDestino = root.createFolder(nombreCarpeta);
    Logger.log("🆕 Carpeta creada: " + nombreCarpeta);
  }

  return carpetaDestino;
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
    const carpeta = obtenerOCrearCarpetaRaiz();
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
    const carpeta = obtenerOCrearCarpetaRaiz();
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
function guardarArchivoEnDrive(archivoBlob, anio, subcarpeta, usarExistente) {
  const nombrePascal = normalizarNombreArchivo(archivoBlob.getName());
  const extension = archivoBlob.getName().split(".").pop().toLowerCase();
  const nuevoNombre = `${nombrePascal}.${extension}`;

  const carpetaPrincipal = obtenerOCrearCarpetaRaiz();
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
      // fecha: new Date().toISOString(),
      fecha: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss"),
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
  const config = leerJSON(JSON_CONFIGURACION);

  if (!config?.CARPETA_PRINCIPAL_ID) {
    throw new Error("CARPETA_PRINCIPAL_ID no definido en configuracion.json");
  }

  const carpetaPrincipal = DriveApp.getFolderById(config.CARPETA_PRINCIPAL_ID);
  const subcarpetas = carpetaPrincipal.getFolders();

  // 🗑️ Borrar solo subcarpetas
  while (subcarpetas.hasNext()) {
    subcarpetas.next().setTrashed(true);
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

      case "inicializarSistemaForzado":
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

      case "subirArchivoProducto":
        return subirArchivoProducto(e, isMultipart, usuario);
      case "subirArchivoFacturas":
        return subirArchivoFacturas(e, isMultipart, usuario);
      case "actualizarConfig":
        return actualizarConfig(data, usuario);
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
      case "deleteRegistroProducto":
        return deleteRegistroProducto(data, usuario);
      case "editRegistroProducto":
        return editRegistroProducto(data, usuario);
      case "inicializarSistema":
        return inicializarSistemaSeguro(data, usuario);
      case "addDatoTributario":
        return addDatoTributario(data, usuario);
      case "updateDatoTributario":
        return updateDatoTributario(data, usuario);
      case "updateAllDatosTributarios":
        return updateAllDatosTributarios(data, usuario);
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
      version: VERSION,
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
function actualizarConfig(data, usuario) {
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
      TOKEN_EXP_MINUTOS: Number(data.TOKEN_EXP_MINUTOS) || configActual.TOKEN_EXP_MINUTOS,
    };

    guardarJSON(JSON_CONFIGURACION, nuevaConfig);
    registrarLog("actualizarConfig", correoEjecutor, {
      mensaje: "Configuración actualizada",
      nuevaConfig,
    });

    return respuestaJSON({
      status: "ok",
      mensaje: "✅ Configuración actualizada correctamente.",
      datos: nuevaConfig,
    });
  } catch (err) {
    manejarError(err, "actualizarConfig", usuario?.correo);
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

    if (!correo || !nombre || !rol) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ Campos obligatorios faltantes." });
    }

    if (usuarios.some(u => u.correo.toLowerCase() === correo.toLowerCase())) {
      return respuestaJSON({ status: "error", mensaje: `⚠️ El usuario "${correo}" ya existe.` });
    }

    const config = leerJSON(JSON_CONFIGURACION);
    const carpetaId = config.CARPETA_PRINCIPAL_ID;
    const carpeta = DriveApp.getFolderById(carpetaId);

    // 1️⃣ Otorgar permiso de LECTOR a la CARPETA (Silencioso v3)
    try {
      Drive.Permissions.create({
        'role': 'reader', 
        'type': 'user',
        'emailAddress': correo
      }, carpetaId, { 'sendNotificationEmail': false });
    } catch (e) {
      throw new Error("Error al asignar carpeta: " + e.message);
    }

    // 2️⃣ TIEMPO DE ESPERA (Crucial para propagación de permisos)
    Utilities.sleep(5000); // Aumentamos a 2 segundos por seguridad

    // 3️⃣ PROTECCIÓN: Quitar acceso a los JSON
    // const archivosProtegidos = [
    //   JSON_CONFIGURACION, JSON_USUARIOS, JSON_ROLES, 
    //   JSON_PRODUCTOS, JSON_BDD_DATOS, JSON_BDD_FACTURAS, 
    //   JSON_LOGS, JSON_DATOS_TRIBUTARIOS
    // ];

    ARCHIVOS_PROTEGIDOS.forEach(nombreArchivo => {
      const archivos = carpeta.getFilesByName(nombreArchivo);
      while (archivos.hasNext()) { // Usamos while por si hay duplicados
        const archivo = archivos.next();
        const archivoId = archivo.getId();
        
        try {
          // MÉTODO DEFINITIVO: 
          // Intentamos remover al usuario usando DriveApp (más sencillo para 'readers')
          // Si no funciona, usamos el borrado por lista de permisos.
          archivo.removeViewer(correo); 
          
          // Refuerzo con API Avanzada
          const permissions = Drive.Permissions.list(archivoId).permissions;
          permissions.forEach(p => {
            if (p.emailAddress?.toLowerCase() === correo.toLowerCase()) {
              Drive.Permissions.delete(archivoId, p.id);
            }
          });
        } catch (e) {
          console.warn(`Intento de ocultar ${nombreArchivo}: ${e.message}`);
        }
      }
    });

    // 4️⃣ Guardar en base de datos
    const nuevoUsuario = { correo, nombre, rol, activo: true };
    usuarios.push(nuevoUsuario);
    guardarJSON(JSON_USUARIOS, usuarios);

    registrarLog("addUsuario", correoEjecutor, { usuarioCreado: correo, rol, nivel: "reader" });

    return respuestaJSON({
      status: "ok",
      mensaje: `✅ Usuario "${correo}" creado como lector. Archivos protegidos.`,
      datos: usuarios,
    });

  } catch (err) {
    manejarError(err, "addUsuario", usuario?.correo);
    return respuestaJSON({ status: "error", mensaje: "❌ Error al crear el usuario.", detalle: err.message });
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



// toggle original
// function toggleUsuarioActivo(data, usuario) {
//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000);

//   try {
//     const usuarios = leerJSON(JSON_USUARIOS) || [];
//     const { correo, activo } = data;
//     const correoEjecutor = usuario?.correo || "sistema";

//     const index = usuarios.findIndex((u) => u.correo === correo);
//     if (index === -1)
//       return respuestaJSON({
//         status: "error",
//         mensaje: `⚠️ No se encontró el usuario con correo "${correo}".`,
//       });

//     usuarios[index].activo = Boolean(activo);
//     guardarJSON(JSON_USUARIOS, usuarios);

//     registrarLog("toggleUsuarioActivo", correoEjecutor, `Usuario ${activo ? "activado" : "desactivado"}: ${correo}`);
//     return respuestaJSON({
//       status: "ok",
//       mensaje: `🔁 Usuario "${correo}" ${activo ? "activado" : "desactivado"} correctamente.`,
//       datos: usuarios,
//     });
//   } catch (err) {
//     manejarError(err, "toggleUsuarioActivo", usuario?.correo);
//     return respuestaJSON({
//       status: "error",
//       mensaje: "❌ Error al cambiar el estado del usuario.",
//       detalle: err,
//     });
//   } finally {
//     lock.releaseLock();
//   }
// }

// toggle mejorado
// function toggleUsuarioActivo(data, usuario) {
//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000);

//   try {
//     const usuarios = leerJSON(JSON_USUARIOS) || [];
//     const { correo, activo } = data; // 'activo' es true o false
//     const correoEjecutor = usuario?.correo || "sistema";

//     const index = usuarios.findIndex((u) => u.correo.toLowerCase() === correo.toLowerCase());
//     if (index === -1) {
//       return respuestaJSON({
//         status: "error",
//         mensaje: `⚠️ No se encontró el usuario "${correo}".`,
//       });
//     }

//     // 1️⃣ Actualizar estado en el JSON
//     usuarios[index].activo = Boolean(activo);
//     guardarJSON(JSON_USUARIOS, usuarios);

//     // 2️⃣ Obtener ID de la carpeta desde configuración
//     const config = leerJSON(JSON_CONFIGURACION);
//     const carpetaId = config?.CARPETA_PRINCIPAL_ID;
//     if (!carpetaId) throw new Error("ID de carpeta no encontrado en configuración.");

//     // 3️⃣ Sincronizar permisos con Google Drive
//     if (activo === true) {
//       // --- LÓGICA DE ACTIVACIÓN (Añadir permiso Lector) ---
//       try {
//         Drive.Permissions.create({
//           'role': 'reader',
//           'type': 'user',
//           'emailAddress': correo
//         }, carpetaId, { 'sendNotificationEmail': false });
        
//         // Opcional: Ejecutar aquí la lógica de ocultar archivos JSON si es necesario
//         Logger.log(`✅ Permisos de lectura restaurados para: ${correo}`);
//       } catch (e) {
//         throw new Error("Error al asignar carpeta: " + e.message);
//       }

//       // 2️⃣ TIEMPO DE ESPERA (Crucial para propagación de permisos)
//       Utilities.sleep(2000); // Aumentamos a 2 segundos por seguridad

//       // 3️⃣ PROTECCIÓN: Quitar acceso a los JSON
//       const archivosProtegidos = [
//         JSON_CONFIGURACION, JSON_USUARIOS, JSON_ROLES, 
//         JSON_PRODUCTOS, JSON_BDD_DATOS, JSON_BDD_FACTURAS, 
//         JSON_LOGS, JSON_DATOS_TRIBUTARIOS
//       ];

//       archivosProtegidos.forEach(nombreArchivo => {
//         const archivos = carpeta.getFilesByName(nombreArchivo);
//         while (archivos.hasNext()) { // Usamos while por si hay duplicados
//           const archivo = archivos.next();
//           const archivoId = archivo.getId();
          
//           try {
//             // MÉTODO DEFINITIVO: 
//             // Intentamos remover al usuario usando DriveApp (más sencillo para 'readers')
//             // Si no funciona, usamos el borrado por lista de permisos.
//             archivo.removeViewer(correo); 
            
//             // Refuerzo con API Avanzada
//             const permissions = Drive.Permissions.list(archivoId).permissions;
//             permissions.forEach(p => {
//               if (p.emailAddress?.toLowerCase() === correo.toLowerCase()) {
//                 Drive.Permissions.delete(archivoId, p.id);
//               }
//             });
//           } catch (e) {
//             console.warn(`Intento de ocultar ${nombreArchivo}: ${e.message}`);
//           }
//         }
//       });



//     } else {
//       // --- LÓGICA DE DESACTIVACIÓN (Quitar todo permiso) ---
//       try {
//         const response = Drive.Permissions.list(carpetaId);
//         const permissions = response.permissions;

//         const permiso = permissions.find(p => p.emailAddress?.toLowerCase() === correo.toLowerCase());

//       if (permiso) {
//         // Eliminamos el permiso específico
//         Drive.Permissions.delete(carpetaId, permiso.id);
//       } else {
//         // Si no aparece en la lista, intentamos el método tradicional por si acaso
//         const carpeta = DriveApp.getFolderById(carpetaId);
//         carpeta.removeViewer(correo);
//         carpeta.removeEditor(correo);
//       }
      
//       } catch (e) {
//         throw new Error("Aviso: No se pudo eliminar el permiso (quizás no tenía): " + e.message);
//       }
//     }

//     registrarLog("toggleUsuarioActivo", correoEjecutor, `Usuario ${activo ? "activado" : "desactivado"}: ${correo}`);

//     return respuestaJSON({
//       status: "ok",
//       mensaje: `🔁 Usuario "${correo}" ${activo ? "activado" : "desactivado"} y permisos sincronizados.`,
//       datos: usuarios,
//     });
//   } catch (err) {
//     manejarError(err, "toggleUsuarioActivo", usuario?.correo);
//     return respuestaJSON({
//       status: "error",
//       mensaje: "❌ Error al cambiar el estado del usuario.",
//       detalle: err,
//     });
//   } finally {
//     lock.releaseLock();
//   }
// }

// function toggleUsuarioActivo(data, usuario) {
//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000);

//   try {
//     const usuarios = leerJSON(JSON_USUARIOS) || [];
//     const { correo, activo } = data; // 'activo' es true o false
//     const correoEjecutor = usuario?.correo || "sistema";

//     const index = usuarios.findIndex((u) => u.correo.toLowerCase() === correo.toLowerCase());
//     if (index === -1) {
//       return respuestaJSON({
//         status: "error",
//         mensaje: `⚠️ No se encontró el usuario "${correo}".`,
//       });
//     }

//     // 1️⃣ Actualizar estado en el JSON
//     usuarios[index].activo = Boolean(activo);
//     guardarJSON(JSON_USUARIOS, usuarios);

//     // 2️⃣ Obtener ID de la carpeta desde configuración
//     const config = leerJSON(JSON_CONFIGURACION);
//     const carpetaId = config?.CARPETA_PRINCIPAL_ID;
//     if (!carpetaId) throw new Error("ID de carpeta no encontrado en configuración.");

//     // 3️⃣ Sincronizar permisos con Google Drive
//     if (activo === true) {
//       // --- LÓGICA DE ACTIVACIÓN ---
//       try {
//         Drive.Permissions.create({
//           'role': 'reader',
//           'type': 'user',
//           'emailAddress': correo
//         }, carpetaId, { 'sendNotificationEmail': false });
        
//         Logger.log(`✅ Permisos de lectura restaurados para: ${correo}`);
//       } catch (e) {
//         // Si el permiso ya existe, Google dará error, lo ignoramos para continuar con la protección
//         throw new Error("Aviso al crear permiso: " + e.message);
//       }

//       // Espera para propagación
//       Utilities.sleep(2000); 

//       // --- PROTECCIÓN DE ARCHIVOS JSON ---
//       // IMPORTANTE: Definimos el objeto carpeta que faltaba
//       const carpeta = DriveApp.getFolderById(carpetaId);
//       const archivosProtegidos = [
//         JSON_CONFIGURACION, JSON_USUARIOS, JSON_ROLES, 
//         JSON_PRODUCTOS, JSON_BDD_DATOS, JSON_BDD_FACTURAS, 
//         JSON_LOGS, JSON_DATOS_TRIBUTARIOS
//       ];

//       archivosProtegidos.forEach(nombreArchivo => {
//         const archivos = carpeta.getFilesByName(nombreArchivo);
//         while (archivos.hasNext()) {
//           const archivo = archivos.next();
//           const archivoId = archivo.getId();
//           try {
//             // Quitamos visibilidad
//             archivo.removeViewer(correo); 
            
//             // Refuerzo con API v3 para eliminar cualquier rastro
//             const permissions = Drive.Permissions.list(archivoId).permissions;
//             const pUser = permissions.find(p => p.emailAddress?.toLowerCase() === correo.toLowerCase());
//             if (pUser) {
//               Drive.Permissions.delete(archivoId, pUser.id);
//             }
//           } catch (e) {
//             console.warn(`Ocultando ${nombreArchivo}: ${e.message}`);
//           }
//         }
//       });

//     } else {
//       // --- LÓGICA DE DESACTIVACIÓN (Quitar todo permiso) ---
//       try {
//         const response = Drive.Permissions.list(carpetaId);
//         const permissions = response.permissions;
//         const permiso = permissions.find(p => p.emailAddress?.toLowerCase() === correo.toLowerCase());

//         if (permiso) {
//           Drive.Permissions.delete(carpetaId, permiso.id);
//           Logger.log(`🚫 Acceso revocado a carpeta para: ${correo}`);
//         }
//       } catch (e) {
//         throw new Error("No se pudo eliminar el permiso: " + e.message);
//       }
//     }

//     registrarLog("toggleUsuarioActivo", correoEjecutor, `Usuario ${activo ? "activado" : "desactivado"}: ${correo}`);

//     return respuestaJSON({
//       status: "ok",
//       mensaje: `🔁 Usuario "${correo}" ${activo ? "activado" : "desactivado"} y permisos sincronizados.`,
//       datos: usuarios,
//     });

//   } catch (err) {
//     manejarError(err, "toggleUsuarioActivo", usuario?.correo);
//     return respuestaJSON({
//       status: "error",
//       mensaje: "❌ Error al cambiar el estado del usuario.",
//       detalle: err.message || String(err),
//     });
//   } finally {
//     lock.releaseLock();
//   }
// }

function toggleUsuarioActivo(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, activo } = data;
    const correoEjecutor = usuario?.correo || "sistema";
    let driveStatus = "";

    const index = usuarios.findIndex((u) => u.correo.toLowerCase() === correo.toLowerCase());
    if (index === -1) return respuestaJSON({ status: "error", mensaje: "Usuario no encontrado." });

    // 1️⃣ Actualizar estado en el JSON
    usuarios[index].activo = Boolean(activo);
    guardarJSON(JSON_USUARIOS, usuarios);

    const config = leerJSON(JSON_CONFIGURACION);
    const carpetaId = config?.CARPETA_PRINCIPAL_ID;

    if (activo === true) {
      // --- LÓGICA DE ACTIVACIÓN ---
      try {
        // Intentar crear con v3, si falla intentar v2
        try {
          Drive.Permissions.create({
            'role': 'reader',
            'type': 'user',
            'emailAddress': correo
          }, carpetaId, { 'sendNotificationEmail': false });
        } catch(e) {
          Drive.Permissions.insert({
            'role': 'reader',
            'type': 'user',
            'value': correo
          }, carpetaId, { 'sendNotificationEmail': false });
        }
        driveStatus = "Permisos activados.";
      } catch (e) {
        driveStatus = "Ya tenía permisos o error: " + e.message;
      }

      Utilities.sleep(5000);
      const carpeta = DriveApp.getFolderById(carpetaId);

      // const archivosProtegidos = [JSON_CONFIGURACION, JSON_USUARIOS, JSON_ROLES, JSON_PRODUCTOS, JSON_BDD_DATOS, JSON_BDD_FACTURAS, JSON_LOGS, JSON_DATOS_TRIBUTARIOS];

      let archivosOcultados = 0;

      ARCHIVOS_PROTEGIDOS.forEach(n => {
        const file = carpeta.getFilesByName(n);
        if (file.hasNext()) {
          const f = file.next();
          try { f.removeViewer(correo); } catch(e){}
        }
        archivosOcultados++;
      });
      // driveStatus += " Archivos protegidos.";
      driveStatus += ` Se protegieron ${archivosOcultados} archivos.`;

    } else {
      // --- LÓGICA DE DESACTIVACIÓN (Corrección de .delete vs .remove) ---
      try {
        // Intentamos listar los permisos (v2 usa 'items', v3 usa 'permissions')
        const response = Drive.Permissions.list(carpetaId);
        const listaPermisos = response.permissions || response.items || [];
        
        const permiso = listaPermisos.find(p => 
          (p.emailAddress && p.emailAddress.toLowerCase() === correo.toLowerCase()) ||
          (p.value && p.value.toLowerCase() === correo.toLowerCase())
        );

        if (permiso) {
          // Intentar borrar con método v3 (.delete) o v2 (.remove)
          if (Drive.Permissions.remove) {
            Drive.Permissions.remove(carpetaId, permiso.id); // v2
            driveStatus = "Permiso revocado (v2).";
          } else {
            Drive.Permissions.delete(carpetaId, permiso.id); // v3
            driveStatus = "Permiso revocado (v3).";
          }
        } else {
          // Plan B: DriveApp si no se encuentra en la lista
          const carpeta = DriveApp.getFolderById(carpetaId);
          carpeta.removeViewer(correo);
          carpeta.removeEditor(correo);
          driveStatus = "Revocado mediante DriveApp.";
        }
      } catch (e) {
        driveStatus = "Error crítico al revocar: " + e.message;
      }
    }

    registrarLog("toggleUsuarioActivo", correoEjecutor, {
      usuarioAfectado: correo,
      nuevoEstado: activo ? "Activado" : "Desactivado",
      resultadoDrive: driveStatus
    });

    return respuestaJSON({
      status: "ok",
      mensaje: `Usuario ${activo ? "activado" : "desactivado"}.`,
      detalleDrive: driveStatus,
      datos: usuarios
    });

  } catch (err) {
    manejarError(err, "toggleUsuarioActivo", usuario?.correo);
    return respuestaJSON({ status: "error", detalle: err.message });
  } finally {
    lock.releaseLock();
  }
}



// function deleteUsuario(data, usuario) {
//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000);

//   try {
//     const usuarios = leerJSON(JSON_USUARIOS) || [];
//     const { correo } = data;
//     const correoEjecutor = usuario?.correo || "sistema";

//     if (correo === correoEjecutor) {
//       return respuestaJSON({ status: "error", mensaje: "⚠️ No puedes eliminar tu propio usuario" });
//     }

//     if (!correo)
//       return respuestaJSON({
//         status: "error",
//         mensaje: "⚠️ Debe especificar el correo del usuario a eliminar.",
//       });

//     const usuarioAEliminar = usuarios.find((u) => u.correo === correo);
//     if (!usuarioAEliminar)
//       return respuestaJSON({
//         status: "error",
//         mensaje: `⚠️ No se encontró el usuario "${correo}".`,
//       });

//     if (usuarioAEliminar.rol === "administrador")
//       return respuestaJSON({
//         status: "error",
//         mensaje: "🚫 No se puede eliminar un usuario con rol administrador.",
//       });

//     const nuevosUsuarios = usuarios.filter((u) => u.correo !== correo);
//     guardarJSON(JSON_USUARIOS, nuevosUsuarios);

//      const carpetas = obtenerOCrearCarpetaRaiz();

//     // const carpetas = DriveApp.getFoldersByName(CARPETA_PRINCIPAL);
//     if (carpetas.hasNext()) {
//       const carpeta = carpetas.next();

//       try {
//         carpeta.removeEditor(correo);
//       } catch (e) {
//         if (e.message?.includes("No such user")) {
//           const err = new Error(
//             `El usuario "${correo}" no tenía permisos en la carpeta`
//           );
//           err.name = "PermisoInexistenteError";

//           // 📝 Se registra el warning, pero NO se interrumpe el flujo
//           manejarError(err, "deleteUsuario", usuario?.correo);
//         } else {
//           throw e; // otros errores sí son críticos
//         }
//       }

//     } else {
//       const err = new Error(`No se encontró la carpeta: ${CARPETA_PRINCIPAL}`);
//       err.name = "CarpetaNoEncontradaError";
//       throw err;
//     }

//     registrarLog("deleteUsuario", correoEjecutor, `Usuario eliminado: ${correo}`);
//     return respuestaJSON({
//       status: "ok",
//       mensaje: `🗑️ Usuario "${correo}" eliminado correctamente.`,
//       datos: nuevosUsuarios,
//     });
//   } catch (err) {
//     manejarError(err, "deleteUsuario", usuario?.correo);
//     return respuestaJSON({
//       status: "error",
//       mensaje: "❌ Error al eliminar usuario.",
//       detalle: String(err.message || err)
//     });
//   } finally {
//     lock.releaseLock();
//   }
// }

function deleteUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo } = data;
    const correoEjecutor = usuario?.correo || "sistema";

    // 1️⃣ Validaciones previas
    if (correo?.toLowerCase() === correoEjecutor.toLowerCase()) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ No puedes eliminar tu propio usuario" });
    }

    if (!correo) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ Debe especificar el correo." });
    }

    const usuarioAEliminar = usuarios.find((u) => u.correo.toLowerCase() === correo.toLowerCase());
    if (!usuarioAEliminar) {
      return respuestaJSON({ status: "error", mensaje: `⚠️ No se encontró el usuario "${correo}".` });
    }

    if (usuarioAEliminar.rol === "administrador") {
      return respuestaJSON({ status: "error", mensaje: "🚫 No se puede eliminar administradores." });
    }

    // 2️⃣ Obtener el ID de la carpeta desde la configuración (Más seguro que buscar por nombre)
    const config = leerJSON(JSON_CONFIGURACION);
    const carpetaId = config?.CARPETA_PRINCIPAL_ID;

    if (!carpetaId) {
      throw new Error("No se pudo obtener el ID de la carpeta principal desde la configuración.");
    }

    // 3️⃣ ELIMINAR PERMISOS EN DRIVE (Lógica Robusta v3)
    try {
      // Listamos los permisos de la carpeta para encontrar el ID del permiso del usuario
      const response = Drive.Permissions.list(carpetaId);
      const permissions = response.permissions;

      const permiso = permissions.find(p => p.emailAddress?.toLowerCase() === correo.toLowerCase());

      if (permiso) {
        // Eliminamos el permiso específico
        Drive.Permissions.delete(carpetaId, permiso.id);
        console.log(`✅ Permiso revocado en Drive para: ${correo}`);
      } else {
        // Si no aparece en la lista, intentamos el método tradicional por si acaso
        const carpeta = DriveApp.getFolderById(carpetaId);
        carpeta.removeViewer(correo);
        carpeta.removeEditor(correo);
      }
    } catch (e) {
      // Registramos el error pero no detenemos la eliminación del JSON
      console.warn(`Aviso al quitar permisos de Drive: ${e.message}`);
    }

    // 4️⃣ Actualizar base de datos JSON
    const nuevosUsuarios = usuarios.filter((u) => u.correo.toLowerCase() !== correo.toLowerCase());
    guardarJSON(JSON_USUARIOS, nuevosUsuarios);

    registrarLog("deleteUsuario", correoEjecutor, `Usuario eliminado: ${correo}`);
    
    return respuestaJSON({
      status: "ok",
      mensaje: `🗑️ Usuario "${correo}" eliminado y permisos de carpeta revocados.`,
      datos: nuevosUsuarios,
    });

  } catch (err) {
    manejarError(err, "deleteUsuario", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al eliminar usuario.",
      detalle: String(err.message || err)
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

    const resultadoDrive = guardarArchivoEnDrive(archivoBlob, anio, null, usarExistente);

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

    registrarLog("subirArchivoProducto", correoEjecutor, {
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

    const resultadoDrive = guardarArchivoEnDrive(archivoBlob, anio, "facturas", usarExistente);

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

    const carpetaPrincipal = obtenerOCrearCarpetaRaiz();
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
function deleteRegistroProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {

    const correoEjecutor = usuario?.correo || "sistema";

    const registroId = data.id;

    if (!registroId) {
      return respuestaJSON({
        status: "error",
        mensaje: "ID de registro no proporcionado"
      });
    }

    // Leer bddatos.json
    const datos = leerJSON(JSON_BDD_DATOS);

    // Buscar registro
    const index = datos.findIndex(r => r.registroId === registroId);
    if (index === -1) {
      return respuestaJSON({
        status: "error",
        mensaje: "Registro no encontrado"
      });
    }

    const registro = datos[index];
    const { nombreArchivo, fileId, productoId, anio } = registro;

    // Contar cuántos registros usan el mismo archivo
    const usosArchivo = datos.filter(
      r => r.nombreArchivo === nombreArchivo
    ).length;

    let archivoEliminado = false;

    // Si es el único uso, eliminar archivo en Drive
    if (usosArchivo === 1 && fileId) {
      try {
        DriveApp.getFileById(fileId).setTrashed(true);
        archivoEliminado = true;
      } catch (e) {
        Logger.log("⚠️ Error eliminando archivo en Drive: " + e);
      }
    }

    // Eliminar registro del JSON
    datos.splice(index, 1);
    guardarJSON(JSON_BDD_DATOS, datos);

    // Log
    registrarLog("deleteRegistroProducto", correoEjecutor, {
      registroId,
      nombreArchivo,
      fileId,
      archivoEliminado
    });

    // Respuesta al frontend
    return respuestaJSON({
      status: "ok",
      mensaje: "Registro eliminado correctamente",
      eliminado: {
        registroId,
        nombreArchivo,
        fileId,
        productoId,
        anio,
        archivoEliminado
      }
    });

  } catch (e) {
    Logger.log(e);
    return respuestaJSON({
      status: "error",
      mensaje: e.message || "Error eliminando registro"
    });
  } finally {
    lock.releaseLock();
  }
}

// funcion original ok
// function editRegistroProducto(data, usuario) {
//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000);

//   try {
//     const correoEjecutor = usuario?.correo || "sistema";
//     const registroId = data.registroId;

//     if (!registroId) {
//       return respuestaJSON({
//         status: "error",
//         mensaje: "ID de registro no proporcionado"
//       });
//     }

//     // Leer bddatos.json
//     const datos = leerJSON(JSON_BDD_DATOS);

//     // Buscar registro
//     const index = datos.findIndex(r => r.registroId === registroId);
//     if (index === -1) {
//       return respuestaJSON({
//         status: "error",
//         mensaje: "Registro no encontrado"
//       });
//     }

//     const registroActual = datos[index];

//     // 🔹 Actualizar SOLO campos editables
//     const registroEditado = {
//       ...registroActual,
//       entidad: data.entidad ?? registroActual.entidad,
//       nombreProducto: data.nombreProducto ?? registroActual.nombreProducto,
//       descripcion: data.descripcion ?? registroActual.descripcion,
//       tipo: data.tipo ?? registroActual.tipo,
//       anio: data.anio ?? registroActual.anio,
//       fechaEdicion: new Date().toISOString()
//     };

//     // Reemplazar registro
//     datos[index] = registroEditado;

//     // Guardar JSON
//     guardarJSON(JSON_BDD_DATOS, datos);

//     // Log
//     registrarLog("editRegistroProducto", correoEjecutor, {
//       registroId,
//       antes: registroActual,
//       despues: registroEditado
//     });

//     // Respuesta al frontend
//     return respuestaJSON({
//       status: "ok",
//       mensaje: "Registro editado correctamente",
//       registro: registroEditado
//     });

//   } catch (e) {
//     return respuestaJSON({
//       status: "error",
//       mensaje: e.message || "Error editando el registro"
//     });
//   } finally {
//     lock.releaseLock();
//   }
// }



// funcionando cambio de link
function editRegistroProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const correoEjecutor = usuario?.correo || "sistema";
    const registroId = data.registroId;

    if (!registroId) {
      return respuestaJSON({ status: "error", mensaje: "ID de registro no proporcionado" });
    }

    const datos = leerJSON(JSON_BDD_DATOS);
    const index = datos.findIndex(r => r.registroId === registroId);
    
    if (index === -1) {
      return respuestaJSON({ status: "error", mensaje: "Registro no encontrado" });
    }

    let registroActual = { ...datos[index] }; // Clonamos para mantener el estado "antes"
    const fileIdAnterior = registroActual.fileId;
    
    let nuevoFileId = fileIdAnterior;
    let nuevoLink = registroActual.link;
    let huboCambioDeArchivo = false;

    // --- LÓGICA DE RE-VINCULACIÓN ---
    try {
      const carpetaRaizUsuario = obtenerOCrearCarpetaRaiz();
      const anioBusqueda = String(data.anio || registroActual.anio);
      const subcarpetasAnio = carpetaRaizUsuario.getFoldersByName(anioBusqueda);
      
      if (subcarpetasAnio.hasNext()) {
        const carpetaAño = subcarpetasAnio.next();
        const archivosCandidatos = carpetaAño.getFilesByName(registroActual.nombreArchivo);
        
        if (archivosCandidatos.hasNext()) {
          const archivoEncontrado = archivosCandidatos.next();
          nuevoFileId = archivoEncontrado.getId();
          nuevoLink = archivoEncontrado.getUrl();
          
          if (nuevoFileId !== fileIdAnterior) {
            huboCambioDeArchivo = true;
          }
        }
      }
    } catch (err) {
      // Si falla la búsqueda, mantenemos los datos que ya teníamos
    }

    // 🔹 Crear el objeto editado
    // const registroEditado = {
    //   ...registroActual,
    //   entidad: data.entidad ?? registroActual.entidad,
    //   nombreProducto: data.nombreProducto ?? registroActual.nombreProducto,
    //   descripcion: data.descripcion ?? registroActual.descripcion,
    //   tipo: data.tipo ?? registroActual.tipo,
    //   anio: data.anio ?? registroActual.anio,
    //   fileId: nuevoFileId,
    //   link: nuevoLink,
    //   fechaEdicion: new Date().toISOString()
    // };

    const registroEditado = {
      ...registroActual,
      entidad: data.entidad ?? registroActual.entidad,
      nombreProducto: data.nombreProducto ?? registroActual.nombreProducto,
      descripcion: data.descripcion ?? registroActual.descripcion,
      tipo: data.tipo ?? registroActual.tipo,
      anio: data.anio ?? registroActual.anio,
      fileId: nuevoFileId,
      link: nuevoLink
    };


    // Reemplazar en la base de datos
    datos[index] = registroEditado;
    guardarJSON(JSON_BDD_DATOS, datos);

    // --- LÓGICA DE LOG PERSONALIZADA ---
    let infoLog = {
      registroId,
      antes: registroActual,
      despues: registroEditado
    };

    // Solo añadimos los detalles de link si hubo un cambio real de ID
    if (huboCambioDeArchivo) {
      infoLog.cambioLink = {
        mensaje: "Se detectó y vinculó una copia nueva del archivo",
        idAnterior: fileIdAnterior,
        idNuevo: nuevoFileId
      };
    }

    registrarLog("editRegistroProducto", correoEjecutor, infoLog);

    return respuestaJSON({
      status: "ok",
      mensaje: huboCambioDeArchivo 
        ? "Registro editado y archivo re-vinculado." 
        : "Registro editado correctamente.",
      registro: registroEditado
    });

  } catch (e) {
    return respuestaJSON({ status: "error", mensaje: e.message });
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





// funciona original ok sin cambio de link
// function updateFactura(data, usuario) {
//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000);

//   try {
//     let bddatos = leerJSON(JSON_BDD_FACTURAS);
//     const correoEjecutor = usuario?.correo || "sistema";

//     const { registroId, entidad, descripcion, valor, metodoPago } = data;

//     if (!registroId) {
//       return respuestaJSON({
//         status: "error",
//         mensaje: "❌ Se requiere el registroId para actualizar la factura."
//       });
//     }

//     const index = bddatos.findIndex(f => f.registroId === registroId);
//     if (index === -1) {
//       return respuestaJSON({
//         status: "error",
//         mensaje: `❌ No se encontró la factura con ID ${registroId}.`
//       });
//     }

//     // --- Actualizar campos ---
//     if (entidad !== undefined) bddatos[index].entidad = entidad;
//     if (descripcion !== undefined) bddatos[index].descripcion = descripcion;
//     if (valor !== undefined) bddatos[index].valor = Number(valor);
//     if (metodoPago !== undefined) bddatos[index].metodoPago = metodoPago;

//     guardarJSON(JSON_BDD_FACTURAS, bddatos);

//     registrarLog("updateFactura", correoEjecutor, { registroId });

//     return respuestaJSON({
//       status: "ok",
//       mensaje: "✅ Factura actualizada correctamente.",
//       datos: bddatos[index]
//     });

//   } finally {
//     lock.releaseLock();
//   }
// }

// funcion con cambio de link
function updateFactura(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let bddatos = leerJSON(JSON_BDD_FACTURAS);
    const correoEjecutor = usuario?.correo || "sistema";
    const registroId = data.registroId;

    if (!registroId) {
      return respuestaJSON({ status: "error", mensaje: "❌ Se requiere el registroId." });
    }

    const index = bddatos.findIndex(f => f.registroId === registroId);
    if (index === -1) {
      return respuestaJSON({ status: "error", mensaje: "❌ Factura no encontrada." });
    }

    // 1. Guardar estado anterior para el log
    const registroActual = { ...bddatos[index] };
    const fileIdAnterior = registroActual.fileId;
    
    let nuevoFileId = fileIdAnterior;
    let nuevoLink = registroActual.link;
    let huboCambioDeArchivo = false;

    // 2. Lógica de re-vinculación (Raíz > Año > facturas > Archivo)
    try {
      const carpetaRaizUsuario = obtenerOCrearCarpetaRaiz();
      const anioBusqueda = String(registroActual.anio);
      const subcarpetasAnio = carpetaRaizUsuario.getFoldersByName(anioBusqueda);
      
      if (subcarpetasAnio.hasNext()) {
        const carpetaAño = subcarpetasAnio.next();
        // Buscar la subcarpeta "facturas"
        const subcarpetasFacturas = carpetaAño.getFoldersByName("facturas");
        
        if (subcarpetasFacturas.hasNext()) {
          const carpetaFacturas = subcarpetasFacturas.next();
          const archivos = carpetaFacturas.getFilesByName(registroActual.nombreArchivo);
          
          if (archivos.hasNext()) {
            const archivoEncontrado = archivos.next();
            nuevoFileId = archivoEncontrado.getId();
            nuevoLink = archivoEncontrado.getUrl();
            
            if (nuevoFileId !== fileIdAnterior) {
              huboCambioDeArchivo = true;
            }
          }
        }
      }
    } catch (err) {
      // Si hay error en Drive, mantenemos lo que tenemos
    }

    // 3. Actualizar campos en el objeto
    const registroEditado = {
      ...registroActual,
      entidad: data.entidad ?? registroActual.entidad,
      descripcion: data.descripcion ?? registroActual.descripcion,
      valor: data.valor !== undefined ? Number(data.valor) : registroActual.valor,
      metodoPago: data.metodoPago ?? registroActual.metodoPago,
      fileId: nuevoFileId,
      link: nuevoLink
    };

    bddatos[index] = registroEditado;
    guardarJSON(JSON_BDD_FACTURAS, bddatos);

    // 4. Lógica de Log
    let infoLog = {
      registroId,
      antes: registroActual,
      despues: registroEditado
    };

    if (huboCambioDeArchivo) {
      infoLog.cambioLink = {
        mensaje: "Link de factura actualizado (nueva copia detectada en subcarpeta facturas)",
        idAnterior: fileIdAnterior,
        idNuevo: nuevoFileId
      };
    }

    registrarLog("updateFactura", correoEjecutor, infoLog);

    return respuestaJSON({
      status: "ok",
      mensaje: huboCambioDeArchivo 
        ? "✅ Factura y link actualizados correctamente." 
        : "✅ Factura actualizada correctamente.",
      datos: registroEditado
    });

  } catch (error) {
    return respuestaJSON({ status: "error", mensaje: "Error: " + error.message });
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
// function addDatoTributario(data, usuario) {
//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000); // hasta 30s esperando

//   try {
//     let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);
//     const correoEjecutor = usuario?.correo || "sistema";

//     // 🔎 Validar duplicados en label o valor normalizados
//     const yaExiste = datos.some(d =>
//       normalizarTexto(d.label) === normalizarTexto(data.label) ||
//       (normalizarTexto(d.label) === normalizarTexto(data.label) && normalizarTexto(d.valor) === normalizarTexto(data.valor))
//     );

//     if (yaExiste) {
//       return respuestaJSON({
//         status: "error",
//         mensaje: `⚠️ Ya existe un dato tributario con el mismo label o valor`
//       });
//     }

//     // 🔹 Calcular el orden (último + 1)
//     const maxOrden = datos.length > 0 ? Math.max(...datos.map(d => d.orden || 0)) : 0;

//     // 📦 Crear nuevo registro (guardamos lo que llega sin cambios)
//     const nuevo = {
//       id: data.id || ("dato" + new Date().getTime()),
//       label: data.label || "",
//       valor: data.valor || "",
//       orden: maxOrden + 1
//     };

//     datos.push(nuevo);
//     guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

//     // ✅ Registrar log
//     registrarLog("addDatoTributario", correoEjecutor, {
//       datoTributarioAdicionado: nuevo
//     });

//     return respuestaJSON({ status: "ok", mensaje: "Dato agregado", datos });
//   } finally {
//     lock.releaseLock();
//   }
// }
function updateAllDatosTributarios(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    // --- LÓGICA DE NORMALIZACIÓN ---
    let arrayParaGuardar = data;

    // Si data no es array pero tiene una propiedad 'data' que sí lo es
    if (!Array.isArray(data) && data && Array.isArray(data.data)) {
      arrayParaGuardar = data.data;
    } 
    // Si Apps Script lo recibió como objeto de argumentos (a veces pasa en apiPost)
    else if (!Array.isArray(data) && typeof data === 'object') {
       arrayParaGuardar = Object.values(data).filter(item => typeof item === 'object');
    }

    if (!Array.isArray(arrayParaGuardar)) {
      throw new Error("Los datos recibidos no tienen un formato de array válido");
    }

    // Guardar en el archivo JSON
    guardarJSON(JSON_DATOS_TRIBUTARIOS, arrayParaGuardar);

    registrarLog("updateAllDatosTributarios", usuario?.correo || "sistema", {
      cantidad: arrayParaGuardar.length
    });

    return respuestaJSON({ status: "ok", mensaje: "Datos sincronizados correctamente" });
  } catch (error) {
    return respuestaJSON({ status: "error", mensaje: error.message });
  } finally {
    lock.releaseLock();
  }
}
// function updateDatoTributario(data, usuario) {
//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000); // hasta 30s esperando

//   try {
//     let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);
//     const correoEjecutor = usuario?.correo || "sistema";

//     const idx = datos.findIndex(d => d.id === data.id);
//     if (idx === -1) return respuestaJSON({ status: "error", mensaje: "Dato no encontrado" });

//     // ⚡ Solo persistir estos campos
//     const dataLimpia = {
//       id: datos[idx].id,                 // nunca cambia
//       orden: data.orden ?? datos[idx].orden, // conservar si no viene
//       label: data.label ?? datos[idx].label,
//       valor: data.valor ?? datos[idx].valor
//     };

//     datos[idx] = dataLimpia;
//     guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

//      // ✅ Registrar log
//     registrarLog("updateDatoTributario", correoEjecutor, {
//       datoTributarioActualizado: data
//     });
//     return respuestaJSON({ status: "ok", mensaje: "Dato actualizado", datos });

//   } finally {
//     lock.releaseLock();
//   }
// }
// function deleteDatoTributario(data, usuario) {

//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000); // hasta 30s esperando

//   try {
//     let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);
//     const correoEjecutor = usuario?.correo || "sistema";

//     datos = datos.filter(d => d.id !== data.id);
//     guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

//     // ✅ Registrar log
//     registrarLog("deleteDatoTributario", correoEjecutor, {
//       datoTributarioBorrado: data.id || data
//     });
//     return respuestaJSON({ status: "ok", mensaje: "Dato eliminado", datos });

//   } finally {
//     lock.releaseLock();
//   }

// }
// function moveDatoTributario(data, usuario) {
//   const { id, direction } = data;  // 👈 desestructurar el objeto
//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000);

//   try {
//     let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);
//     const correoEjecutor = usuario?.correo || "sistema";

//     // Ordenarlos antes de mover
//     datos.sort((a, b) => (a.orden || 0) - (b.orden || 0));

//     const index = datos.findIndex(d => d.id === id);
//     if (index === -1) {
//       return respuestaJSON({ status: "error", mensaje: "❌ No se encontró el dato" });
//     }

//     const targetIndex = index + direction;
//     if (targetIndex < 0 || targetIndex >= datos.length) {
//       return respuestaJSON({ status: "error", mensaje: "⚠️ Movimiento inválido" });
//     }


//     // Intercambiar orden
//     const tempOrden = datos[index].orden;
//     datos[index].orden = datos[targetIndex].orden;
//     datos[targetIndex].orden = tempOrden;

//     guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

//     registrarLog("moveDatoTributario", correoEjecutor, {
//       idMovido: id,
//       direccion: direction
//     });

//     return respuestaJSON({ status: "ok", mensaje: "Dato movido", datos });
//   } finally {
//     lock.releaseLock();
//   }
// }
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
  lock.waitLock(30000);

  try {
    let logs = leerJSON(JSON_LOGS) || [];
    const correoEjecutor = usuario?.correo || "sistema";

    // Si hay 10 o menos, no hacer nada
    if (logs.length <= 10) {
      return respuestaJSON({
        status: "ok",
        mensaje: "No se eliminaron logs. Hay 10 o menos registros.",
        total: logs.length
      });
    }

    // 🔥 CONSERVAR LOS ÚLTIMOS 10 (los de abajo)
    const logsConservados = logs.slice(-10);
    const eliminados = logs.length - logsConservados.length;

    guardarJSON(JSON_LOGS, logsConservados);

    registrarLog("limpiarLogsAntiguos", correoEjecutor, {
      eliminados,
      totalFinal: logsConservados.length
    });

    return respuestaJSON({
      status: "ok",
      mensaje: `🧹 ${eliminados} logs eliminados, se conservaron los últimos 10.`,
      totalFinal: logsConservados.length
    });

  } catch (error) {
    return manejarError(error, "limpiarLogsAntiguos", correoEjecutor);
  } finally {
    lock.releaseLock();
  }
}



