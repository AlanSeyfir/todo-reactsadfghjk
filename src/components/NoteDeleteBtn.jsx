import React, { useContext } from 'react';
import { NotesContext } from '../Context/NotesContext';

const NoteDeleteBtn = ({ id }) => {
  let { remove } = useContext(NotesContext);

  return (
    <div>
      <button onClick={(ev) => remove(id)}>Eliminar</button>
    </div>
  );
};

export default NoteDeleteBtn;
