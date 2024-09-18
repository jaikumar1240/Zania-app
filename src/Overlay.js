import React, { useEffect } from 'react';
import './Overlay.css';

function Overlay({ image, onClose }) {
    const imageUrl = `${process.env.PUBLIC_URL}/${image}.jpeg`;
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <img src={imageUrl} alt="Document" />
    </div>
  );
}

export default Overlay;