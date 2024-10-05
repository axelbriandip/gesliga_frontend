import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import { useState } from 'react'

// styles
import './styles/reset.css'
import './styles/App.css'

// pages
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import PanelAdmin from './pages/PanelAdmin';
import PanelDelegate from './pages/PanelDelegate';
import PanelGuest from './pages/PanelGuest';

function App() {
  const [user, setUser] = useState(null); // Estado para el usuario logueado

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='/login' element={<Login setUser={setUser}/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/panel-admin' element={<PanelAdmin user={user}/>}/>
            <Route path='/panel-delegate' element={<PanelDelegate user={user}/>}/>
            <Route path='/panel-guest' element={<PanelGuest user={user}/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App; 