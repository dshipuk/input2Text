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
      <h1>{text}</h1>
      <label>Enter Text:
        <input 
          type="text"
          name="text"
          value={text}
          onChange={handleChanges}
        />
      </label>
    </div>
  );
}

export default App;
