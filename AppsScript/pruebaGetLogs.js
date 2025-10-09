function probarGetLogs() {
  const url = "https://script.google.com/macros/s/AKfycbziHDpQfYjrIdCaiB9w9uZqNgp6czAkNQVoPo0XxPuuWEFXJP0KxqRaZ48VRjRXU1Xx/exec";

  try {
    const resp = UrlFetchApp.fetch(`${url}?accion=getLogs`);
    const texto = resp.getContentText();
    const data = JSON.parse(texto);
    Logger.log(JSON.stringify(data, null, 2)); // Log bonito
  } catch (error) {
    Logger.log("❌ Error al obtener logs:");
    Logger.log(error);
  }
}