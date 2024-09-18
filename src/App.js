import React, { useState } from 'react';
import Card from './Card';
import Overlay from './Overlay';
import './App.css';

const initialData = [
  { type: "bank-draft", title: "Bank Draft", position: 0 },
  { type: "bill-of-lading", title: "Bill of Lading", position: 1 },
  { type: "invoice", title: "Invoice", position: 2 },
  { type: "bank-draft-2", title: "Bank Draft 2", position: 3 },
  { type: "bill-of-lading-2", title: "Bill of Lading 2", position: 4 },
];

function App() {
  const [cards, setCards] = useState(initialData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  

  const onCardClick = (card) => {
    setSelectedImage(card.type); 
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <div className="card-container">

        {cards.map((card) => (
            <Card
              key={card.type}
              card={card}
              setIsDragging={setIsDragging}
              onClick={() => onCardClick(card)}
              />
        ))}
      </div>
      { selectedImage && (
        <Overlay image={selectedImage} onClose={closeOverlay} />
      )}
    </div>
  );
}

export default App;