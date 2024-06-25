
import React from 'react';



import bg from '../images/bg.png';
import menu from '../images/menu.png';
import lap from '../images/lap.gif';

const Header = () => {
  return (

    <header class="header">

      <img src={bg} className="bg" alt="" />

      <div className="menu container">


        <a href="#" class="logo">App</a>
        <input type="checkbox" id='menu' />
        <label for='menu'><img src={menu} className="menu-icono" alt="" /></label>

        <nav className="navbar">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Precios</a></li>
            <li><a href="#">Contacto</a></li>

         

          </ul>
        </nav>

      


      </div>

      <div class="header-content container">

        <div class="header-txt" >
          <h1><span>¡Inscríbete ya</span> y sera tu camino al éxito!
          </h1>
          <p>
            Descubre una nueva forma de aprender con nuestros cursos interactivos en vivo. Disfruta de una experiencia educativa única desde la comodidad de tu hogar. ¡No te pierdas esta oportunidad de crecer y desarrollar nuevas habilidades con la guía de expertos en tiempo real!
      
          </p>
          <a href="#" class="btn-1">Infomacion</a>
        </div>

        <div class="header-img">
          <img src={lap} className="lap" alt="" />
        </div>
      </div>
    </header>

  );
}

export default Header;
