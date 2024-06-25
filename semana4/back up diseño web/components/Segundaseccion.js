import React from 'react';

import wave1 from '../images/wave1.svg';
import wave2 from '../images/wave2.svg';
import app from '../images/app.svg';

const Segundaseccion = () => {
    return (

        <>

            <section class="usuarios">


                <img src={wave1} className="wave-1" alt="" />

                <img src={wave2} className="wave-2" alt="" />


                <div class="usuario-txt container">
                    <a href="#" class="info">Tiempo real</a>
                    <h2>¡Únete a una Comunidad de Éxito!</h2>
                    <p>
                        Más de 100,000 personas ya disfrutan de nuestras clases y servicios en línea. Descubre cómo nuestra comunidad está transformando sus vidas con aprendizaje de alta calidad, asesoramiento personalizado y acceso exclusivo a recursos únicos. ¡No te quedes atrás, sé parte de este cambio hoy mismo!
                    </p>
                    <h3>100,000</h3>
                </div>
            </section>

            <section class="app container">
                <div class="app-1">
                    <img src="images/app.svg" alt="" />
                    <img src={app} alt="" />
                </div>

                <div class="app-2">
                    <a href="#" class="info">Tiempo real</a>
                    <h2>¡Control Total al Alcance de tu Mano con Nuestra Web!</h2>
                    <p>
                        Simplifica tu vida y mantén todo bajo control con nuestra innovadora aplicación. Diseñada para ofrecerte una gestión eficiente y sin complicaciones, nuestra app te permite organizar tus tareas, monitorear tu progreso y alcanzar tus metas con facilidad.
                        </p>
                        <p>

                        ¡Descárgala ahora y experimenta la diferencia!
                    </p>
                    
                    <a href="#" class="btn-1">Informacion</a>
                </div>
            </section>

            <section className="prices-sec">
                <div className="prices container">

                    <div className="price">
                        <h3>Basic</h3>
                        <ul>
                            <li>Acceso a tiempo real</li>
                            <li>Acceso</li>
                            <li>2 Cuentas</li>
                            <li>2 Correos</li>
                        </ul>
                        <p>$50,00</p>
                    </div>

                    <div className="price">
                        <h3>Medium</h3>
                        <ul>
                            <li>Acceso a tiempo real</li>
                            <li>Acceso</li>
                            <li>2 Cuentas</li>
                            <li>2 Correos</li>
                        </ul>
                        <p>$150,00</p>
                    </div>

                    <div className="price">
                        <h3>Pro</h3>
                        <ul>
                            <li>Acceso a tiempo real</li>
                            <li>Acceso</li>
                            <li>2 Cuentas</li>
                            <li>2 Correos</li>
                        </ul>
                        <p>$250,00</p>
                    </div>

                </div>
            </section>





        </>




    );
}

export default Segundaseccion;