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



import image1 from "assets/img/decolonial-fotos/foto-roy-pieza-roy1.jpg";
import image2 from "assets/img/decolonial-fotos/foto-roy-pieza-roy2.jpg";
import image3 from "assets/img/decolonial-fotos/foto-roy-pieza-roy3.jpg";

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
        height: "2000px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
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
       }}>Manifesto</h1>

       <h5 style={{
        display: "inline-block",
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "40px",
      fontWeight: "normal",
      fontStyle: "normal",
      paddingTop: "1%",
      paddingLeft: "1%",
      position: "relative",
      backgroundColor: "white", //"#000000",
      opacity: "1.0",   
      marginLeft: "12%",
      marginTop: "9%",
      width: "80%",
      height: "80%",
      }}> 
       {"[Decolonialidad, Apropiación, Futurismo]"}<br></br></h5>

      <h5 style={{
      color: "black",   
      fontStyle: "normal",
      position: "relative",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "0%",
      marginTop: "0%",
      backgroundImage: `url(${image1})`,
      width: "100%",
      height: "5%"
       }}> 
     <br></br></h5>
      <h5 style={{
      display: "inlinde-block",
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
       {"Decolonial Records está dedicado a la música contemporánea y experimental Latino Americana con la misión de formar mediante actos decoloniales una identidad futurística Latino Americana abrazando el folclor y buscando el desprendimiento de asociaciones convenidas por el condicionamiento occidental."}<br></br>
       </h5>
    </div>

  <h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "5%",
      marginTop: "7%",
      backgroundImage: `url(${image1})`,
      width: "2.5%"
       }}><br></br></h5>
       <h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "21%",
      marginTop: "7%",
      backgroundImage: `url(${image1})`,
      width: "15%"
       }}><br></br></h5>

<h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "50%",
      marginTop: "7%",
      backgroundImage: `url(${image1})`,
      width: "5%"
       }}><br></br></h5>

<h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "75%",
      marginTop: "7%",
      backgroundImage: `url(${image1})`,
      width: "2%"
       }}><br></br></h5>

<h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "65%",
      marginTop: "7%",
      backgroundImage: `url(${image1})`,
      width: "1%"
       }}><br></br></h5>

    <h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "85%",
      marginTop: "7%",
      backgroundImage: `url(${image1})`,
      width: "5%"
       }}><br></br></h5>
    </div>
    )
  }

export default MainFeaturedPost

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
