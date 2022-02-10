import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6202416db369ff1c945586fd",
      user: "6200f0b9d3b6f5edcf0c7805",
      title: "My new note",
      description: "Please access the playlist",
      tag: "youtube",
      date: "2022-02-08T10:09:49.606Z",
      __v: 0,
    },
    {
      _id: "62024dcd3d9f6d2f4b23a1e9",
      user: "6200f0b9d3b6f5edcf0c7805",
      title: "My special note",
      description: "Please access the note",
      tag: "Special",
      date: "2022-02-08T11:02:37.676Z",
      __v: 0,
    },
    {
      _id: "62024dcd3d9f6d2f4b23a1e7",
      user: "6200f0b9d3b6f5edcf0c7805",
      title: "My engineering note",
      description: "For engineering purpose",
      tag: "Personal",
      date: "2022-02-08T11:02:37.676Z",
      __v: 0,
    },
    {
      _id: "62024dcd3d9f6d2f4b23a1e2",
      user: "6200f0b9d3b6f5edcf0c7805",
      title: "My chemistry note",
      description: "Please access the note",
      tag: "Chemistry",
      date: "2022-02-08T11:02:37.676Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = (title, description, tag) => {
    //TODO: Api Call
    console.log("Adding a New Note");
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
  const deleteNote = (id) => {
    //TODO: Api Call
    console.log("Deleting the note :" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
