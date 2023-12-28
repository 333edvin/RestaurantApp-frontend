import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5';
import {MDBContainer,MDBNavbar, MDBNavbarBrand} from 'mdb-react-ui-kit';
function Header() {
  return (
    <>
    <MDBNavbar light bgColor='light'>
      <MDBContainer >
      <MDBNavbarBrand>
       <IoFastFoodOutline />  Restaurant
      </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  </>
  )
}

export default Header