import { useState } from "react";
import CrearBackendModal from "../../components/Modals/CrearBackend/CrearBackendModal";
import "./CrearBackend.scss";

import img1 from "../../assets/img/imgBackend1.jpg";
import img2 from "../../assets/img/imgBackend2.jpg";
import img3 from "../../assets/img/imgBackend3.jpg";
import img4 from "../../assets/img/imgBackend4.jpg";
import img5 from "../../assets/img/imgBackend5.jpg";
import img6 from "../../assets/img/imgBackend6.jpg";
import img7 from "../../assets/img/imgBackend7.jpg";
import img8 from "../../assets/img/imgBackend8.jpg";
import img9 from "../../assets/img/imgBackend9.jpg";

const CrearBackend = () => {

  const [abrirModal, setAbrirModal] = useState(false);

  const abrirAppsScript = () => {
    window.open("https://script.google.com/home/", "_blank");
  };

  const pasos = [
    {
      img: img1,
      texto: "Ingrese a Apps Script escribiendo https://script.google.com/home/ en el navegador o haciendo clic en el botón Abrir Apps Script."
    },
    {
      img: img2,
      texto: "Dentro de la consola de Apps Script haga clic en el botón 'Nuevo proyecto' ubicado en la parte superior izquierda."
    },
    {
      img: img3,
      texto: "Cambie el nombre del proyecto a 'AppDeclaracion'. Luego ubique el archivo Codigo.gs, elimine el contenido existente y pegue el código del backend."
    },
    {
      img: img4,
      texto: "En el panel izquierdo haga clic en '+' en Servicios, busque Drive API, seleccione versión v3 y haga clic en Añadir."
    },
    {
      img: img5,
      texto: "En la parte superior derecha haga clic en 'Implementar', luego en 'Nueva implementación' y seleccione 'Aplicación web'."
    },
    {
      img: img6,
      texto: "En Nueva descripción escriba 'Versión inicial'. En Ejecutar como deje 'Yo' y en Quién tiene acceso seleccione 'Cualquier usuario'. Luego haga clic en Implementar."
    },
    {
      img: img7,
      texto: "Autorice el acceso. Haga clic en Advanced, luego en 'Go to AppDeclaracion (unsafe)', continúe, seleccione todos los permisos y copie la URL generada."
    },
    {
      img: img8,
      texto: "Seleccione la función 'inicializarSistem' en el menú superior y haga clic en Ejecutar para inicializar el sistema."
    },
    {
      img: img9,
      texto: "Regrese al administrador de proyectos y en Configuración active la opción 'API de Google Apps Script'."
    }
  ];

  return (
    <div className="crear-backend">

      <h1>Crear Backend en Apps Script</h1>

      {/* VIDEO */}
      <div className="video-container">

        <iframe
          src="https://www.youtube.com/embed/TU_VIDEO_AQUI"
          title="Tutorial Backend Apps Script"
          allowFullScreen
        />

      </div>

      {/* BOTON */}
      <div className="boton-container">

        <button onClick={abrirAppsScript}>
          Abrir Apps Script
        </button>

      </div>

      {/* PASOS */}
      <div className="pasos-container">

      {pasos.map((paso, index) => (
        <div className="paso" key={index}>

          <img src={paso.img} alt={`Paso ${index + 1}`} />

          <p>
            <strong>Paso {index + 1}:</strong> {paso.texto}
          </p>

          {index === 2 && (
            <button
              className="boton-codigo"
              onClick={() => setAbrirModal(true)}
            >
              Ver código del Backend
            </button>
          )}

        </div>
      ))}

      </div>

      <CrearBackendModal
        isOpen={abrirModal}
        onClose={() => setAbrirModal(false)}
      />

    </div>


  );
};

export default CrearBackend;