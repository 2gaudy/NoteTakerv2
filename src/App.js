import './App.css';
import React from 'react'

function App() {

  const [text, setText] = React.useState("Write new text here!")
  const [notes, setNotes] = React.useState([])

  return (
    <div className="App">
      
      <div className="input-section">
        <div className="title">
          <h1>NoteTaker!</h1>
        </div>

        <input className="input-button" type="button" value="Save" onClick={() => {
          setNotes([...notes, text]);
          setText("Write something here!")
          }}
        ></input>

        <input className="input-text" type="text" value={text} 
          onChange={(event) => {
            const newValue = event.target.value;
            setText(newValue);
          }}
        ></input>
      
      </div>

      <div className='notes-section'>

      {notes.map((note) => (
        <div className='note'>
          <p className='note-text'>{note}</p>

        </div>
      ))}

      </div>

    </div>
  );
}

export default App;
