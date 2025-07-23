// Import React and useState hook
import React, { useState } from "react";

// Import child components
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // State to store all notes
  const [notes, setNotes] = useState([]);

  // Function to add a new note to the notes array
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  // Function to delete a note by its index (id)
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {/* Top header */}
      <Header />

      {/* Input area for creating new notes */}
      <CreateArea onAdd={addNote} />

      {/* Render all notes */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}            // Unique key for each note
            id={index}             // Pass index as id for deletion
            title={noteItem.title} // Note title
            content={noteItem.content} // Note content
            onDelete={deleteNote}  // Delete handler
          />
        );
      })}

      {/* Bottom footer */}
      <Footer />
    </div>
  );
}

export default App;
