import { useState, useEffect } from "react";
import "./CrearBackendModal.scss";

import codigoBackendFile from "../../../assets/code/backend.gs.txt?raw";

const CrearBackendModal = ({ isOpen, onClose }) => {

  const [copiado, setCopiado] = useState(false);

  const codigoBackend = codigoBackendFile;

  const copiarCodigo = () => {
    navigator.clipboard.writeText(codigoBackend);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backend-overlay">

      <div
        className="modal-backend"
        onClick={(e) => e.stopPropagation()}
      >

        <h2>Código del Backend</h2>

        <pre>
          <code>
            {codigoBackend}
          </code>
        </pre>

        <div className="modal-botones">

          <button onClick={copiarCodigo}>
            Copiar código
          </button>

          <button onClick={onClose}>
            Cerrar
          </button>

        </div>

        {copiado && (
          <p className="mensaje-copiado">
            Script copiado correctamente
          </p>
        )}

      </div>

    </div>
  );
};

export default CrearBackendModal;