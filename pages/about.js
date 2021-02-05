import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
    return (        
      <div className="about_Container">
        <Header/>
        <main className="about_Main">
          <article className="about_Article">   
              <div className="ticker_Container_mob" hidden>
                <p>
                  <span className="times">FREE SHIPPING -&nbsp;</span>
                  <span>FREE SHIPPING -&nbsp;</span>
                  <span className="times">FREE SHIPPING -&nbsp;</span>
                  <span>FREE SHIPPING -&nbsp;</span>
                  <span className="times">FREE SHIPPING -&nbsp;</span>
                  <span>FREE SHIPPING -&nbsp;</span>
                  <span className="times">FREE SHIPPING -&nbsp;</span>
                  <span>FREE SHIPPING -&nbsp;</span>
                  <span className="times">FREE SHIPPING -&nbsp;</span>
                  <span>FREE SHIPPING -&nbsp;</span>
                  <span className="times">FREE SHIPPING -&nbsp;</span>
                  <span>FREE SHIPPING -&nbsp;</span>                      
                </p>
              </div>
              <div className="wine_FixedContainer_mob" hidden>
                <Row>
                  <Col xs={6} xs={6} md={6}><img src="/assets/images/final-home.jpg" alt="Picture of the sparkling wine" /></Col>
                  <Col xs={6} xs={6} md={6}><p>60%<br/>Chardonnay<br/>40%<br/>Pinot Noir,<br/>matured<br/>12 months</p></Col>
                </Row>                                  
              </div> 
              <p>Allow us to introduce ourselves. <br/>Prazer! <span>{"{Portuguese for: it’s nice to meet you}"}.</span> We are D.M. a new sparkling wine brand from Brazil, with our grapes grown in the Valley of the Vineyard in Southern Brazil. <span>An entirely new class of sparkling wine.</span> Try us and see what we mean.</p>
              <div className="shopbtn_Container">
                <button type="button" className="shop_Button">Shop</button>
                <div className="ticker_Container_lg">
                    <p>
                      <span className="times">FREE SHIPPING -&nbsp;</span>
                      <span>FREE SHIPPING -&nbsp;</span>
                      <span className="times">FREE SHIPPING -&nbsp;</span>
                      <span>FREE SHIPPING -&nbsp;</span>
                      <span className="times">FREE SHIPPING -&nbsp;</span>
                      <span>FREE SHIPPING -&nbsp;</span>
                      <span className="times">FREE SHIPPING -&nbsp;</span>
                      <span>FREE SHIPPING -&nbsp;</span>
                      <span className="times">FREE SHIPPING -&nbsp;</span>
                      <span>FREE SHIPPING -&nbsp;</span>
                      <span className="times">FREE SHIPPING -&nbsp;</span>
                      <span>FREE SHIPPING -&nbsp;</span>                      
                    </p>
                </div>
                <div className="wine_FixedContainer_lg">
                    <img src="/assets/images/final-home.jpg" alt="Picture of the sparkling wine" />
                    <p>60%<br/>Chardonnay<br/>40%<br/>Pinot Noir,<br/>matured<br/>12 months</p>
                </div>
              </div>
              <p>Made in the traditional champagne method with a Brazilian touch, D.M. is sparkling wine that is uniquely flexible and versatile. <span>You can drink</span> D.M. <span>however you like, whenever you like.</span> Each sip brings the beauty, culture, and expression that is the best of old and new world winemaking. <span>It’s what makes us unmistakably Brazilian.</span></p>
          </article> 
        </main>        
        <Footer/>
      </div>
    );
  }
  
  export default About;