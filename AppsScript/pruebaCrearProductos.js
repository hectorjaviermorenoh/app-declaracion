function probarCrearProductos() {
  const url = "https://script.google.com/macros/s/AKfycbziHDpQfYjrIdCaiB9w9uZqNgp6czAkNQVoPo0XxPuuWEFXJP0KxqRaZ48VRjRXU1Xx/exec";

  const payload = {
    accion: "addProducto",
    productos: [
      { nombre: "tarjeta 5086frfr456fgffg", descripcion: "ahorros", entidad: "Banco Bogota", tipo: "Credito" },
      { nombre: "tarjeta 5087456ujuy", descripcion: "corriente", entidad: "Banco Occidente", tipo: "Debito" },
      { nombre: "tarjeta 50885fref86feferf", descripcion: "credito premium", entidad: "Banco Davivienda", tipo: "Credito" },
      { nombre: "tarjeta 5089refre956rfrefre", descripcion: "corriente", entidad: "Banco AV Villas", tipo: "Debito" },
      { nombre: "tarjeta 5090755frefre", descripcion: "ahorros joven", entidad: "Banco Popular", tipo: "Debito" },
      { nombre: "tarjeta 508fref6456123ff", descripcion: "ahorros x", entidad: "Banco Bogota", tipo: "Credito" },
      { nombre: "tarjeta 508erf7456193fff", descripcion: "corrientexx", entidad: "Banco Occidente", tipo: "Debito" },
      { nombre: "tarjeta 5088rfref5862563fff", descripcion: "credito premiumxxx", entidad: "Banco Davivienda", tipo: "Credito" },
      { nombre: "tarjeta 508refref99567456ff8", descripcion: "corrienteccc", entidad: "Banco AV Villas", tipo: "Debito" },
      { nombre: "tarjeta 5090frefrfe755555fff6", descripcion: "ahorros jovendff", entidad: "Banco Popular", tipo: "Debito" },
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