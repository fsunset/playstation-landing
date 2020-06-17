import React from 'react';

import {Button, Modal, Row, Col} from 'react-bootstrap';

import argFlag from '../img/arg.png';
import chlFlag from '../img/chl.png';

const ModalComponent = ({show, onHide}) => {
	const preOrderLinkArg = "https://www.playstation.com/es-ar/games/the-last-of-us-part-ii-ps4/preorder/";
	const preOrderLinkChl = "https://www.playstation.com/es-cl/games/the-last-of-us-part-ii-ps4/preorder/";

	return (
		<Modal show={show} onHide={onHide}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        
				<Modal.Body>
					<p className="bold-text border-bottom-yellow">Pre-ordenar The Last Of Us II - La Espera Final</p>

					<Row className="text-center">
						<Col xs={{span:4, offset:2}}>
							<a
								href={preOrderLinkArg}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={argFlag} alt="Argentina" />
							</a>
						</Col>
						<Col xs={4}>
							<a
								href={preOrderLinkChl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={chlFlag} alt="Chile" />
							</a>
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