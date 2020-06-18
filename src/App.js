import React, {useState} from 'react';
import './sass/main.scss';
import {Button, Fade, Container, Row, Col} from 'react-bootstrap';
import moment from 'moment';


import bg from './img/bg.jpg';
// import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg';
import bg3 from './img/bg3.jpg';
import bgMobilePortrait from './img/bgMobilePortrait.jpg';
import bgMobilePortrait1 from './img/bgMobilePortrait1.jpg';
import psLogo from './img/psLogo.png';
import ps4Logo from './img/ps4Logo.png';
import tlousLogo from './img/tlousLogo.png';
import spotifyImg from './img/spotify.png'
import whatsAppImg from './img/whatsApp.png'
import facebookImg from './img/facebook.png'
import twitterImg from './img/twitter.png'
import naughtyDogLogo from './img/naughtyDogLogo.png';
import parentalControlLogo from './img/parentalControlLogo.png';
import gamePreOrder from './img/gamePreOrder.png'
import gameOrder from './img/gameOrder.png'
import gameOrderDigital from './img/gameOrderDigital.png'

import sendEmail from './sendEmail';
import ModalComponent from './components/ModalComponent'
import DateCountdown from 'react-date-countdown-timer';
// import CountDownComponent from './components/CountDownComponent';
import VideoComponent from './components/VideoComponent';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import Firebase from './firebaseConfig';

// Show/Hide "Age Comprobation"
let beforeStreamingIsLive;
let currentlyStreaming;
let afterStreamingIsLive;
let streamingEnd = moment("2020-06-18T22:00:00");
let streamingDate = moment("2020-06-18T21:00:00");
let eventDate = moment("2020-06-18T20:00:00");
let now = moment();

if (now < eventDate) {
  beforeStreamingIsLive = false;
  // Set new BG for body
  // document.body.style.backgroundImage = `url(${bg1})`;
} else {
  // Set new BG for body
  document.body.style.backgroundImage = `url(${bg})`;
  beforeStreamingIsLive = true;
}

if (now === streamingDate || now > streamingDate) {
  currentlyStreaming = true;
} else {
  currentlyStreaming = false;
}

if (now === streamingEnd || now > streamingEnd) {
  afterStreamingIsLive = true;
} else {
  afterStreamingIsLive = false;
}

// eslint-disable-next-line
// let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)userCurrentCounry\s*\=\s*([^;]*).*$)|^.*$/, "$1");
// let currentUserCountry = cookieValue.replace(/['"]+/g, '').toLowerCase();
// if (currentUserCountry === "arg") {
//   currentUserCountry = "ar"
// } else if (currentUserCountry === "chl") {
//   currentUserCountry = "cl"
// }
// let preOrderLink = "https://www.playstation.com/es-" + currentUserCountry + "/games/the-last-of-us-part-ii-ps4/preorder/";

const App = () => {
  // Basic constants
  const emailRegEx = /^[a-zA-Z0-9][-\._a-zA-Z0-9]*@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  const termsLink = "https://www.playstation.com/es-ar/legal/terms-of-use/";
  const msgSocialShare = "¡Hola! Revisa este enlace y no te pierdas este gran evento el próximo 18 de junio.";

  // For saving info Firebase
  const db = Firebase.firestore();

  // Hooks
  const [modalShow, setModalShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [checkboxActive, setCheckboxActive] = useState(false);
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);
  const [msgText, setMsgText] = useState("");
  const [subTitleText, setSubTitleText] = useState("Regístrate para activar una alerta en tu calendario.");

  // CountDown Watch
  const CountDownComponent = () => {
    return (
			<DateCountdown
        dateTo='June 18, 2020 22:00:00 GMT-05:00'
				locales={[]}
				locales_plural={[]}
				mostSignificantFigure="hour"
        numberOfFigures={3}
				callback={
          () => {
            // window.location.reload();
          }
        }
			/>
    )
  }

  // For storing user's name & email
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const onClickCheckBoxHandler = () => {
    setCheckboxActive(!checkboxActive);
    setBtnIsDisabled(!btnIsDisabled);
  }
  
  const enterHandler = () => {
    beforeStreamingIsLive = true;
    // Set new BG for body
    document.body.style.backgroundImage = `url(${bg2})`;
    setBtnIsDisabled(true);
    setMsgText("TRANSMISIÓN OFICIAL");
    setSubTitleText("");
    setStep(3);
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
      console.log("aaaas");
      document.body.style.backgroundImage = `url(${bg3})`;

      setOpen(false);
      setStep(2);
      setMsgText("¡REGISTRO COMPLETADO!");
      setSubTitleText("Revisa tu correo y no te pierdas este gran evento el próximo 18 de junio.");
      
      // Saving info Firebase DB
      db.collection("users").add({
        name: userName,
        email: userEmail,
      });

      sendEmail(userEmail);
    } else {
      setOpen(true);
    }
  }

  // Show/Hide videoBG, depending viewport-width
  const viewportWidth = window.innerWidth;
  const widerViewPort = viewportWidth > window.innerHeight;
  if (viewportWidth < 1024) {
    if (!!widerViewPort) {
      document.body.style.backgroundImage = `url(${bg})`;
    } else {
      document.body.style.backgroundImage = `url(${bgMobilePortrait})`;
    }
  }

  if (step === 2 && !widerViewPort) {
    document.body.style.backgroundImage = `url(${bgMobilePortrait1})`;
  } else if (step === 2 && !!widerViewPort) {
    document.body.style.backgroundImage = `url(${bg3})`;
  }

  return (
    <div className="App main-container">
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* Setting video BG for Step 1. Only on 769px plus */}
      {(step === 0 && !beforeStreamingIsLive && viewportWidth >= 1024) && (
        <Fade in={true}>
          <VideoComponent />
        </Fade>
      )}

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

            {step === 3 && (
              <div className="bottom-container">
                {!!afterStreamingIsLive ? (
                  <>
                    <Button
                      // href={preOrderLink}
                      // target="_blank"
                      // rel="noopener noreferrer"
                      className="btn btn-primary"
                      onClick={() => setModalShow(true)}
                    >
                      COMPRAR DISCO
                    </Button>
                    <Button
                      // href={preOrderLink}
                      // target="_blank"
                      // rel="noopener noreferrer"
                      className="btn btn-primary buy-game-dig"
                      onClick={() => setModalShow(true)}
                    >
                      COMPRAR JUEGO DIGITAL
                    </Button>

                    <span className="tex-bold game-title">EDICIÓN ESTÁNDAR</span>
                    <img src={gameOrder} alt="Order TLOUS II" className="order-game-cover" />
                    <img src={gameOrderDigital} alt="Order Digital TLOUS II" className="order-game-cover digital" />
                  </>
                ) : (
                  <>
                    <Button
                      // href={preOrderLink}
                      // target="_blank"
                      // rel="noopener noreferrer"
                      className="btn btn-primary"
                      onClick={() => setModalShow(true)}
                    >
                      ¡PRE-ORDENAR!
                    </Button>

                    <img src={gamePreOrder} alt="Pre Order TLOUS II" className="game-cover" />
                  </>
                )}
                
                <img src={psLogo} alt="Play Station" className="ps-logo" />
              </div>
            )}
          </Col>

          <Col xs={12} md={{span: 4, offset:3}} lg={{span: 4, offset:3}} xl={{span: 4, offset:4}} className="right-container mt-5 mt-md-0">
            {/* Header-Section Container */}
            {(step === 3 && (!!currentlyStreaming || !!afterStreamingIsLive)) && (
              <Row className="watch-container text-right">
              <Col xs={12}>
                <p className="bold-text mb-0 header">FALTAN</p>
              </Col>
              <Col xs={12} className="my-1 nums-container">
                <Row className="mr-0">
                  <CountDownComponent />

                  <Col xs={{span: 2, offset:6}} className="num px-0 first">
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0 bottom-text pt-1">HORAS</p>
                  </Col>
                  <Col xs={2} className="num px-0 middle">
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0 bottom-text pt-1">MINS</p>

                  </Col>
                  <Col xs={2} className="num px-0 last">
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0 bottom-text pt-1">SEGS</p>

                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <p className="bold-text mb-0">PARA EL ESTRENO</p>
              </Col>
            </Row>
            )}

            <Row>
              {(!!beforeStreamingIsLive && step === 0) && (
                <>
                  <p className="bold-text">BIENVENIDO.</p>
                  <p className="bold-text border-bottom-yellow">PARA ENTRAR A ESTE EVENTO ES NECESARIO SER MAYOR DE 17 AÑOS.</p>
                </>
              )}
              {((step === 2 || step === 3) && (!!currentlyStreaming || !afterStreamingIsLive)) && (
                <p className="bold-text border-bottom-yellow">{msgText}</p>
              )}
              {(!beforeStreamingIsLive && step !== 2) && (
                <p className="bold-text border-bottom-yellow">¡NO TE PIERDAS EL EVENTO DE ESTRENO!</p>
              )}

              <p>{subTitleText}</p>
            </Row>
            
            {/* Body-Section Container */}
            <Row className={step !== 1 && ("my-5")}>
              {(!!beforeStreamingIsLive && step === 0) && (
                <>
                  <p className="bold-text yellow-text checkbox-label">SOY MAYOR DE 17 AÑOS</p>
                  <label className="checkbox-container">
                    <input type="checkbox" onClick={() => onClickCheckBoxHandler()} />
                    <span className="checkmark"></span>
                  </label>
                </>
              )}

              {(step === 0 && !beforeStreamingIsLive) && (
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

              {(step === 2 || step === 3) && (
                <div className="trailer-video-container embed-responsive embed-responsive-16by9">
                  <p className="w-100 my-5 text-center">Cargando...</p>
                  <iframe
                    title="trailer-video"
                    className="embed-responsive-item"
                    src="https://www.youtube-nocookie.com/embed/ek-iAALNeRo"
                  ></iframe>
                </div>
              )}

              {step === 3 && (
                <Row className="share-container">
                  <Col xs={6}>
                    <a href="https://open.spotify.com/playlist/2jrFMHRaVdaoFzhaMvw6gH" target="_blank" rel="noopener noreferrer">
                      <img src={spotifyImg} alt="Spotify" className="w-100 my-3" />
                    </a>
                  </Col>
                  <Col xs={6} className="mt-3 text-right">
                    <span>Compartir</span>
                    <WhatsappShareButton url={window.location.href} title={msgSocialShare} >
                        <img src={whatsAppImg} alt="WhatsApp Img" className="share-icon" />
                    </WhatsappShareButton>

                    <TwitterShareButton url={window.location.href} title={msgSocialShare} >
                        <img src={twitterImg} alt="Twitter Img" className="share-icon" />
                    </TwitterShareButton>

                    <FacebookShareButton url={window.location.href} quote={msgSocialShare} >
                        <img src={facebookImg} alt="Facebook Img" className="share-icon" />
                    </FacebookShareButton>
                  </Col>
                </Row>
              )}
            </Row>

            {(!!beforeStreamingIsLive && step === 0) && (
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
              <Col xs={6} lg={{span:4, offset:4}} className="pl-sm-0 my-auto text-right">
                <img src={naughtyDogLogo} alt="Naughty Dog Logo" className="w-100" />
              </Col>
              <Col xs={6} lg={4} className="pr-sm-0 my-auto text-right">
                <img src={parentalControlLogo} alt="Rated Mature 17+" className="w-100" />
              </Col>
            </Row>
          </Col>
        </Row>
        </Container>
      </Container>

      <footer className="text-center mt-5 mb-2 px-3">
        <p className="small-text">
        Para entrar a este evento es necesario que seas mayor de 17 años. El evento digital se llevará a cabo el 18 de junio de 2020, desde las 23:00 hrs hasta las 00:20 hrs Argentina y 22:00 hrs hasta las 23:20 hrs Chile.
        </p>
        <p className="small-text">
          &copy; 2020 Sony Interactive Entertainment LLC. Creado y desarrollado por Naughty Dog LLC. The Last of Us es una marca comercial de Sony Interactive Entertainment LLC. Naughty Dog es una marca comercial registrada o marca comercial de Naughty Dog LLC. <strong>La marca de la familia PlayStation,PlayStation</strong> y el logo de <strong>PS4</strong> son marcas comerciales registradas o marcas comerciales de Sony Interactive Entertainment Inc.
        </p>
      </footer>
    </div>
  );
}

export default App;
