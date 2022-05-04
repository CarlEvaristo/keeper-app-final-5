import React, {useState} from "react";

function CreateArea(props) {
  const [isExpanded, setExpansion] = useState(false);
  const [note, setNote] = useState({
    title:"",
    content:""
  });

  function changeHandler(event) {
    const {name,value} = event.target
    setNote({...note,[name]:value})
    setExpansion(true)
  };

  function clickHandler(event) {
    event.preventDefault()
    props.addNote(note)
    setNote({
      title:"",
      content:""
    })
    setExpansion(false)
  };

  return (
    <div>
      <form>
      {isExpanded&& 
        <input name="title" placeholder="Title" value={note.title} onChange={changeHandler}/>
      }
        <textarea name="content" placeholder="Take a note..." rows={isExpanded?"3":"1"} value={note.content} onChange={changeHandler} />
        <button onClick={clickHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
