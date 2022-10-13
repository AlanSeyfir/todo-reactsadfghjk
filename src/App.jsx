import './App.css';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import { NotesProvider } from './Context/NotesContext';

function App() {
  return (
    <div className="App">
      {/* <NotesProvider>
      </NotesProvider> */}
      <NotesForm />
      <NotesList />
    </div>
  );
}

export default App;
