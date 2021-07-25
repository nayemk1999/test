import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../image/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg';
import img2 from '../../../image/pacific-office-interiors-GDz5SJ3fuAQ-unsplash.jpg';
import img3 from '../../../image/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg';
import img4 from '../../../image/jason-dent-w3eFhqXjkZE-unsplash.jpg';
import img5 from '../../../image/myhq-workspaces-NEFgreoVtig-unsplash.jpg';
import img6 from '../../../image/sean-pollock-PhYq704ffdA-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';



export default function Properties() {
    return (
        <Container className="mt-5">
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <h2 className="text-center mb-5">Best Properties and Buildings</h2>
  <Row>
    <Col xs={12} md={4} sm={12}>
    <div className="card shadow m-0 m-auto">
            <div className="">
              <img style={{ height: '200px' }} className="img-fluid" src={img1} className="card-img-top" alt="" />
            </div>
            <div className="card-body text-center">
              <h5 style={{ height: '45px' }} >Garden With House <span className="sale">sale</span> </h5>
              <span className="bg-success p-1 text-white apartment">APARTMENT/FLATS</span>
              <p className='mt-3'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur, Dhaka</p>
            </div>
    </div>
    </Col>
    <Col xs={12} md={4} sm={12}>
    <div className="card shadow m-0 m-auto">
            <div className="">
              <img style={{ height: '200px' }} className="img-fluid" src={img2} className="card-img-top" alt="" />
            </div>
            <div className="card-body text-center">
              <h5 style={{ height: '45px' }} > Office <span className="sale">sale</span> </h5>
              <span className="bg-success p-1 text-white apartment">Office</span>
              <p className='mt-3'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur, Dhaka</p>
            </div>
    </div>
    </Col>
    <Col xs={12} md={4} sm={12}>
    <div className="card shadow m-0 m-auto">
            <div className="">
              <img style={{ height: '200px' }} className="img-fluid" src={img3} className="card-img-top" alt="" />
            </div>
            <div className="card-body text-center">
              <h5 style={{ height: '45px' }} >Pool With House<span className="sale">sale</span> </h5>
              <span className="bg-success p-1 text-white apartment">APARTMENT/FLATS</span>
              <p className='mt-3'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur, Dhaka</p>
            </div>
    </div>
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row className="mt-5">
    <Col xs={12} md={4} sm={12}>
    <div className="card shadow m-0 m-auto">
            <div className="">
              <img style={{ height: '200px' }} className="img-fluid" src={img4} className="card-img-top" alt="" />
            </div>
            <div className="card-body text-center">
              <h5 style={{ height: '45px' }} > Building Interior <span className="sale">sale</span> </h5>
              <span className="bg-success p-1 text-white apartment">APARTMENT/FLATS</span>
              <p className='mt-3'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur, Dhaka</p>
            </div>
    </div>
    </Col>
    <Col xs={12} md={4} sm={12}>
    <div className="card shadow m-0 m-auto">
            <div className="">
              <img style={{ height: '200px' }} className="img-fluid" src={img5} className="card-img-top" alt="" />
            </div>
            <div className="card-body text-center">
              <h5 style={{ height: '45px' }} >Restaurant <span className="sale">sale</span> </h5>
              <span className="bg-success p-1 text-white apartment">APARTMENT/FLATS</span>
              <p className='mt-3'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur, Dhaka</p>
    </div>
    </div>
    </Col>
    <Col xs={12} md={4} sm={12}>
    <div className="card shadow m-0 m-auto">
            <div className="">
              <img style={{ height: '200px'}} className="img-fluid" src={img6} className="card-img-top" alt="" />
            </div>
            <div className="card-body text-center">
              <h5 style={{ height: '45px' }} > Black House <span className="sale">sale</span> </h5>
              <span className="bg-success p-1 text-white apartment">APARTMENT/FLATS</span>
              <p className='mt-3'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur, Dhaka</p>
            </div>
    </div>
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  
</Container>
    )
}
