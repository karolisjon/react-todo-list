import Card from "../src/components/card/card";
import Modal from "./components/modal/modal";
import React, { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="App">
      <Card />

      <div>
        <button onClick={() => setIsOpen(!isOpen)}>open modal</button>
        <Modal open={isOpen} />
      </div>
    </div>
  );
}

export default App;
