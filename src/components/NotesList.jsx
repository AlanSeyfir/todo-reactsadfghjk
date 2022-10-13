import React, { useContext } from 'react';
import { NotesContext } from '../Context/NotesContext';
import Note from './Note';

// ! Cannot destructure property 'notes' of 'useContext(...)' as it is undefined.

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  console.log(NotesContext);

  return (
    <>
      <p style={{ fontStyle: 'italic' }}>
        Tienes {notes.length} notas guardadas
      </p>

      {/* //* BASIC WAY TO SEE MY NOTE */}
      {/* <Note key={list[0].id} title={list[0].title} message={list[0].message} /> */}

      {/* //*NEED TO ADD RETURN WITH { } */}
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            message={note.message}
          />
        );
      })}

      {/* {notes.map((note) => (
        <Note key={note.id} title={note.title} message={note.message} />
      ))} */}
    </>
  );
};

export default NotesList;
