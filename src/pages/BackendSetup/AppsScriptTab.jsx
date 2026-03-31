import { useState } from "react";
import BackendSetupModal from "../../components/Modals/BackendSetup/BackendSetupModal";
import codigoBackend from "../../assets/code/backend.gs.txt?raw";
import "./stylos.scss";

import img1 from "../../assets/img/imgBackend1.jpg";
import img2 from "../../assets/img/imgBackend2.jpg";
import img3 from "../../assets/img/imgBackend3.jpg";
import img4 from "../../assets/img/imgBackend4.jpg";
import img5 from "../../assets/img/imgBackend5.jpg";
import img6 from "../../assets/img/imgBackend6.jpg";
import img7 from "../../assets/img/imgBackend7.jpg";
import img8 from "../../assets/img/imgBackend8.jpg";
import img9 from "../../assets/img/imgBackend9.jpg";

const AppsScriptTab = () => {

  const [abrirModal, setAbrirModal] = useState(false);

  const abrirAppsScript = () => {
    window.open("https://script.google.com/home/", "_blank");
  };

  const pasos = [
      {
        img: img1,
        descripcion: "Ingrese a la consola de Google Apps Script para comenzar con la configuración:",
        puntos: [
          "Escriba https://script.google.com/home/ en su navegador.",
          "O haga clic en el botón 'Abrir Apps Script' de arriba."
        ]
      },
      {
        img: img2,
        descripcion: "Inicie un nuevo proyecto desde el panel principal:",
        puntos: [
          "Haga clic en el botón 'Nuevo proyecto' ubicado en la parte superior izquierda."
        ]
      },
      {
        img: img3,
        descripcion: "Configure el código base del backend:",
        puntos: [
          "Cambie el nombre del proyecto a 'AppDeclaracion' haciendo doble click encima del nombre .",
          "Ubique el archivo Codigo.gs y elimine todo su contenido.",
          "Pegue el código proporcionado por AppDeclaracion el cual puede ver y copiar en el siguiente botón."
        ]
      },
      {
        img: img4,
        descripcion: "Habilite los servicios necesarios de Google:",
        puntos: [
          "En el panel izquierdo, haga clic en el símbolo '+' en Servicios para agregar un Drive.",
          "Busque y seleccione 'Drive API'.",
          "Seleccione la versión v3 y haga clic en 'Añadir'."
        ]
      },
      {
        img: img5,
        descripcion: "Inicie el proceso de publicación:",
        puntos: [
          "Haga clic en el botón azul 'Implementar' (arriba a la derecha).",
          "Seleccione 'Nueva implementación'.",
          "Haga clic en el icono de engranaje y elija 'Aplicación web'."
        ]
      },
      {
        img: img6,
        descripcion: "Configure los parámetros de acceso de la aplicación:",
        puntos: [
          "Descripción: 'Versión inicial'.",
          "Ejecutar como: 'Yo'.",
          "Quién tiene acceso: 'Cualquier usuario' (esto es vital para la conexión).",
          "Haga clic en el botón 'Implementar'."
        ]
      },
      {
        img: img7,
        descripcion: "Autorice los permisos de seguridad de Google:",
        puntos: [
          "Haga clic en 'Autorizar acceso'.",
          "Seleccione su cuenta de Google.",
          "Haga clic en 'Advanced' y luego en 'Go to AppDeclaracion (unsafe)'.",
          "Permita todos los accesos y copie la URL generada (URL de la aplicación web) en un archivo de texto para utilizarla posteriormente en el worker."
        ]
      },
      {
        img: img8,
        descripcion: "Ejecute la configuración inicial de la base de datos:",
        puntos: [
          "En la barra de herramientas superior, seleccione la función 'inicializarSistema'.",
          "Haga clic en el botón 'Ejecutar'.",
          "Espere a que el registro de ejecución finalice correctamente.",
          "En el logo de Apps Script Superior Izquierdo de colores hacer click para regresar al administrador de proyectos"
        ]
      },
      {
        img: img9,
        descripcion: "Active el acceso programático final:",
        puntos: [
          "En el panel izquierdo hacer click en el icono de engranaje de configuración.",
          "Hacer click en 'API de Google Apps Script' el cual se debe encontrar desactivado",
          "Hacer click en la parte derecha en el botón Switch o deslizante",
          "Finalizado este paso y copiada la URL ya podemos cerrar Apps Script y pasar a la pestaña del Worker"
        ]
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

            <div className="paso-contenido">
              <strong>Paso {index + 1}:</strong>

              {/* Párrafo principal */}
              <p>{paso.descripcion}</p>

              {/* Lista de puntos (solo si existen) */}
              {paso.puntos && (
                <ul>
                  {paso.puntos.map((punto, i) => (
                    <li key={i}>{punto}</li>
                  ))}
                </ul>
              )}
            </div>

            {index === 2 && (
              <div className="boton-container">
                <button
                  onClick={() => setAbrirModal(true)}
                >
                  Ver código del Backend
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <BackendSetupModal
        isOpen={abrirModal}
        onClose={() => setAbrirModal(false)}
        titulo="Código Backend Apps Script"
        codigo={codigoBackend}
      />

    </div>


  );
};

export default AppsScriptTab;