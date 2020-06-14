import React from 'react';
import './sass/main.scss';
import {Button, Container, Row, Col} from 'react-bootstrap';

import ps4Logo from './img/ps4Logo.png';
import tlousLogo from './img/tlousLogo.png';
import naughtyDogLogo from './img/naughtyDogLogo.png';
import parentalControlLogo from './img/parentalControlLogo.png';


function App() {
  return (
    <div className="App main-container">
      <Container fluid className="pl-0 pr-0 main-child">
        <header>
          <Col xs={12} sm={7} lg={5} xl={4}>
            <img src={ps4Logo} alt="PS4 Logo" className="main-logo"/>
          </Col>
        </header>

        <Container>
          <Row>
          <Col xs={6} sm={4} md={{span: 3, offset: 1}} lg={{span: 3, offset: 1}} xl={{span: 2, offset: 1}}  className="left-container">
            <img src={tlousLogo} alt="The Last Of Us II" />
            <Row>
              <p className="bold-text">LA ESPERA FINAL</p>
            </Row>
          </Col>

          <Col xs={12} md={{span: 4, offset:3}} lg={{span: 3, offset:4}} xl={{span: 3, offset:5}} className="right-container mt-5 mt-md-0">
            <Row>
              <p className="bold-text">BIENVENIDO.</p>
              <p className="bold-text border-bottom-yellow">PARA ENTRAR A ESTE EVENTO ES NECESARIO SER MAYOR DE EDAD.</p>
            </Row>
            
            <Row className="my-5">
              <p className="bold-text yellow-text checkbox-label">SOY MAYOR DE EDAD</p>
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </Row>

            <Row>
              <p>Al enviar esta forma manifiesta su conformidad con la política de confidencialidad.</p>
            </Row>

            <Row>
              <Button>ENTRAR</Button>
            </Row>

            <Row className="mt-5">
              <Col xs={6} className="pl-sm-0 my-auto">
                <img src={naughtyDogLogo} alt="Naughty Dog Logo" className="w-100" />
              </Col>
              <Col xs={6} className="pr-sm-0 my-auto">
                <img src={parentalControlLogo} alt="Rated Mature 17+" className="w-100" />
              </Col>
            </Row>
          </Col>
        </Row>
        </Container>
      </Container>

      <footer className="text-center mt-5 mb-2 px-3">
        <p className="small-text">
          “PlayStation”, “PlayStation Family Mark, “PS4 logo”, “PS4”and “DUALSHOCK” are registered trademarks or trademarks of Sony Interactive Entertainment Inc. “SONY” is a registered trademark of Sony Corporation.
        </p>
      </footer>
    </div>
  );
}

export default App;
