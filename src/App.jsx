import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';

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
import Users from './pages/Users';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/panel-admin' element={<PanelAdmin/>}/>
            <Route path='/panel-delegate' element={<PanelDelegate/>}/>
            <Route path='/panel-guest' element={<PanelGuest/>}/>
            <Route path='/users' element={<Users/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App; 