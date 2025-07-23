// Import React and useState hook
import React, { useState } from "react";

// Import Material UI components for styling and interaction
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  // State to track whether the input area is expanded
  const [isExpanded, setExpanded] = useState(false);

  // State to store the current note input (title and content)
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Handle changes in input and textarea fields
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // Submit the note to the parent component and reset the form
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault(); // Prevent page refresh
  }

  // Expand the input area when user clicks the textarea
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* Show title input only if expanded */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        {/* Textarea for note content, always visible */}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {/* Submit button with animation, shown only when expanded */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
