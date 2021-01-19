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
       }}> 
       Medios<br></br></h5>
      </div> 
        <ul style = {{width: "75%"}} >
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/804365731&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/colectivosimbiosispr" title="Colectivo Simbiosis P.R." target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Colectivo Simbiosis P.R.</a> · <a href="https://soundcloud.com/colectivosimbiosispr/musica-para-contrabajo-y-fantasma-elimar-alicia-chardon-sierra" title="&quot;Música para Contrabajo y Fantasma&quot;, Elimar Alicia Chardón Sierra" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>&quot;Música para Contrabajo y Fantasma&quot;, Elimar Alicia Chardón Sierra</a></div>
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/582977139&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis",  fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/colectivosimbiosispr" title="Colectivo Simbiosis P.R." target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Colectivo Simbiosis P.R.</a> · <a href="https://soundcloud.com/colectivosimbiosispr/lo-bonito-y-lo-violento-pedro-fraticelli" title="Lo Bonito Y Lo Violento (The Beauty &amp; The Violence) - Pedro Fraticelli" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Lo Bonito Y Lo Violento (The Beauty &amp; The Violence) - Pedro Fraticelli</a></div>
          
          <h3>Conversaciones Simbióticas</h3>
          <ol>
          <li>
          <iframe src="https://open.spotify.com/embed-podcast/episode/3XpxX6YnMPDVAlDFlxPFM0" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </li>
          <li><iframe src="https://open.spotify.com/embed-podcast/episode/6Y8Gz4ybfaU78uUYfEVFIs" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
          <li><iframe src="https://open.spotify.com/embed-podcast/episode/3yUqsEeKm1LrV4p5B8EUlK" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
          <li><iframe src="https://open.spotify.com/embed-podcast/episode/32gVwsgF0DFRuKWlTq3Qon" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
            <li><iframe src="https://open.spotify.com/embed-podcast/episode/7baB7aTeitpktxTazzBXhn" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
            <li><iframe src="https://open.spotify.com/embed-podcast/episode/7baB7aTeitpktxTazzBXhn" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
         <li><iframe src="https://open.spotify.com/embed-podcast/episode/2qdtA8o8Vl50IJr92upxCZ" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
          <li><iframe src="https://open.spotify.com/embed-podcast/episode/2MNP31NlHnjjlfcwn4E6Dz" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
          <li><iframe src="https://open.spotify.com/embed-podcast/episode/0vXtcsm2eqCI3CBzls23B2" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
            <li><iframe src="https://open.spotify.com/embed-podcast/episode/5wHoQUlTWpxFyhkyGymzEd" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
        <li><iframe src="https://open.spotify.com/embed-podcast/episode/2Zs1FoyE4JpY36RjYX47uF" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
         <li><iframe src="https://open.spotify.com/embed-podcast/episode/5fIjAsBtQS2XHnIXAldGKV" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
         <li> <iframe src="https://open.spotify.com/embed-podcast/episode/1zVIwFWsfoiH5XCXnyUyQX" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
          <li><iframe src="https://open.spotify.com/embed-podcast/episode/6TR3UR9QuPy76kcEFxtvn9" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
          <li><iframe src="https://open.spotify.com/embed-podcast/episode/0cdAZTAFgfySC8MgbGndPA" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
          <li><iframe src="https://open.spotify.com/embed-podcast/episode/12XTH3BTzVtyf63sE0zYzn" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
          <li><iframe src="https://open.spotify.com/embed-podcast/episode/2hjmwEIkrP7BFFE3I2r5P0" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
          <li><iframe src="https://open.spotify.com/embed-podcast/episode/2fEqKOMw1xNZPaxh7Va0Va" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
        `   <li><iframe src="https://open.spotify.com/embed-podcast/episode/1OJkXRYkWXhsAaR3kN526E" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>`
        <li><iframe src="https://open.spotify.com/embed-podcast/episode/7nvn6yEteVq7bvGuOOS5rG" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
         <li><iframe src="https://open.spotify.com/embed-podcast/episode/01VkjJXHGe4l57eY2iZeSw" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li> 
        <li><iframe src="https://open.spotify.com/embed-podcast/episode/5XKYBkC7hf4kwuvYxQboxq" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
       <li><iframe src="https://open.spotify.com/embed-podcast/episode/5jMAnqelE71GQs1oIIH4mv" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
         <li><iframe src="https://open.spotify.com/embed-podcast/episode/1srf0IoQoR90BsZtyXfLOf" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
         <li><iframe src="https://open.spotify.com/embed-podcast/episode/5jB4d0gsiPzd12yOczOCQD" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
       <li><iframe src="https://open.spotify.com/embed-podcast/episode/00iu2BKLBHIT0K21zVutjl" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
          <li>
          <iframe src="https://open.spotify.com/embed-podcast/show/0rWmFDe7I5IxfLjP5hKxI9" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </li></ol>

        </ul>
      </div>
    )
  }

  export default Releases
