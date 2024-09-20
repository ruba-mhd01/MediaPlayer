import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
       <Navbar style={{backgroundColor:'black', opacity:'.5px'}}>
        <Container className=''>
          <Navbar.Brand href="#home" style={{color: "white",}}>
          <i className="fa-brands fa-square-youtube fa-beat-fade fa-2xl "  style={{color: "#74C0FC",}} />
            {' '}
           Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header