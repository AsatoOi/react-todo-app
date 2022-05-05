import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const Note = ({ id, title, content, onDelete }) => {
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onClickDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};
