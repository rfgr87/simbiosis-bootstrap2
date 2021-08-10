import React from 'react';
import {Link} from 'react-router-dom';
import classNames from "classnames";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";
// import image1 from 'assets/img/decolonial-fotos/foto-releases.jpg';
// import image4 from 'assets/img/decolonial-fotos/foto-aurora.jpg';
// import image5 from 'assets/img/decolonial-fotos/foto-aurora.jpg';
// import image6 from 'assets/img/decolonial-fotos/foto-bio.jpg';
import ReactPlayer from "react-player";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
import { makeStyles } from "@material-ui/core/styles";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'


import image1 from "assets/img/simbiosis-fotos/AcademiaSimbiosis1.jpg";
import image2 from "assets/img/simbiosis-fotos/AcademiaSimbiosis2.jpg";
import image3 from "assets/img/simbiosis-fotos/AcademiaSimbiosis3.jpg";
import image4 from "assets/img/simbiosis-fotos/AcademiaSimbiosis4.jpg";
import image5 from "assets/img/simbiosis-fotos/AcademiaSimbiosis5.jpg";
import image6 from "assets/img/simbiosis-fotos/AcademiaSimbiosis6.jpg";

const useStyles1 = makeStyles(styles1);

function Academia(props) {
    const classes = useStyles1();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );

  const { post } = props;

    return (
      <div style={{ 
      backgroundColor: `white`,
      height: "7500px",
      position: "absolute",
      backgroundPosition: '0px 0px',
      backgroundSize: "100% 100%",  
      backgroundRepeat: "no-repeat",
      width: "100%",
      paddingBottom: "80%",  
      marginBottom: "100px",  
      marginTop: "-1%",
      paddingTop: 0,
      }}>
          <Header
        brand="Colectivo Simbiosis"
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />

    <div>
    <h5 style={{
      color:"black", 
      fontFamily: 'AmericanTypewriter-CondensedLight', 
      fontSize: "50px",
      fontWeight: "normal",
      fontWeight: "600",
      position: "relative",
      backgroundColor: "white", //"#000000",
      opacity: "1.0",   
      marginLeft: "2%",
      marginTop: "100px",
      width: "69%",
      padding: "10px",
       }}><p>Teléfono 939-207-6051</p> 
       <br></br></h5>
      </div> 
      <GridContainer>
            <GridItem>
            <div>
                    <img src={image1} alt="..." className={imageClasses} />
                  </div>
            </GridItem>
          </GridContainer>
      
      
          <Container>
      <Row>
        
       <Col><img src={image3} alt="..."  width="50%" height="50%"  /><img src={image2} alt="..."  width="50%" height="50%"  />

        </Col>

        <Col><img src={image4} alt="..."  width="50%" height="50%"  /><img src={image5} alt="..."  width="50%" height="50%"  />

        </Col>
       
        <Col><img src={image6} alt="..."  width="50%" height="50%"  />
        </Col>
        

       </Row>
   </Container>
   <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" thumbnail />
    </Col>
  </Row>
</Container>
   
      </div>
     
    )
  }

  export default Academia
