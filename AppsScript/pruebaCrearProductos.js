function probarCrearProductos() {
  const url = "https://script.google.com/macros/s/AKfycbziHDpQfYjrIdCaiB9w9uZqNgp6czAkNQVoPo0XxPuuWEFXJP0KxqRaZ48VRjRXU1Xx/exec";

  const payload = {
    accion: "addProducto",
    productos: [
      { nombre: "tarjeta 5086456", descripcion: "ahorros", entidad: "Banco Bogota", tipo: "Credito" },
      { nombre: "tarjeta 5087456", descripcion: "corriente", entidad: "Banco Occidente", tipo: "Debito" },
      { nombre: "tarjeta 5088586", descripcion: "credito premium", entidad: "Banco Davivienda", tipo: "Credito" },
      { nombre: "tarjeta 5089956", descripcion: "corriente", entidad: "Banco AV Villas", tipo: "Debito" },
      { nombre: "tarjeta 5090755", descripcion: "ahorros joven", entidad: "Banco Popular", tipo: "Debito" },
    ]
  };

  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };

  const resp = UrlFetchApp.fetch(url, options);
  Logger.log(resp.getContentText());
}