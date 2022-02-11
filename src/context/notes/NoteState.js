import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host="http://localhost:5000";
  const notesInitial =[];

  const [notes, setNotes] = useState(notesInitial);

   //Get all Note
   const getAllNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMGYwYjlkM2I2ZjVlZGNmMGM3ODA1In0sImlhdCI6MTY0NDI5OTczN30._cg_awYV-l-kYbwbAivJaAnhuAWDFOxzvPEDDrxjbJo'
      }
    });
    const json=await response.json(); 
    console.log(json);
    setNotes(json);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //TODO: Api Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMGYwYjlkM2I2ZjVlZGNmMGM3ODA1In0sImlhdCI6MTY0NDI5OTczN30._cg_awYV-l-kYbwbAivJaAnhuAWDFOxzvPEDDrxjbJo'
      },
      body: JSON.stringify({title, description, tag}) 
    });
    const json= response.json(); 
    console.log("Adding a New Note");
    console.log(json);
    const note = {
      _id: "6202416db369ff1c945586ef",
      user: "6200f0b9d3b6f5edcf0c7805",
      title: title,
      description: description,
      tag: tag,
      date: "2022-02-08T10:09:49.606Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote =async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMGYwYjlkM2I2ZjVlZGNmMGM3ODA1In0sImlhdCI6MTY0NDI5OTczN30._cg_awYV-l-kYbwbAivJaAnhuAWDFOxzvPEDDrxjbJo'
      }
    });
    const json= response.json(); 
    console.log(json);
    console.log("Deleting the note :" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote =async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMGYwYjlkM2I2ZjVlZGNmMGM3ODA1In0sImlhdCI6MTY0NDI5OTczN30._cg_awYV-l-kYbwbAivJaAnhuAWDFOxzvPEDDrxjbJo'
      },
      body: JSON.stringify({title, description, tag}) 
    });
    const json= response.json(); 
    console.log(json);
  
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getAllNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
