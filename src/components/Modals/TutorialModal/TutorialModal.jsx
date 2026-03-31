import React from "react";
import "./TutorialModal.scss";

const TutorialModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="tutorial-modal-overlay" onClick={onClose}>
      <div className="tutorial-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Cerrar tutorial">
          &times;
        </button>

        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/1177499805?h=88dc37414d&badge=0&autopause=0&autoplay=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Video Tutorial AppDeclaración"
          ></iframe>
        </div>

        <div className="modal-footer-text">
          <p>Descubre cómo gestionar tus documentos con AppDeclaración</p>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;