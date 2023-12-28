import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RestOp({op}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button variant="dark" style={{color:"white"}} onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Monday : {op?.Monday}</p>
         <p>Tuesday : {op?.Tuesday}</p>
         <p>Wednesday : {op?.Wednesday}</p>
         <p>Thursday : {op?.Thursday}</p>
         <p>Friday : {op?.Friday}</p>
         <p>Saturday : {op?.Saturday}</p>
         <p>Sunday : {op?.Sunday}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
  )
}

export default RestOp