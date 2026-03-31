import { useState } from "react";
import BackendSetupModal from "../../components/Modals/BackendSetup/BackendSetupModal";
import codigoWorker from "../../assets/code/worker.gs.txt?raw";
import "./stylos.scss";

import img1 from "../../assets/img/imgWorker1.jpg";
import img2 from "../../assets/img/imgWorker2.jpg";
import img3 from "../../assets/img/imgWorker3.jpg";
import img4 from "../../assets/img/imgWorker4.jpg";
import img5 from "../../assets/img/imgWorker5.jpg";
import img6 from "../../assets/img/imgWorker6.jpg";
import img7 from "../../assets/img/imgWorker7.jpg";

const WorkerTab = () => {

  const [abrirModal, setAbrirModal] = useState(false);

  const abrirCloudFlare = () => {
    window.open("https://dash.cloudflare.com/", "_blank");
  };


  const pasos = [
    {
      img: img1,
      descripcion: `Ingrese a la consola de Cloudflare escribiendo en el navegador https://dash.cloudflare.com/login o haciendo clic en el botón "Abrir Cloudflare". Luego:`,
      puntos: [
        "Haga clic en 'Continue with Google'",
        "Seleccione su cuenta de Google",
        "Haga clic en 'Continuar' para ingresar al panel."
      ]
    },
    {
      img: img2,
      descripcion: "Dentro del panel de Cloudflare ubique el menú lateral izquierdo:",
      puntos: [
        "Busque la sección 'Compute'",
        "Haga clic en 'Workers & Pages'",
        "Luego haga clic en el botón 'Create application'"
      ]
    },
    {
      img: img3,
      descripcion: "En la pantalla de creación de la aplicación ubique la opción 'Start with hello world!' y haga clic en ella.",
      puntos: [
        "Esto generará un Worker base que posteriormente será modificado con el código de AppDeclaracion el cual puede ver y copiar en el siguiente botón."
      ]
    },
    {
      img: img4,
      descripcion: "En el campo 'Worker name' elimine el contenido existente y escriba:",
      puntos: [
        "appdeclaracion",
        "Luego haga clic en el botón 'Deploy' para crear el Worker."
      ]
    },
    {
      img: img5,
      descripcion: "Una vez creado el Worker aparecerá una pantalla de confirmación.",
      puntos: [
        "En esta pantalla haga clic en el botón 'Edit code' para abrir el editor del Worker."
      ]
    },
    {
      img: img6,
      descripcion: "Dentro del editor ubique el archivo worker.js, elimine el código existente y pegue el proporcionado por AppDeclaracion. Luego, busque la línea 'const destino' y:",
      puntos: [
        "Reemplace la URL entre comillas por la generada en Apps Script.",
        "Asegúrese que inicie con https:// y termine en /exec.",
        "Copie la URL pública del Worker que aparece en la parte superior derecha (esta es la que compartirá con los usuarios).",
        "Haga clic en 'Deploy' y luego en el enlace 'appdeclaracion' para regresar."
      ]
    },
    {
      img: img7,
      descripcion: "Al regresar al panel principal diríjase nuevamente a 'Workers & Pages':",
      puntos: [
        "Verifique que aparezca el Worker llamado 'appdeclaracion'.",
        "Esto confirma que el Worker fue creado y desplegado correctamente.",
        "Finalizado este paso y copiada la URL que debe registrarse en la sección 'Configuración de Backends'. Es la misma dirección que deberá proporcionarle a su contador. Una vez que él le informe su correo electrónico, usted podrá registrarlo como nuevo usuario con los roles y permisos adecuados. Recuerde que tanto usted como el contador deben agregar esta URL del Worker en sus respectivos paneles de AppDeclaración para que el sistema funcione correctamente."
      ]
    }
  ];

  return (
    <div className="crear-backend">

      <h1>Crear worker</h1>

      {/* VIDEO */}
      <div className="video-container">

        <iframe
          src="https://www.youtube.com/embed/TU_VIDEO_AQUI"
          title="Tutorial Backend Workwe CloudFlare"
          allowFullScreen
        />

      </div>

      {/* BOTON */}
      <div className="boton-container">

        <button onClick={abrirCloudFlare}>
          Abrir CloudFlare
        </button>

      </div>

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
                  Ver código del Worker
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <BackendSetupModal
        isOpen={abrirModal}
        onClose={() => setAbrirModal(false)}
        titulo="Código Cloudflare Worker"
        codigo={codigoWorker}
      />

    </div>


  );
};

export default WorkerTab;