import React, { useContext,useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes,getAllNote } = context;
  useEffect(() => {
    getAllNote()
  }, [])
  
  return (
    <>
      {/* Use AddNote Component for add note */}
      <AddNote />
      <div className="row">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
