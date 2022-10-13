import React from 'react';
import NoteDeleteBtn from './NoteDeleteBtn';

const Note = ({ title, message, id }) => {
  return (
    <section className="note">
      <h2>{title}</h2>
      <p>{message}</p>
      <NoteDeleteBtn id={id} />
    </section>
  );
};

export default Note;
