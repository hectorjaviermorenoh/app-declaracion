import React from "react";
import "./TutorialModal.scss";

const TutorialModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="tutorial-modal-overlay" onClick={onClose}>

      <div className="tutorial-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Botón X de cerrar (flotante) */}
        <button className="close-x-btn" onClick={onClose} aria-label="Cerrar">
          &times;
        </button>

        <div className="modal-body">
          <div className="video-aspect-ratio">
            <iframe
              src="https://player.vimeo.com/video/1177499805?h=88dc37414d&badge=0&autopause=0&autoplay=1"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Video Tutorial AppDeclaración"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TutorialModal;