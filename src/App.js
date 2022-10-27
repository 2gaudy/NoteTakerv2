import './App.css';
import React from 'react'

function App() {
  const [title, setTitle] = React.useState("Write the title here!")
  const [text, setText] = React.useState("Write body text here!")
  const [notes, setNotes] = React.useState([])

  return (
    <div className="App">
      

{/* Input Text Section */}

      <div className="input-section">

      <div className="title">
          <h1>NoteTaker!</h1>
      </div>
{/* Input Title Text Box */}

        <input className="title-input" 
          type="text" 
          value={title} 
          onChange={(event) => {
            const newValue = event.target.value;
            setTitle(newValue);
          }}
        ></input>

{/* Input Text Box */}
       
        <input className="input-text" 
          type="text" 
          value={text} 
          onChange={(event) => {
            const newValue = event.target.value;
            setText(newValue);
          }}
        ></input>

{/* Input Button */}
        
        <input className="input-button" 
          type="button" 
          value="Save" 
          onClick={() => {
            setNotes([...notes, [title, text]]);
            setTitle("Write the title here!")
            setText("Write something here!")
          }}
        ></input>

      
      </div>
      
{/* Notes Section */}

      <div className='notes-section'>
      
{/* Display Notes */}
      
      {notes.map((note) => (
        <div className='note'>
          <h3 className='note-title'>{note[0]}</h3>
          <p className='note-text'>{note[1]}</p>
        </div>
      ))}

      </div>

    </div>
  );
}

export default App;
