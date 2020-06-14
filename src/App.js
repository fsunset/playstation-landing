import React, {useState} from 'react';
import './sass/main.scss';
import {Button, Fade, Container, Row, Col} from 'react-bootstrap';

import bg1 from './img/bg1.jpg';
import ps4Logo from './img/ps4Logo.png';
import tlousLogo from './img/tlousLogo.png';
import naughtyDogLogo from './img/naughtyDogLogo.png';
import parentalControlLogo from './img/parentalControlLogo.png';


const App = () => {
  const emailRegEx = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  const termsLink = "https://www.playstation.com/es-ar/legal/terms-of-use/";

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [checkboxActive, setCheckboxActive] = useState(false);
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);
  const [msgText, setMsgText] = useState("PARA ENTRAR A ESTE EVENTO ES NECESARIO SER MAYOR DE EDAD.");
  const [subTitleText, setSubTitleText] = useState("Regístrate para activar una alerta en tu calendario.");

  // For storing user's name & email
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");


  const onClickCheckBoxHandler = () => {
    setCheckboxActive(!checkboxActive);
    setBtnIsDisabled(!btnIsDisabled);
  }
  
  const enterHandler = () => {
    document.body.style.backgroundImage = `url(${bg1})`;
    setBtnIsDisabled(true);
    setStep(1);
    setMsgText("¡NO TE PIERDAS EL EVENTO DE ESTRENO!");
  }

  const inputValidationHandler = () => {
    if (userName.length > 0 && userEmail.length > 0) {
      setBtnIsDisabled(false);
    } else {
      setBtnIsDisabled(true);
    }
  }

  const registerHandler = () => {
    if (userName.length > 0 && emailRegEx.test(userEmail)) {
      setOpen(false);
      setStep(2);
      setMsgText("¡REGISTRO COMPLETADO!");
      setSubTitleText("Revisa tu correo y no te pierdas este gran evento el próximo 18 de junio.");
      console.log("REGIStER!!");
    } else {
      setOpen(true);
      console.log(emailRegEx.test(userEmail))
    }
  }

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

          <Col xs={12} md={{span: 4, offset:3}} lg={{span: 4, offset:3}} xl={{span: 4, offset:4}} className="right-container mt-5 mt-md-0">
            {/* Header-Section Container */}
            <Row>
              {step === 0 && (
                <p className="bold-text">BIENVENIDO.</p>
              )}
              
              <p className="bold-text border-bottom-yellow">{msgText}</p>

              {step !== 0 && (
                <p>{subTitleText}</p>
              )}
            </Row>
            
            {/* Body-Section Container */}
            <Row className={step !== 1 && ("my-5")}>
              {step === 0 && (
                <>
                  <p className="bold-text yellow-text checkbox-label">SOY MAYOR DE EDAD</p>
                  <label className="checkbox-container">
                    <input type="checkbox" onClick={() => onClickCheckBoxHandler()} />
                    <span className="checkmark"></span>
                  </label>
                </>
              )}

              {step === 1 && (
                <>
                  <Fade in={open}>
                    <p className="custom-alert">Hay un error, por favor verifica los campos.</p>
                  </Fade>
                  <input
                    onBlur={() => inputValidationHandler()}
                    onChange={e => {
                      setUserName(e.target.value);
                      inputValidationHandler();
                    }}
                    type="text"
                    placeholder="NOMBRE"
                    className="input-field mb-3"
                  />
                  <input
                    onBlur={() => inputValidationHandler()}
                    onChange={e => {
                      setUserEmail(e.target.value);
                      inputValidationHandler();
                    }}
                    type="email"
                    placeholder="EMAIL"
                    className="input-field mb-3"
                  />
                  <Button disabled={btnIsDisabled} onClick={() => registerHandler()}>REGISTRARME</Button>
                </>
              )}

              {step === 2 && (
                <div className="trailer-video-container embed-responsive embed-responsive-16by9">
                  <p className="w-100 my-5 text-center">Cargando...</p>
                  <iframe
                    title="trailer-video"
                    className="embed-responsive-item"
                    src="https://www.youtube-nocookie.com/embed/vhII1qlcZ4E?start=1"
                  ></iframe>
                </div>
              )}
            </Row>

            {step === 0 && (
              <>
                <Row>
                  <p>Al enviar esta forma manifiesta su conformidad con la <a href={termsLink} target="_blank" rel="noopener noreferrer">política de confidencialidad.</a></p>
                </Row>

                <Row>
                  <Button disabled={btnIsDisabled} onClick={() => enterHandler()}>ENTRAR</Button>
                </Row>
              </>
            )}

            {/* Bottom-Section Container */}
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
