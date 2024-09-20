import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    <div className='container-fluid p-5'>
      <Row>
        <Col className='d-flex flex-column justify-content-center'>
          <h1>MediaPlayer</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ut ducimus, nisi reiciendis pariatur, 
            quisquam nesciunt inventore neque cum ipsa totam rem hic quo deleniti debitis? Dolore architecto explicabo esse.</p>
          <div className='d-grid'>
            <Link className='btn btn-success' to={'/dash'}>Let's Go</Link>
          </div>
        </Col>
        <Col>
        <img src="https://png.pngtree.com/png-clipart/20221018/ourmid/pngtree-youtube-social-media-3d-icon-png-image_6308429.png" 
        className='img-fluid' alt="" />
        </Col>
      </Row>
    </div>

    <div className='container-fluid p-5 '>
        <h4 className='text-center mb-3'>Features</h4>
        <div className='row justify-content-around'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/c7/ea/23/c7ea2382e0c699963f56f71ad0346d33.gif" />
            <Card.Body>
              <Card.Title>Simple Upload</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://miro.medium.com/v2/resize:fit:1400/1*8lcdOkw8uXu3k73Q1rwt6Q.gif" />
            <Card.Body>
              <Card.Title>Watch Videos</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/469998/screenshots/2325648/output_bsrh32.gif" />
            <Card.Body>
              <Card.Title>Categorize</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    </div>

    <div className='container-fluid p-5'>
      <Row>
        <Col md={8} className='d-flex flex-column justify-content-center'>
          <h3>Simple and Faster</h3>
          <p style={{alignItems:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus in voluptatem tempora ab cumque explicabo excepturi 
            temporibus ea expedita eveniet asperiores quam quisquam mollitia nisi soluta, voluptatum a ratione sit ipsa repellat! 
            Exercitationem neque, id debitis iste laboriosam sit possimus?</p>
        </Col>
        <Col>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/8pKjULHzs0s?si=97cyHfejBJpZUDbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Landing