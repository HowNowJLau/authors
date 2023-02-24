import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import AllAuthors from './views/AllAuthors';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div>
      <h1>Favorite authors</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/authors" replace/>}/>
        <Route path="/authors" element={<AllAuthors/>}/>
        <Route path="/authors/new" element={<NewAuthor/>}/>
        <Route path="/authors/:id/edit" element={<EditAuthor/>}/>
      </Routes> 
    </div>
  );
}

export default App;
