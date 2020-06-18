import React from 'react';
import ReactGA from "react-ga";

import {Button, Modal, Row, Col} from 'react-bootstrap';

import argFlag from '../img/arg.png';
import chlFlag from '../img/chl.png';

const ModalComponent = ({buyDigGameBtn, afterStreamingIsLive, show, onHide}) => {
	let linkArg, linkChl;
	const preOrderLinkArg = "https://www.playstation.com/es-ar/games/the-last-of-us-part-ii-ps4/preorder/";
	const preOrderLinkChl = "https://www.playstation.com/es-cl/games/the-last-of-us-part-ii-ps4/preorder/";
	const orderDiscLinkArg = "https://www.playstation.com/es-ar/games/the-last-of-us-part-ii-ps4/selecciona-un-comercio/";
	const orderDiscLinkChl = "https://www.playstation.com/es-cl/games/the-last-of-us-part-ii-ps4/selecciona-un-comercio/";
	const orderDigLinkArg = "https://store.playstation.com/es-ar/product/UP9000-CUSA07820_00-THELASTOFUS2STND";
	const orderDigLinkChl = "https://store.playstation.com/es-cl/product/UP9000-CUSA07820_00-THELASTOFUS2STND";

	if (!!afterStreamingIsLive) {
		linkArg = !!buyDigGameBtn ? orderDigLinkArg : orderDiscLinkArg;
		linkChl = !!buyDigGameBtn ? orderDigLinkChl : orderDiscLinkChl;
	} else {
		linkArg = preOrderLinkArg;
		linkChl = preOrderLinkChl;
	}

	return (
		<Modal show={show} onHide={onHide}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        
				<Modal.Body>
					<p className="bold-text border-bottom-yellow text-center">Pre-ordenar<br />The Last Of Us Part II - La Espera Final</p>

					<Row className="text-center pt-3">
						<Col xs={{span:4, offset:2}}>
						<ReactGA.OutboundLink eventLabel="OrderGameArg" to={linkArg} target="_blank">
							<img src={argFlag} alt="Argentina" />
						</ReactGA.OutboundLink>
													
						</Col>
						<Col xs={4}>
							<ReactGA.OutboundLink eventLabel="OrderGameChl" to={linkChl} target="_blank">
								<img src={chlFlag} alt="Chile" />
							</ReactGA.OutboundLink>
						</Col>
					</Row>
				</Modal.Body>
        
				<Modal.Footer>
					<Button
						onClick={onHide}
						className="btn btn-primary"
					>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
	);
}

export default ModalComponent;