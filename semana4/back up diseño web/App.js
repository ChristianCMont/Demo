import estilos from './estilos.css';
import Style from './Style.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Main from './components/Main';
import Segundaseccion from './components/Segundaseccion';
import Footer from './components/Footer';






const App = () => {
  return (

    <div className={estilos.container}>





      <div>

        <Header />
        <Main />
        <Segundaseccion />
        <Footer />



        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        
      </div>

    </div>


  );
}




export default App;
