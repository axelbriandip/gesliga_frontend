import { Routes, Route, BrowserRouter } from 'react-router-dom';

// styles
import './styles/reset.css'
import './styles/App.css'

// pages
import Login from './pages/Login';
import Home from './pages/Home';
import PanelAdmin from './pages/PanelAdmin';
// import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Nav/> */}
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/panel-admin' element={<PanelAdmin/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App; 