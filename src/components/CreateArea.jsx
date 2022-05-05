import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const CreateArea = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const expand = () => {
    setExpanded(true);
  };

  const submitNote = (e) => {
    addNote(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  };

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          rows={expanded ? 3 : 1}
          placeholder="Take a note..."
          onClick={expand}
          onChange={handleChange}
          value={note.content}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};
