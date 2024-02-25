import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/home';
import about from './pages/about'
import contactus from './pages/contactus'
import team from './pages/team'
import About from './pages/about';
import Contactus from './pages/contactus';
import Team from './pages/team';
import Price from './pages/price';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route index element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contactus' element={<Contactus />} />
    <Route path='/price' element={<Price />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
