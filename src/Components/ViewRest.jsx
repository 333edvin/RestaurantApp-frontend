import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';

function ViewRest() {

  const [restDetails,setRestDetails] = useState({})
  //useParams - used to get path parameter from the url
  // const paraId = useParams()
  // console.log(paraId.id)

  //destructure
  const {id} = useParams()


  //API call to get details of the particular reastaurant using the path parameter
  const base_url = "https://restaurant-backend-wa96.onrender.com/restaurants"

  const fetchRest = async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result)
    setRestDetails(result.data)
  }

  useEffect(()=>{
    fetchRest()
  },[])
  return (
    <div className='mt-5'>
      <Row className='m-0'>
        <Col className='d-flex justify-content-center' sm={12} md={6} lg={4} xl={3} >
        <Image src={restDetails.photograph} className='img-fluid my-4 rounded-3' style={{height:"450px"}}/>
        </Col>
        <Col className='my-5' sm={12} md={6} lg={8} xl={9}>
        <ListGroup>
          <h1 className='text-center'>{restDetails.name}</h1>
      {/* <ListGroup.Item></ListGroup.Item> */}
      <ListGroup.Item>{restDetails.address} , {restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item>{restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item> <RestOp op={restDetails.operating_hours}/> </ListGroup.Item>
      <ListGroup.Item> <RestReview review={restDetails.reviews}/> </ListGroup.Item>
    </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest