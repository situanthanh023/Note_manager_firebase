import './App.css';
import Nav from './Components/Nav';
import NoteList from './Components/NoteList';
import NoteForm from './Components/NoteForm';

function App() {
  return (
    <div>
      <Nav/>
      <div className="container mt-5">
      <div className="row">
          <NoteList/>
          <NoteForm/>
      </div>
      </div>

    </div>
  );
}

export default App;
