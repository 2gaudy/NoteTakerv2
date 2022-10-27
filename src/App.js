import './App.css';
import React from 'react'

function App() {

  const [text, setText] = React.useState("New Todo!")
  const [notes, setNotes] = React.useState([])

  return (
    <div className="App">

      <input type="button" onClick={() => {
        setNotes([...notes, text]);
        setText("")
        }}
      ></input>

      <input type="text" value={text} 
        onChange={(event) => {
          const newValue = event.target.value;
          setText(newValue);
        }}
      ></input>

      {notes.map((note) => (
        <h3>{note}</h3>
      ))}

    </div>
  );
}

export default App;
