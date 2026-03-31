import { useState } from "react";
import "./BackendSetupModal.scss";

const BackendSetupModal = ({ isOpen, onClose, titulo, codigo }) => {

  const [copiado, setCopiado] = useState(false);

  const copiarCodigo = () => {

    navigator.clipboard.writeText(codigo);

    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);

  };

  if (!isOpen) return null;

  return (

    <div className="modal-backend-overlay" onClick={onClose}>

      <div
        className="modal-backend"
        onClick={(e) => e.stopPropagation()}
      >

        <h2>{titulo}</h2>

        <pre>
          <code>
            {codigo}
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

export default BackendSetupModal;