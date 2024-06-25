import React from 'react';
import { Route, Link, useMatch, useResolvedPath, Routes } from 'react-router-dom';
import bg from '../images/bg.png';
import lap from '../images/lap.gif';

const About = () => {
  let resolvedPath = useResolvedPath("");
  let match = useMatch({ path: resolvedPath.pathname, end: false });

  return (

    <>

      <header class="header">

        <img src={bg} className="bg" alt="" />

        <div class="header-content container">

          <div class="header-txt" >
            <h1><span>Abaut</span> sobre nosotros
            </h1>
            <p>
              Descubre una nueva forma de aprender con nuestros cursos interactivos en vivo. Disfruta de una experiencia educativa única desde la comodidad de tu hogar. ¡No te pierdas esta oportunidad de crecer y desarrollar nuevas habilidades con la guía de expertos en tiempo real!

            </p>

            <Link to="/" className="btn-1">Inicio</Link>

          </div>

          <div class="header-img">
            <img src={lap} className="lap" alt="" />
          </div>


          <div class="header-txt">
        <h1>About Page</h1>
        <ul>
          <li><Link to={`${match.url}/team`}>Our Team</Link></li>
          <li><Link to={`${match.url}/history`}>Our History</Link></li>
        </ul>
        <Routes>
          <Route path={`${match.path}/team`} element={<Team />} />
          <Route path={`${match.path}/history`} element={<History />} />
        </Routes>
      </div>



        </div>
      </header>

      

    </>
  );
}


const Team = () => <div><h2>Team Page</h2></div>;
const History = () => <div><h2>History Page</h2></div>;

export default About;
