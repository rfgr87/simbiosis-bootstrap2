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



const useStyles1 = makeStyles(styles1);

function Releases(props) {
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
      height: "3500px",
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
       }}> 
       Artículos<br></br></h5>
      </div> 
        <ul style = {{width: "75%"}} >
          <li>
          <a style = {{color: "black", fontFamily: 'AmericanTypewriter-CondensedLight', fontWeight: "600",fontSize: "25px", width: "50%"}} href="https://www.falsomutis.com/colectivo-simbiosis-y-su-propuesta-poliartistica-entrevista-a-pedro-e-franco-fraticelli/?fbclid=IwAR2citCl3fWeNEpyzQO3-kzwxIS4mO-Fp-WY_dsbuYbvXM23WgIzs51vTrc">COLECTIVO SIMBIOSIS Y SU PROPUESTA POLIARTÍSTICA: ENTREVISTA A PEDRO E. FRANCO FRATICELLI</a><br></br><br></br> 
          </li>
          <li>
          <a style = {{color: "black", fontFamily: 'AmericanTypewriter-CondensedLight', fontWeight: "600", fontSize: "25px", width: "50%"}} href="Trchttps://www.julioquinonesmusic.com/entre-ladrillo-bustos-y-bartulos-arcano/?fbclid=IwAR1v9TE3dMQDjRlfGUecvzl-6G02C0Al5Fui00P11Q-r6OCXHPqSxwO8lRE">Entre ladrillo, bustos y bártulos arcanos</a> 
          </li>
        </ul>
      </div>
    )
  }

  export default Releases
