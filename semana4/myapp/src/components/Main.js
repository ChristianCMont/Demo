import React from 'react';

import uno from '../images/uno.svg';
import dos from '../images/dos.svg';
import tres from '../images/tres.svg';
import woman from '../images/woman.png';


const Main = () => {
  return (




    <main class="services container">

      <a href="#" class="info">Tiempo real</a>
      <h2>Nuestros Servicios</h2>

      <div class="services-content">
        <div class="services-txt">

          <div class="services-card">
            <img src={uno} className="uno" alt="" />
            <div class="card-txt">
              <h3>Clases Interactivas en Vivo</h3>
              <p>
                Conéctate con expertos en tiempo real y mejora tus habilidades desde casa.
              </p>
              <a href="#">Información</a>
            </div>
          </div>

          <div class="services-card">
            <img src={dos} alt="" />
            <div class="card-txt">
              <h3>Asesoramiento Personalizado</h3>
              <p>
                Recibe orientación individualizada para alcanzar tus objetivos académicos y profesionales.
              </p>
              <a href="#">Información</a>
            </div>
          </div>

          <div class="services-card">
            <img src={tres} alt="" />
            <div class="card-txt">
              <h3>               Acceso a Material Exclusivo</h3>
              <p>
                Disfruta de recursos de aprendizaje únicos y actualizados para maximizar tu conocimiento.
              </p>
              <a href="#">Información</a>
            </div>
          </div>
        </div>

        <div class="services-img">
          <img src={woman} alt="" />
        </div>
      </div>




     


    </main>



  );
}

export default Main;
