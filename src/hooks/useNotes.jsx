import { useEffect, useState } from 'react';

// const list = [
//   {
//     id: 1,
//     title: 'Hola',
//     message: 'Mundo',
//   },
//   {
//     id: 2,
//     title: 'Dos',
//     message: 'Mundo',
//   },
//   {
//     id: 3,
//     title: 'Panda',
//     message: 'Mundo',
//   },
//   {
//     id: 4,
//     title: 'Noche',
//     message: 'Mundo',
//   },
// ];

const LOCALSTORAGE_KEY = 'MIAPP.list';

function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let localStorageSavedNotes = localStorage.getItem(LOCALSTORAGE_KEY);

    if (localStorageSavedNotes) {
      setNotes(JSON.parse(localStorageSavedNotes));
    }
  }, []);

  useEffect(
    function () {
      // Save list in localStorage
      if (notes && notes.length > 0) {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes));
      }
    },
    [notes]
  );

  function add(title, message) {
    const id = Date.now();

    //* Short hand properties, if the name is the same don't need to use :
    const noteObject = {
      title,
      message,
      id,
    };

    setNotes([noteObject, ...notes]);
  }

  function remove(id) {
    let newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return {
    notes,
    add,
    remove,
  };
}

export default useNotes;
