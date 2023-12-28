import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
function RestReview({review}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
       <Button variant="light" className='border' onClick={handleShow}>
        Reviews
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='px-4 '>
          {
            review?.map(rev=>(
                <>
                <div className='d-flex gap-2'>

                <h5>{rev.name}</h5>
                <p> {rev.rating} ⭐</p>
                </div>
                <p style={{fontSize:"10px"}}>{rev.date}</p>
                <p style={{fontSize:"15px"}}>{rev.comments}</p>
                <hr />
                </>
            ))
          }
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default RestReview