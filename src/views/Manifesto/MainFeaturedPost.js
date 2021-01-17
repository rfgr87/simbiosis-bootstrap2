import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";



import image2 from "assets/img/decolonial-fotos/foto-royfunciones.jpg";
// import image2 from "assets/img/decolonial-fotos/foto-roy-pieza-roy2.jpg";
// import image3 from "assets/img/decolonial-fotos/foto-roy-pieza-roy3.jpg";

import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
// import styles2 from "assets/jss/material-kit-react/views/profilePage1.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle1.js";


const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);

function MainFeaturedPost(props) {

  const classes = useStyles1();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );

    return (
    <div style={{ 
        position: "absolute",
        backgroundImage: `url(${image2})`,
        height: "1000px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        marginBottom: "-500px",
        paddingBottom: "-500px",
        margin: 0,
        padding: 0}}>
        <Header
        brand="CMEPR"
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
      fontFamily: "Menlo", //"'Raleway', sans-serif",
      fontSize: "35px",
      fontWeight: "800",
      fontStyle: "normal",
      paddingTop: "0px",
      backgroundColor: "white", //"#6666FF",
      width: "75%",
      padding: "2px",
      textWidth: "1px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0",
      marginTop: "100px"
       }}>Nosotros</h1>
</div>
      <div>
      <h5 style={{
      display: "block",
      color: "black", 
      fontFamily: "Menlo",
      fontSize: "15px",
      fontWeight: "bold",
      marginTop: "2%",
      fontStyle: "normal",
      padding: "70px",
      position: "relative",
      backgroundColor: "white", //"#00FFFF",
      backgroundSize: "100px",
      opacity: "1.0",
      marginLeft: "1%",
      width: "80%"
       }}> 
       {"CMEPR es el Colectivo de Música Experimental de Puerto Rico. Es un grupo de músicos y compositores de Puerto Rico organizados con la idea de crear, interpretar e improvisar música experimental y eventos de música experimental en Puerto Rico."}<br></br>
       </h5>
    </div>

  
    </div>
    )
  }

export default MainFeaturedPost

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
