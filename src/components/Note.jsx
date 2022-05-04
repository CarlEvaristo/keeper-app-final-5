import React from "react";

function Note(props) {

  function clickHandler(event) {
    event.preventDefault()
    props.deleteNote(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={clickHandler}>X</button>
    </div>
  );
}

export default Note;
