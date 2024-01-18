import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });

  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  const [selectedNote, setSelectedNote] = useState(null);

  function editNote(id) {
    setSelectedNote({
      title : notes[id].title,
      content : notes[id].content
    });
    deleteNote(id)
  }


  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote} 
        selectedNote={selectedNote}
        />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit = {editNote}
          />
        );
      })}
      <Footer />
    </div>
  );


}

export default App;
