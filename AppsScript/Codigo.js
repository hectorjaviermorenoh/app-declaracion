/******************************
 * CONFIGURACIÓN INICIAL
 ******************************/
const CARPETA_PRINCIPAL = "declaracion";
const JSON_CONFIGURACION = "configuracion.json";
const JSON_USUARIOS = "usuarios.json";
const JSON_PRODUCTOS = "productos.json";
const JSON_BDD_DATOS = "bddatos.json";
const JSON_LOGS = "logs.json";
const JSON_DATOS_TRIBUTARIOS = "datosTributarios.json";

/******************************
 * CONSTANTE DE CONFIGURACIONES INICIALES
 ******************************/
const CONFIG_INICIAL = {
  CARPETA_PRINCIPAL: CARPETA_PRINCIPAL,
  PERMITIR_DESCARGA: false,
  TAMANO_MAX_MB: 10,
  TIPOS_PERMITIDOS: ["pdf", "jpg", "png", "docx", "txt"]
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

    // 6. Crear JSON de logs si no existe
    crearArchivoJSONSiNoExiste(carpetaPrincipal, JSON_LOGS, []);

    // 7. Crear datos tributarios con valores iniciales
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
        return respuestaJSON(leerJSON(JSON_LOGS));

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
      // return respuestaJSON({ status: "error", mensaje: "No se recibieron datos válidos" });
      // return respuestaJSON({
      //   status: "error",
      //   mensaje: "No se recibieron datos válidos",
      //   parametros: e.parameter || null,
      //   archivos: e.files || null,
      //   postData: e.postData ? {
      //     type: e.postData.type,
      //     length: e.postData.length,
      //     contents: e.postData.contents ? e.postData.contents.substring(0, 200) : null // solo los primeros 200 chars para no saturar
      //   } : null
      // });

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
        return subirArchivoUniversal(e, isMultipart);

      case "setConfig":
        return setConfig(data);

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
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    let productos = leerJSON(JSON_PRODUCTOS);

    const yaExiste = productos.some(u => normalizarTexto(u.nombre) === normalizarTexto(data.nombre));
    if (yaExiste) {
      return respuestaJSON({
        status: "error",
        mensaje: `⚠️ Ya existe un producto con el nombre ${data.nombre}`
      });
    }
    const nuevoProd = {
      id: "prod" + new Date().getTime(),
      nombre: data.nombre,
      descripcion: data.descripcion || "",
      entidad: data.entidad || "",
      tipo: data.tipo || ""
    };
    productos.push(nuevoProd);
    guardarJSON(JSON_PRODUCTOS, productos);
    // ✅ Registrar log
    registrarLog("addProducto", data.usuario || "desconocido", { producto: nuevoProd });

    return respuestaJSON({ status: "ok", mensaje: "Producto agregado", productos });

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
function subirArchivoUniversal(e, isMultipart) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    // 👀 Capturamos el payload que llegó
    let debugPayload = {
      parametros: e.parameter || null,
      postData: e.postData ? e.postData.contents : null,
      isMultipart
    };


    let config = leerJSON(JSON_CONFIGURACION);

    let archivoBlob = null;
    let productosId = [];
    let anio = "";

    if (isMultipart) {
      archivoBlob = e.files.archivo;
      anio = e.parameter.anio;
      productosId = e.parameter.productosId
        ? e.parameter.productosId.split(",")
        : [];
    } else {
      const data = JSON.parse(e.postData.contents);
      if (!data.archivo) {
        return respuestaJSON({ success: false, message: "❌ No se envió archivo", debug: debugPayload,});
      }

      archivoBlob = Utilities.newBlob(
        Utilities.base64Decode(data.archivo.base64),
        data.archivo.tipo || MimeType.BINARY,
        data.archivo.nombre
      );

      anio = data.anio;
      productosId = data.productosId || [];
    }

    if (!archivoBlob || productosId.length === 0 || !anio) {
      return respuestaJSON({ success: false, message: "❌ Faltan campos obligatorios", debug: debugPayload,});
    }

    // if (!archivoBlob || productosId.length === 0 || !anio) {
    //   return respuestaJSON({ success: false, message: "❌ Faltan campos obligatorios", debug: debugPayload,});
    // }

    // --- Validar extensión y tamaño ---
    let extension = archivoBlob.getName().split(".").pop().toLowerCase();
    let tamanoMB = archivoBlob.getBytes().length / (1024 * 1024);

    if (!config.TIPOS_PERMITIDOS.includes(extension)) {
      return respuestaJSON({ success: false, message: "❌ Tipo de archivo no permitido" });
    }
    if (tamanoMB > config.TAMANO_MAX_MB) {
      return respuestaJSON({ success: false, message: `❌ Tamaño máximo permitido: ${config.TAMANO_MAX_MB} MB` });
    }

    // --- Guardar en Drive ---
    let nombreBase = archivoBlob.getName().replace(/\.[^/.]+$/, "");
    let nombreCamel = nombreBase
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
      .replace(/^(.)/, (_, chr) => chr.toLowerCase());

    let nuevoNombre = `${nombreCamel}.${extension}`;
    const carpetaPrincipal = obtenerOCrearCarpeta(config.CARPETA_PRINCIPAL);
    const carpetaAnio = obtenerOCrearCarpetaEn(carpetaPrincipal, anio);

    // 🚨 Verificar si el archivo ya existe en la carpeta del año
    let existente = null;
    let archivos = carpetaAnio.getFilesByName(nuevoNombre);
    if (archivos.hasNext()) {
      existente = archivos.next(); // usamos el existente
    }

    let file;
    if (existente) {
      file = existente;
    } else {
      file = carpetaAnio.createFile(archivoBlob);
      file.setName(nuevoNombre);
    }


    // --- Registrar en base de datos ---
    let bddatos = leerJSON(JSON_BDD_DATOS);
    let productos = leerJSON(JSON_PRODUCTOS);

    productosId.forEach(pid => {
      let prod = productos.find(p => p.id === pid);
      if (prod) {
        let registro = {
        registroId: "reg" + new Date().getTime(),
        fileId: file.getId(),       // 👈 ahora explícito
        productoId: pid,
        nombreProducto: prod.nombre,
        descripcion: prod.descripcion || "",
        anio,
        nombreArchivo: nuevoNombre,
        link: file.getUrl(),
        fecha: new Date().toISOString()
      };
        bddatos.push(registro);
      }
    });

    guardarJSON(JSON_BDD_DATOS, bddatos);

    // ✅ Registrar log
    registrarLog("subirArchivo", Session.getActiveUser().getEmail(), {
      archivo: archivoBlob.getName(),
      productosId,
      anio
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

    // 3. Subir nuevo archivo
    const archivoBlob = Utilities.newBlob(
      Utilities.base64Decode(data.archivo.base64),
      data.archivo.tipo || MimeType.BINARY,
      data.archivo.nombre
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

    // ✅ Registrar log
    registrarLog("replaceArchivo", correo, {
      nuevoFileId: file.getId(),
      nuevoNombre: data.archivo.nombre,
      productosAfectados: registrosRelacionados.map(r => r.productoId),
      anio: data.anio,
      replaceOnlyThis: data.replaceOnlyThis === true,
      archivoBorrado: borradoOk ? oldFileName : "no borrado"
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
      entidad: prod.entidad || "",
      tipo: prod.tipo || "",
      descripcion: prod.descripcion || "",
      anio: r.anio,
      nombreArchivo: r.nombreArchivo,
      link: r.link,
      fecha: r.fecha
    };
  });

  return respuestaJSON({ status: "ok 808", anio, archivos: resultado });
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

    // ⚡ Normalizar: asignar orden único si falta
    let maxOrden = datos.reduce((max, d) => Math.max(max, d.orden || 0), 0);
    datos.forEach((d) => {
      if (d.orden === undefined) {
        maxOrden++;
        d.orden = maxOrden;
      }
    });

    const idx = datos.findIndex(d => d.id === data.id);
    if (idx === -1) return respuestaJSON({ status: "error", mensaje: "Dato no encontrado" });

    // datos[idx] = data;

    datos[idx] = {
      ...datos[idx],   // mantiene id y orden
      ...data          // sobreescribe label y valor si llegan
    };
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






