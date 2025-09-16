function probarUpload() {
  const url = "https://script.google.com/macros/s/AKfycbziHDpQfYjrIdCaiB9w9uZqNgp6czAkNQVoPo0XxPuuWEFXJP0KxqRaZ48VRjRXU1Xx/exec";

  const archivo = DriveApp.getFilesByName("Cedula de Indentidad 79904519.pdf").next();
  const base64 = Utilities.base64Encode(archivo.getBlob().getBytes());

  // ⚠️ OJO: aquí debes poner el ID del producto que creaste en productos.json
  const productosId = ["prod1756271525638"];

  const payload = {
    accion: "subirArchivo",
    anio: "2027",
    productosId: productosId,
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
  Logger.log(resp.getContentText());
}