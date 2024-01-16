import React from "react";
import '../styles/home.css';

import{ Container, Row,Col} from 'reactstrap';
import heroimg1 from '../assets/images/hero-img1.jpg'
import heroimg2 from '../assets/images/hero-img2.jpg'
import heroimg3 from '../assets/images/hero-img3.jpg'
import Salon from '../assets/images/Salon.jpg'
import Subtitle from './../shared/Subtitle';

const Home = () => {
    return <>

{/*====================hero section ===================== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="her_subtitle d-flex align-items-center">
                <Subtitle subtitle={'Learn More'}/>
                <img src={Salon} alt="" />
              </div>
              <h1>Hiyara Beauty, Where Miracle of Glamour Cast a Spell on Reality</h1>
              <span className="highlight">memories</span>
              <h1>
                <p>
                  kkhdhdd hshbdhajbdak jscankcjac jsacaknjkacan
                </p>
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*====================hero section ===================== */}
    </>

};

export default Home; 