import React from 'react'
import Card from 'react-bootstrap/Card';
import  {Link}  from 'react-router-dom';
function RestCard({restaurants}) {
console.log(restaurants)
  return (
    <div>
      <Link to={`view/${restaurants.id}`} style={{color:"black"}}>
      <Card style={{ height:"24rem" }}  className='m-4'>
    <Card.Img variant="top" src={restaurants.photograph} style={{width:"100%",height:"250px"}} />
    <Card.Body>
      <Card.Title>{restaurants.name}</Card.Title>
      <Card.Text style={{fontSize:"11px"}}>
        {restaurants.address} , {restaurants.neighborhood}
      </Card.Text>
    </Card.Body>
  </Card>
      </Link> 
    
    </div>
  )
}

export default RestCard