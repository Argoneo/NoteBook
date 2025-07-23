// Import React
import React from "react";

// Import Material UI delete icon
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  // Function to handle delete button click
  function handleClick() {
    props.onDelete(props.id); // Call the delete function passed from parent
  }

  return (
    <div className="note">
      {/* Display note title and content */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      {/* Delete button with icon */}
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
