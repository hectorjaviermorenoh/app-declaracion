function probarReplaceArchivo() {
  const url = "https://script.google.com/macros/s/AKfycbziHDpQfYjrIdCaiB9w9uZqNgp6czAkNQVoPo0XxPuuWEFXJP0KxqRaZ48VRjRXU1Xx/exec";

  // Archivo que vas a usar como reemplazo
  const archivo = DriveApp.getFilesByName("CartaHaciendaBogotaLiquidacionImpuesto2022.pdf").next();
  const base64 = Utilities.base64Encode(archivo.getBlob().getBytes());

  const payload = {
    accion: "replaceArchivo",
    productoId: "prod1756232124086",  // 👈 un producto que ya tenga archivo
    anio: "2027",                     // 👈 año donde está asociado
    correo: "hectorjaviermorenoh@gmail.com",
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
  Logger.log("pruebahjm" + " " + resp.getContentText());

}

function testAdmin() {
  const correo = Session.getActiveUser().getEmail();
  Logger.log("Correo activo: " + correo);

  if (esAdmin(correo)) {
    Logger.log("✅ Es administrador");
  } else {
    Logger.log("❌ No es administrador");
  }
}

