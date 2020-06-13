import React from 'react';
import './sass/main.scss';
import { Container, Row, Col } from 'react-bootstrap';

import ps4Logo from './img/ps4Logo.png';


function App() {
  return (
    <div className="App main-container">
      <Container fluid className="pl-0 pr-0">
        <Row>
          <Col xs={12} sm={6} lg={5} xl={3}>
            <img src={ps4Logo} alt="PS4 Logo" className="main-logo"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
