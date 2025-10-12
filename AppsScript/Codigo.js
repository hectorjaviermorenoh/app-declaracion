/******************************
 * CONFIGURACIÓN INICIAL
 ******************************/
const CARPETA_PRINCIPAL = "declaracion";
const JSON_CONFIGURACION = "configuracion.json";
const JSON_USUARIOS = "usuarios.json";
const JSON_PRODUCTOS = "productos.json";
const JSON_BDD_DATOS = "bddatos.json";
const JSON_BDD_FACTURAS = "bddatosFacturas.json";
const JSON_LOGS = "logs.json";
const JSON_DATOS_TRIBUTARIOS = "datosTributarios.json";

/******************************
 * CONSTANTE DE CONFIGURACIONES INICIALES
 ******************************/
const CONFIG_INICIAL = {
  CARPETA_PRINCIPAL: CARPETA_PRINCIPAL,
  PERMITIR_DESCARGA: false,
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
function inicializarSistemaForzado(correoAdmin, borrarCarpetas) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {
    const carpetaPrincipal = obtenerOCrearCarpeta(CARPETA_PRINCIPAL);

    let resultadoLimpieza = null;
    if (borrarCarpetas) {
      resultadoLimpieza = limpiarCarpetas(); // devuelve objeto {mensaje: "..."}
    }

    // 1. Sobrescribir configuración
    guardarORecrearJSON(carpetaPrincipal, JSON_CONFIGURACION, CONFIG_INICIAL);

    // 2. Sobrescribir usuarios con el correo enviado
    guardarORecrearJSON(carpetaPrincipal, JSON_USUARIOS, [
      { correo: correoAdmin, nombre: "Administrador", rol: "administrador", activo: true }
    ]);

    // 3. Vaciar productos, bddatos y logs
    guardarORecrearJSON(carpetaPrincipal, JSON_PRODUCTOS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_BDD_DATOS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_BDD_FACTURAS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_LOGS, []);


    // 4. Crear datos tributarios con valores iniciales
    guardarORecrearJSON(carpetaPrincipal, JSON_DATOS_TRIBUTARIOS, DATOS_TRIBUTARIOS_INICIALES);


    Logger.log("✅ Sistema reinicializado forzadamente");

    return {
      status: "ok",
      mensaje: "✅ Sistema reinicializado correctamente",
      correo: correoAdmin,
      limpieza: resultadoLimpieza ? resultadoLimpieza.mensaje : "Sin borrar carpetas"
    };

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
 * FUNCIONES Administrativas Sistema
 ******************************/
 function esAdmin(correo) {
  let usuarios = leerJSON(JSON_USUARIOS);
  let user = usuarios.find(u => {
    return u.correo && u.correo.toLowerCase().trim() === correo.toLowerCase().trim();
  });
  return user && user.rol === "administrador";
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
// function getLogs() {

//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000); // hasta 30s esperando

//   try {
//     return respuestaJSON(leerJSON(JSON_LOGS));
//   } catch {

//   } finally {
//     lock.releaseLock();
//   }
// }

// function getLogs() {
//   const lock = LockService.getScriptLock();
//   lock.waitLock(30000); // Espera hasta 30s si otro proceso usa el recurso

//   try {
//     const logs = leerJSON(JSON_LOGS);

//     // 🧩 Si el archivo está vacío o no hay logs
//     if (!logs || logs.length === 0) {
//       return respuestaJSON({
//         status: "ok",
//         mensaje: "No hay logs para mostrar",
//         logs: []
//       });
//     }

//     // ✅ Retorna los logs existentes
//     return respuestaJSON({
//       status: "ok",
//       mensaje: "Logs obtenidos correctamente",
//       logs
//     });

//   } catch (error) {
//     // 🚨 Si hubo un problema al leer el archivo
//     return respuestaJSON({
//       status: "error",
//       mensaje: "Error al obtener logs",
//       detalle: error.message || "No se pudo leer el archivo de logs"
//     });

//   } finally {
//     lock.releaseLock();
//   }
// }


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


function limpiarLogsAntiguos() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // Esperar hasta 30 segundos

  try {
    let logs = leerJSON(JSON_LOGS);

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
    registrarLog("limpiarLogsAntiguos", Session.getActiveUser().getEmail(), {
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


/******************************
 * MÉTODO DOGET
 ******************************/
function doGet(e) {
  try {
    const accion = e.parameter.accion;

    switch (accion) {
      case "ping":
        return ContentService.createTextOutput(
          JSON.stringify({ status: "ok", mensaje: "API funcionando" })
        ).setMimeType(ContentService.MimeType.JSON);

      case "getConfig":
        return respuestaJSON({status: "ok", data: leerJSON(JSON_CONFIGURACION)});

      case "getUsuarios":
        return respuestaJSON({status: "ok", data: leerJSON(JSON_USUARIOS)});

      case "getProductos":
        return respuestaJSON({status: "ok", data: leerJSON(JSON_PRODUCTOS)});

      case "getDatosTributarios":
        return getDatosTributarios();

      case "getLogs":
        return getLogs();

      // --- 📌 Nuevo endpoint ArchivosPorAño ---
      case "getArchivosPorAnio":
        const anio = e.parameter.anio;
        if (!anio) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar un año" });
        }
        return getArchivosPorAnio(anio);

      // --- 📌 Nuevo endpoint ProductosPorArchivo ---
      case "getProductosPorArchivo":
        const archivoId = e.parameter.archivoId;
        if (!archivoId) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar archivoId" });
        }
        return getProductosPorArchivo(archivoId);

      default:
        return respuestaJSON({ status: "error", mensaje: "Acción no reconocida" });
    }

  } catch (err) {
    const correo = (e && e.parameter && e.parameter.correo) || Session.getActiveUser().getEmail();
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
    let isMultipart = e.files && Object.keys(e.files).length > 0;

    if (isMultipart) {
      // 📂 Caso form-data
      accion = e.parameter.accion || "";
      data = e.parameter;
    } else if (e.postData && e.postData.contents) {
      // 📦 Caso JSON
      data = JSON.parse(e.postData.contents);
      accion = data.accion || "";
    } else {
      return respuestaJSON({
        status: "debug",
        parametros: e.parameter || null,
        archivos: e.files ? Object.keys(e.files) : "sin archivos",
        postData: e.postData ? {
          type: e.postData.type,
          length: e.postData.length
        } : null
      });
    }

    switch (accion) {
      case "inicializarForzado":
        const correo = data.correoAdmin;
        const confirmar = data.confirmar;
        const borrarCarpetas = data.borrarCarpetas === true || data.borrarCarpetas === "true";

        if (confirmar !== "INICIALIZAR") {
          return respuestaJSON({ status: "error", mensaje: "⚠️ Confirmación inválida, escriba INICIALIZAR" });
        }
        const resultado = inicializarSistemaForzado(correo, borrarCarpetas);
        return respuestaJSON({ ...resultado });

      case "subirArchivo":
        return subirArchivoProducto(e, isMultipart);

      case "subirArchivoFacturas":
        return subirArchivoFacturas(e, isMultipart);

      case "setConfig":
        return setConfig(data);
      case "limpiarLogsAntiguos":
        return limpiarLogsAntiguos();
      case "addUsuario":
        return addUsuario(data);

      case "deleteUsuario":
        return deleteUsuario(data, data.correoEjecutor);

      case "addProducto":
        return addProducto(data);

      case "deleteProducto":
        return deleteProducto(data.id);

      case "replaceArchivo":
        return replaceArchivo(data);

      case "inicializarSistema":
        return inicializarSistemaSeguro(data);

      case "addDatoTributario":
        return addDatoTributario(data);

      case "updateDatoTributario":
        return updateDatoTributario(data);

      case "deleteDatoTributario":
        return deleteDatoTributario(data);
      case "moveDatoTributario":
        return moveDatoTributario(data);
      default:
        return respuestaJSON({ status: "error", mensaje: "Acción no reconocida" });
    }

  } catch (err) {
    const correo = (e && e.parameter && e.parameter.correo) || Session.getActiveUser().getEmail();
    return manejarError(err, "doPost", correo);
  }
}
/******************************
 * FUNCIONES DE NEGOCIO
 ******************************/
 // Configuración
 function setConfig(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {
    let config = leerJSON(JSON_CONFIGURACION);
    Object.assign(config, data.config);
    guardarJSON(JSON_CONFIGURACION, config);

    // ✅ Registrar log
    registrarLog("setConfig", Session.getActiveUser().getEmail(), {
      configuracionActualizada: data.config || data
    });
    return respuestaJSON({ status: "ok", mensaje: "Configuración actualizada", nuevaConfig: config });

  } finally {
    lock.releaseLock();
  }
}
// Usuarios
function addUsuario(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {
    let usuarios = leerJSON(JSON_USUARIOS);

    const yaExiste = usuarios.some(u => normalizarTexto(u.correo) === normalizarTexto(data.usuario.correo));
    if (yaExiste) {
      return respuestaJSON({
        status: "error",
        mensaje: `⚠️ Ya existe un usuario con el correo ${data.usuario.correo}`
      });
    }


    usuarios.push(data.usuario);
    guardarJSON(JSON_USUARIOS, usuarios);

    // ✅ Registrar log
    registrarLog("addUsuario", Session.getActiveUser().getEmail(), {
      UsuarioAgregado: data.usuario || data
    });
    return respuestaJSON({ status: "ok", mensaje: "Usuario agregado", usuarios });

  } finally {
    lock.releaseLock();
  }
}
function deleteUsuario(data, correoEjecutor) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {
    // Validar admin
    if (!esAdmin(correoEjecutor)) {
      return respuestaJSON({ status: "error", mensaje: "⛔ No autorizado" });
    }

    let usuarios = leerJSON(JSON_USUARIOS);
    const idx = usuarios.findIndex(u => u.correo === data.correo);

    if (idx === -1) {
      return respuestaJSON({ status: "error", mensaje: "❌ Usuario no encontrado" });
    }

    // Evitar que un admin se borre a sí mismo
    if (usuarios[idx].correo === correoEjecutor) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ No puedes eliminar tu propio usuario administrador" });
    }

    const eliminado = usuarios[idx];
    usuarios.splice(idx, 1);

    guardarJSON(JSON_USUARIOS, usuarios);

    // ✅ Registrar log
    registrarLog("deleteUsuario", correoEjecutor, { usuarioEliminado: eliminado.correo });

    return respuestaJSON({
      status: "ok",
      mensaje: `✅ Usuario ${eliminado.correo} eliminado correctamente`,
      usuarioEliminado: eliminado
    });

  } finally {
    lock.releaseLock();
  }

}
// Productos
function addProducto(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let productos = leerJSON(JSON_PRODUCTOS);
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

      registrarLog("addProducto", p.usuario || "desconocido", { producto: nuevoProd });
    });

    guardarJSON(JSON_PRODUCTOS, productos);

    return respuestaJSON({ status: "ok", resultados });
  } finally {
    lock.releaseLock();
  }
}
function deleteProducto(id) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    let productos = leerJSON(JSON_PRODUCTOS);
    const eliminado = productos.find(p => p.id === id);

    let nuevos = productos.filter(p => p.id !== id);
    guardarJSON(JSON_PRODUCTOS, nuevos);

    // ✅ Registrar log
    registrarLog("deleteProducto", Session.getActiveUser().getEmail(), {
      productoEliminado: eliminado || id
    });
    return respuestaJSON({ status: "ok", mensaje: "Producto eliminado", productos: nuevos });

  } finally {
    lock.releaseLock();
  }
}


// Archivos
function subirArchivoProducto(e, isMultipart) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    let config = leerJSON(JSON_CONFIGURACION);

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

    registrarLog("subirArchivo", Session.getActiveUser().getEmail(), {
      archivo: archivoBlob.getName(),
      productos: productosAfectados,
      productosId,
      anio,
      nombreArchivoFinal: resultadoDrive.nuevoNombre || file.getName(),
      link: file.getUrl()
    });

    // // ✅ Registrar log
    // registrarLog("subirArchivo", Session.getActiveUser().getEmail(), {
    //   archivo: archivoBlob.getName(),
    //   productosId,
    //   anio
    // });

    return respuestaJSON({
      success: true,
      status: "ok",
      message: "📂 Archivo subido correctamente",
      idArchivo: file.getId(),          // 👈 ID en Drive
      link: file.getUrl(),              // 👈 Enlace de Drive
      productosAsociados: productosId,
      debug: debugPayload, // 👈 siempre devolvemos lo que entró
    });

  } finally {
    lock.releaseLock();
  }
}

function subirArchivoFacturas(e, isMultipart) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    let config = leerJSON(JSON_CONFIGURACION);

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
      valor,
      metodoPago,
      nombreArchivo: resultadoDrive.nuevoNombre, // ✅ usar resultadoDrive
      link: resultadoDrive.link,                 // ✅ usar resultadoDrive
      fecha: new Date().toISOString(),
    };

    bddatos.push(registro);
    guardarJSON(JSON_BDD_FACTURAS, bddatos);

    // ✅ Registrar log
    registrarLog("subirArchivoFacturas", Session.getActiveUser().getEmail(), {
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

function replaceArchivo(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    // Validar que sea administrador
    let correo = Session.getActiveUser().getEmail() || data.correo || "";
    if (!esAdmin(correo)) {
      return respuestaJSON({ status: "error", mensaje: "⛔ No autorizado", correo });
    }

    let bddatos = leerJSON(JSON_BDD_DATOS);

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

    registrarLog("replaceArchivo", correo, {
      nuevoFileId: file.getId(),
      nuevoNombre: nombreNormalizado,
      productosAfectados,
      anio: data.anio,
      replaceOnlyThis: data.replaceOnlyThis === true,
      archivoBorrado: borradoOk ? oldFileName : "no borrado",
      linkNuevoArchivo: file.getUrl()
    });

    // // ✅ Registrar log
    // registrarLog("replaceArchivo", correo, {
    //   nuevoFileId: file.getId(),
    //   nuevoNombre: nombreNormalizado,
    //   productosAfectados: registrosRelacionados.map(r => r.productoId),
    //   anio: data.anio,
    //   replaceOnlyThis: data.replaceOnlyThis === true,
    //   archivoBorrado: borradoOk ? oldFileName : "no borrado"
    // });

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
function addDatoTributario(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // hasta 30s esperando

  try {
    let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);

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
    registrarLog("addDatoTributario", Session.getActiveUser().getEmail(), {
      datoTributarioAdicionado: nuevo
    });

    return respuestaJSON({ status: "ok", mensaje: "Dato agregado", datos });
  } finally {
    lock.releaseLock();
  }
}
function updateDatoTributario(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // hasta 30s esperando

  try {
    let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);

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
    registrarLog("updateDatoTributario", Session.getActiveUser().getEmail(), {
      datoTributarioActualizado: data
    });
    return respuestaJSON({ status: "ok", mensaje: "Dato actualizado", datos });

  } finally {
    lock.releaseLock();
  }
}
function deleteDatoTributario(data) {
  let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);
  datos = datos.filter(d => d.id !== data.id);
  guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

  // ✅ Registrar log
  registrarLog("deleteDatoTributario", Session.getActiveUser().getEmail(), {
    datoTributarioBorrado: data.id || data
  });
  return respuestaJSON({ status: "ok", mensaje: "Dato eliminado", datos });
}
function moveDatoTributario(data) {
  const { id, direction } = data;  // 👈 desestructurar el objeto
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);

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

    registrarLog("moveDatoTributario", Session.getActiveUser().getEmail(), {
      idMovido: id,
      direccion: direction
    });

    return respuestaJSON({ status: "ok", mensaje: "Dato movido", datos });
  } finally {
    lock.releaseLock();
  }
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






