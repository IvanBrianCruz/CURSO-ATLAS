import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white p-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Recursos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white" target="_blank" rel="noopener noreferrer">Documentación de Java</a></li>
              <li><a href="#" className="text-white" target="_blank" rel="noopener noreferrer">Documentación de HTML</a></li>
              <li><a href="#" className="text-white" target="_blank" rel="noopener noreferrer">Documentación de MYSQL</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>Este sitio fue creado como una introducción al mundo del desarrollo web, proporcionando recursos para principiantes.</p>
          </Col>
          <Col md={4}>
            <h5>Contáctanos</h5>
            <p>Email: ivan4912134@gmail.com</p>
            <p>Tel: +54 9 388 4211576</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2025 Desarrollado por Ivan Brian Cruz. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
