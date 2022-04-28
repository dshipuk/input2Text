import React, { useState } from 'react';
import './App.css';

import InputForm from "./components/inputForm";

function App() {
  const [text, setText] = useState({
    text: ""
  })

  const handleChanges = e => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <InputForm handleChanges={handleChanges} text={text} />
    </div>
  );
}

export default App;
