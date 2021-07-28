import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <Container >
            <Row>
                <Col sm={12} md={6} lg={6} className="text-center">
                    <h3 className={styles.title} >About Us</h3>
                    <p className={styles.aboutText}>Toprak is a multipurpose real estate web app where buyers as well as the property owners can make a perfect deal! Bringing out the best deal and customer satisfaction is our first choice.</p>
                    <p className={styles.aboutText}>Toprak offers customers an on-demand experience for selling, buying, renting and financing with transparency and nearly seamless end-to-end service. Toprak Offers buys and sells homes directly in dozens of markets across the world, allowing sellers control over their timeline. Toprak Home Loans, our affiliate lender, provides our customers with an easy option to get pre-approved and secure financing for their next home purchase. </p>
                    <button className={styles.button}>Our Details</button>
                </Col>
                <Col sm={12} md={6} lg={6} >
                    <div className={styles.houses}>
                        <div className={styles.houseArea1} >
                            <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg" alt="" className={styles.houseImg} />
                        </div>
                        <div className={styles.houseArea2}>
                            <img src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg" className={styles.houseImg} alt="" />
                        </div>
                        <div className={styles.houseArea3}>
                            <img src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876_960_720.jpg" alt="" className={styles.houseImg} />
                        </div>
                        <div className={styles.houseArea4}>
                            <img src="https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className={styles.houseImg} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;