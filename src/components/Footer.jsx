import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-dark p-3'>
    <Row>
      <Col>
        <h3 className='mb-3'>Media Player</h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus eaque, quod nihil numquam nesciunt veritatis
           consectetur id ullam nemo, vitae harum sed voluptates dolorem deserunt quae deleniti hic est voluptate laboriosam 
           suscipit quidem! Eius in rerum quaerat magnam, cum vitae ut sint praesentium libero voluptatem quas, error saepe vero
            perspiciatis. Animi, atque tenetur enim odit officia reprehenderit! Dolorem nobis itaque vel. Laboriosam officiis dolores 
            magnam modi hic voluptatem nostrum consequuntur vero perspiciatis, laudantium voluptatum impedit omnis, dicta optio laborum
             eum expedita amet delectus corrupti. Mollitia fugit vero deleniti repudiandae dignissimos velit voluptatem, odit, doloribus
              iusto expedita, provident laudantium placeat?</p>
      </Col>
      <Col className='ms-5'>
       <h3 className='mb-3'>Links</h3>
       <div className='d-flex flex-column '>
       <Link style={{textDecoration:"none"}}>Landing</Link>
       <Link style={{textDecoration:"none"}}>Dashboard</Link>
       <Link style={{textDecoration:"none"}}>Watch History</Link>
       </div>
      </Col>
      <Col>
       <h3 className='mb-3'>Contact Us</h3>
       <p>mediaplayer2024@gmail.com</p>
       <textarea name="" className='form-control my-4' id=""></textarea>
       <button className='btn btn-secondary'>Send</button>
      </Col>
     </Row>
    </div>
    </>
  )
}

export default Footer