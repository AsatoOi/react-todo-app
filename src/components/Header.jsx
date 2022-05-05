import React from "react";

import ListIcon from "@mui/icons-material/List";

export const Header = () => {
  return (
    <header>
      <h1>
        <ListIcon fontSize="large" sx={{ marginTop: "3px" }} />
        <div>ToDoList</div>
      </h1>
    </header>
  );
};
