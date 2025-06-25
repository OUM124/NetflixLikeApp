import Home from './Pages/HomePage'
import './Css/App.css'
import { Routes, Route } from 'react-router-dom';
import Favorite from './Pages/favorites';
import NavBar from './Components/NavBar';

// This is a component which returns a jsx code. 
function App() {
  return (

    <div>
  <NavBar />
    
  <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Favorites' element={<Favorite />} />
    </Routes>
  </main>
  </div>
  );
}

export default App;
