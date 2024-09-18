import React, { useState } from 'react';
import Spinner from './Spinner';
import './Card.css';
import Draggable from 'react-draggable';

function Card({ card, onClick, setIsDragging }) {
    const [loading, setLoading] = useState(true);

    const imageUrl = `${process.env.PUBLIC_URL}/${card.type}.jpeg`;
    const handleStart = () => {
        console.log('starteddd');
        setIsDragging(true);
        
    }
    const handleDrag = () => {
        console.log('dragging');
        
    }
    const handleStop = () => {
        setIsDragging(false)
        console.log('stopeed');
        
    }
    

  return (
      <Draggable
          handle='.card-title'
        defaultPosition={{x: 0, y: 0}}
        position={null}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}>
    <div className="card" >
      {loading && <Spinner />}
      <img
        src={imageUrl}
        alt={card.title}
        onLoad={() => setLoading(false)}
                  style={{ display: loading ? 'none' : 'block' }}
                  onClick={onClick}
      />
          <div className="card-title">{card.title}</div>
    </div>
      </Draggable>
  );
}

export default Card;