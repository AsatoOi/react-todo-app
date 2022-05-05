import { useState } from "react";
import "./App.css";

import { Header } from "./components/Header";
import { CreateArea } from "./components/CreateArea";
import { Note } from "./components/Note";
import { Footer } from "./components/Footer";

export const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    let prevNote = notes;
    setNotes([...prevNote, newNote]);
  };
  const onDelete = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
};
