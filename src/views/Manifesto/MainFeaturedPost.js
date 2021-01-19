import React from 'react';
import { Component } from 'react';


import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";



import image2 from "assets/img/simbiosis-fotos/foto-sobrenosotros.png";
import image3 from "assets/img/simbiosis-fotos/foto-sobrenosotros2.png";
import image4 from "assets/img/simbiosis-fotos/foto-simbiosis6.jpg";


// import image2 from "assets/img/decolonial-fotos/foto-roy-pieza-roy2.jpg";
// import image3 from "assets/img/decolonial-fotos/foto-roy-pieza-roy3.jpg";

import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
// import styles2 from "assets/jss/material-kit-react/views/profilePage1.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle1.js";


const useStyles1 = makeStyles(styles1);
// const useStyles2 = makeStyles(styles2);



function MainFeaturedPost(props) {

  const classes = useStyles1();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );

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
      marginTop: "0%",
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

    <div >
    <h1 style = {{
      marginLeft: "20px",
      display: "block",
      position: "relative",
      color: "black", 
      fontFamily: 'AmericanTypewriter-CondensedLight', 
      fontSize: "35px",
      fontWeight: "600",
      fontStyle: "normal",
      paddingTop: "0px",
      backgroundColor: `white`,
      width: "70%",
      padding: "2px",
      textWidth: "1px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0",
      marginTop: "100px"
       }}>[Sobre Nosotros]</h1>
</div>

<div >
    <h1 style = {{
      marginLeft: "8%",
      display: "block",
      position: "relative",
      color: "black", 
      fontFamily: 'AmericanTypewriter-CondensedLight', 
      fontSize: "25px",
      fontWeight: "600",
      fontStyle: "normal",
      paddingTop: "0px",
      backgroundColor: `white`,
      width: "75%",
      padding: "2px",
      textWidth: "1px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0",
      marginTop: "2%"
       }}>Colectivo Simbiosis</h1>
</div>
      <div>
      <h5 style={{
      display: "inline-block",
      color: "black", 
      fontFamily: 'AmericanTypewriter-CondensedLight', 
      fontSize: "15px",
      fontWeight: "bold",
      marginTop: "2%",
      fontStyle: "normal",
      padding: "10px",
      position: "relative",
      fontWeight: "600",
      borderWidth: "2px",
      borderColor: "black",
      backgroundColor: `white`,
      backgroundSize: "100px",
      opacity: "1.0",
      marginLeft: "8%",
      width: "50%"
       }}> 
       {"Radicado dentro del Conservatorio de Música de Puerto Rico, el Colectivo de Compositores, Simbiosis, comenzó como una iniciativa dedicada a promover y estrenar las obras de compositores jóvenes. Además, colaboran con artistas, plásticos y gráficos, que llevan las propuestas musicales a un nivel visual formando así una experiencia artística y creativa."}<br></br>
       </h5>
      
    </div>
      <div style={{
      display: "inline-block",
      color: "black", 
      fontFamily: 'AmericanTypewriter-CondensedLight', 
      fontWeight: "bold",
      marginTop: "0%",
      fontStyle: "normal",
      backgroundRepeat  : 'no-repeat',

      padding: "10px",
      position: "relative",
      borderColor: "black",
      backgroundImage: `url(${image4})`,
      backgroundSize: "80%",
      opacity: "1.0",
      marginLeft: "8%",
      height: "100%",
      width: "100%"
       }}> 
    </div><br></br>
    </div>
    )
  }

export default MainFeaturedPost

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
