import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import DatosPersonales from './DatosPersonales';
import DatosPropiedad from './DatosPropiedad';

const FormularioInmo = () => {
  const [datosPersonales, setDatosPersonales] = useState({});
  const [datosPropiedad, setDatosPropiedad] = useState({});
  const [mensaje, setMensaje] = useState('');

  const handleDatosPersonalesChange = (newData) => {
    setDatosPersonales({ ...datosPersonales, ...newData });
  };

  const handleDatosPropiedadChange = (newData) => {
    setDatosPropiedad({ ...datosPropiedad, ...newData });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos Personales:', datosPersonales);
    console.log('Datos de la Propiedad:', datosPropiedad);
    // Aquí puedes enviar los datos al servidor
    setMensaje('Estaremos informando tan pronto como tengamos una propiedad que coincida con sus criterios.');
  };

  return (
    <Container className="bg-gradient-light text-dark">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mt-5 shadow">
            <Card.Body>
              <h1 className="text-center fw-bold mb-4">Ingrese sus datos</h1>
              <Form onSubmit={handleSubmit}>
                <DatosPersonales onChange={handleDatosPersonalesChange} />
                <p></p>
                <DatosPropiedad onChange={handleDatosPropiedadChange} />
                <div className="d-grid gap-2">
                  <p></p>
                  <Button variant="primary" type="submit">Enviar Solicitud</Button>
                </div>
              </Form>
              {mensaje && <p className="mt-4">{mensaje}</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FormularioInmo;
