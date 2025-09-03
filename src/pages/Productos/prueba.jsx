function probarReplaceArchivo() {
  const url = backendUrl

  const archivo = DriveApp.getFilesByName("archivonuevoParaRemplazar").next();
  const base64 = Utilities.base64Encode(archivo.getBlob().getBytes());

  const payload = {
    accion: "replaceArchivo",
    productoId: "",
    anio: "añoActual-1",
    correo: "hectorjaviermorenoh@gmail.com", // correo autorizado para remplazar archivo es este
    archivo: {
      nombre: archivo.getName(),
      base64: base64,
      tipo: archivo.getMimeType()
    }
  };

  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };

  const resp = UrlFetchApp.fetch(url, options);

}