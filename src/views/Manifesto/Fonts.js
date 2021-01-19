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
      fontFamily: 'Oriya Sangam MN', 
      fontSize: "35px",
      fontWeight: "600",
      fontStyle: "normal",
      paddingTop: "0px",
      backgroundImage: `url(${image3})`,
      width: "350px",
      padding: "2px",
      textWidth: "1px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0",
      marginTop: "100px"
       }}>[Sobre Nosotros...</h1>
</div>
<div >
    <h1 style = {{
      marginLeft: "8%",
      display: "block",
      position: "relative",
      color: "black", 
      fontFamily: 'Oriya Sangam MN', 
      fontSize: "25px",
      fontWeight: "600",
      fontStyle: "normal",
      paddingTop: "0px",
      backgroundImage: `url(${image3})`,
      width: "260px",
      padding: "2px",
      textWidth: "1px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0",
      marginTop: "10%"
       }}>Colectivo Simbiosis</h1>
</div>
      <div>
      <h5 style={{
      display: "block",
      color: "black", 
      fontFamily: 'Oriya Sangam MN', 
      fontSize: "15px",
      fontWeight: "bold",
      marginTop: "2%",
      fontStyle: "normal",
      padding: "10px",
      position: "relative",
      fontWeight: "600",
      borderWidth: "2px",
      borderColor: "black",
      backgroundImage: `url(${image3})`,
      backgroundSize: "100px",
      opacity: "1.0",
      marginLeft: "8%",
      width: "80%"
       }}> 
       {"Radicado dentro del Conservatorio de Música de Puerto Rico, el Colectivo de Compositores, Simbiosis, comenzó como una iniciativa dedicada a promover y estrenar las obras de compositores jóvenes. Además, colaboran con artistas, plásticos y gráficos, que llevan las propuestas musicales a un nivel visual formando así una experiencia artística y creativa."}<br></br>
       </h5>
    </div><br></br>

    <div style = {{marginTop: "1000px"}}>
    <ul>
        <h2 style={{fontFamily: 'Academy Engraved LET'}}>Academy Engraved LET </h2>
        <h2 style={{fontFamily: 'AcademyEngravedLetPlain'}}>AcademyEngravedLetPlain </h2>
        <h2 style={{fontFamily: 'Al Nile'}}>Al Nile </h2>
        <h2 style={{fontFamily: 'AlNile-Bold'}}>AlNile-Bold </h2>
        <h2 style={{fontFamily: 'American Typewriter'}}>American Typewriter </h2>
        <h2 style={{fontFamily: 'AmericanTypewriter-Bold'}}>AmericanTypewriter-Bold </h2>
        <h2 style={{fontFamily: 'AmericanTypewriter-Condensed'}}>AmericanTypewriter-Condensed </h2>
        <h2 style={{fontFamily: 'AmericanTypewriter-CondensedBold'}}>AmericanTypewriter-CondensedBold </h2>
        <h2 style={{fontFamily: 'AmericanTypewriter-CondensedLight'}}>AmericanTypewriter-CondensedLight </h2>
        <h2 style={{fontFamily: 'AmericanTypewriter-Light'}}>AmericanTypewriter-Light </h2>
        <h2 style={{fontFamily: 'Apple Color Emoji'}}>Apple Color Emoji </h2>
        <h2 style={{fontFamily: 'Apple SD Gothic Neo'}}>Apple SD Gothic Neo </h2>
        <h2 style={{fontFamily: 'AppleColorEmoji'}}>AppleColorEmoji </h2>
        <h2 style={{fontFamily: 'AppleSDGothicNeo-Bold'}}>AppleSDGothicNeo-Bold </h2>
        <h2 style={{fontFamily: 'AppleSDGothicNeo-Light'}}>AppleSDGothicNeo-Light </h2>
        <h2 style={{fontFamily: 'AppleSDGothicNeo-Medium'}}>AppleSDGothicNeo-Medium </h2>
        <h2 style={{fontFamily: 'AppleSDGothicNeo-Regular'}}>AppleSDGothicNeo-Regular </h2>
        <h2 style={{fontFamily: 'AppleSDGothicNeo-SemiBold'}}>AppleSDGothicNeo-SemiBold </h2>
        <h2 style={{fontFamily: 'AppleSDGothicNeo-Thin'}}>AppleSDGothicNeo-Thin </h2>
        <h2 style={{fontFamily: 'AppleSDGothicNeo-UltraLight'}}>AppleSDGothicNeo-UltraLight </h2>
        <h2 style={{fontFamily: 'Arial'}}>Arial </h2>
        <h2 style={{fontFamily: 'Arial Hebrew'}}>Arial Hebrew </h2>
        <h2 style={{fontFamily: 'Arial Rounded MT Bold'}}>Arial Rounded MT Bold </h2>
        <h2 style={{fontFamily: 'Arial-BoldItalicMT'}}>Arial-BoldItalicMT </h2>
        <h2 style={{fontFamily: 'Arial-BoldMT'}}>Arial-BoldMT </h2>
        <h2 style={{fontFamily: 'Arial-ItalicMT'}}>Arial-ItalicMT </h2>
        <h2 style={{fontFamily: 'ArialHebrew'}}>ArialHebrew </h2>
        <h2 style={{fontFamily: 'ArialHebrew-Bold'}}>ArialHebrew-Bold </h2>
        <h2 style={{fontFamily: 'ArialHebrew-Light'}}>ArialHebrew-Light </h2>
        <h2 style={{fontFamily: 'ArialMT'}}>ArialMT </h2>
        <h2 style={{fontFamily: 'ArialRoundedMTBold'}}>ArialRoundedMTBold </h2>
        <h2 style={{fontFamily: 'Avenir'}}>Avenir </h2>
        <h2 style={{fontFamily: 'Avenir Next'}}>Avenir Next </h2>
        <h2 style={{fontFamily: 'Avenir Next Condensed'}}>Avenir Next Condensed </h2>
        <h2 style={{fontFamily: 'Avenir-Black'}}>Avenir-Black </h2>
        <h2 style={{fontFamily: 'Avenir-BlackOblique'}}>Avenir-BlackOblique </h2>
        <h2 style={{fontFamily: 'Avenir-Book'}}>Avenir-Book </h2>
        <h2 style={{fontFamily: 'Avenir-BookOblique'}}>Avenir-BookOblique </h2>
        <h2 style={{fontFamily: 'Avenir-Heavy'}}>Avenir-Heavy </h2>
        <h2 style={{fontFamily: 'Avenir-HeavyOblique'}}>Avenir-HeavyOblique </h2>
        <h2 style={{fontFamily: 'Avenir-Light'}}>Avenir-Light </h2>
        <h2 style={{fontFamily: 'Avenir-LightOblique'}}>Avenir-LightOblique </h2>
        <h2 style={{fontFamily: 'Avenir-Medium'}}>Avenir-Medium </h2>
        <h2 style={{fontFamily: 'Avenir-MediumOblique'}}>Avenir-MediumOblique </h2>
        <h2 style={{fontFamily: 'Avenir-Oblique'}}>Avenir-Oblique </h2>
        <h2 style={{fontFamily: 'Avenir-Roman'}}>Avenir-Roman </h2>
        <h2 style={{fontFamily: 'AvenirNext-Bold'}}>AvenirNext-Bold </h2>
        <h2 style={{fontFamily: 'AvenirNext-BoldItalic'}}>AvenirNext-BoldItalic </h2>
        <h2 style={{fontFamily: 'AvenirNext-DemiBold'}}>AvenirNext-DemiBold </h2>
        <h2 style={{fontFamily: 'AvenirNext-DemiBoldItalic'}}>AvenirNext-DemiBoldItalic </h2>
        <h2 style={{fontFamily: 'AvenirNext-Heavy'}}>AvenirNext-Heavy </h2>
        <h2 style={{fontFamily: 'AvenirNext-HeavyItalic'}}>AvenirNext-HeavyItalic </h2>
        <h2 style={{fontFamily: 'AvenirNext-Italic'}}>AvenirNext-Italic </h2>
        <h2 style={{fontFamily: 'AvenirNext-Medium'}}>AvenirNext-Medium </h2>
        <h2 style={{fontFamily: 'AvenirNext-MediumItalic'}}>AvenirNext-MediumItalic </h2>
        <h2 style={{fontFamily: 'AvenirNext-Regular'}}>AvenirNext-Regular </h2>
        <h2 style={{fontFamily: 'AvenirNext-UltraLight'}}>AvenirNext-UltraLight </h2>
        <h2 style={{fontFamily: 'AvenirNext-UltraLightItalic'}}>AvenirNext-UltraLightItalic </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-Bold'}}>AvenirNextCondensed-Bold </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-BoldItalic'}}>AvenirNextCondensed-BoldItalic </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-DemiBold'}}>AvenirNextCondensed-DemiBold </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-DemiBoldItalic'}}>AvenirNextCondensed-DemiBoldItalic </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-Heavy'}}>AvenirNextCondensed-Heavy </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-HeavyItalic'}}>AvenirNextCondensed-HeavyItalic </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-Italic'}}>AvenirNextCondensed-Italic </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-Medium'}}>AvenirNextCondensed-Medium </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-MediumItalic'}}>AvenirNextCondensed-MediumItalic </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-Regular'}}>AvenirNextCondensed-Regular </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-UltraLight'}}>AvenirNextCondensed-UltraLight </h2>
        <h2 style={{fontFamily: 'AvenirNextCondensed-UltraLightItalic'}}>AvenirNextCondensed-UltraLightItalic </h2>
        <h2 style={{fontFamily: 'Bangla Sangam MN'}}>Bangla Sangam MN </h2>
        <h2 style={{fontFamily: 'Baskerville'}}>Baskerville </h2>
        <h2 style={{fontFamily: 'Baskerville-Bold'}}>Baskerville-Bold </h2>
        <h2 style={{fontFamily: 'Baskerville-BoldItalic'}}>Baskerville-BoldItalic </h2>
        <h2 style={{fontFamily: 'Baskerville-Italic'}}>Baskerville-Italic </h2>
        <h2 style={{fontFamily: 'Baskerville-SemiBold'}}>Baskerville-SemiBold </h2>
        <h2 style={{fontFamily: 'Baskerville-SemiBoldItalic'}}>Baskerville-SemiBoldItalic </h2>
        <h2 style={{fontFamily: 'Bodoni 72'}}>Bodoni 72 </h2>
        <h2 style={{fontFamily: 'Bodoni 72 Oldstyle'}}>Bodoni 72 Oldstyle </h2>
        <h2 style={{fontFamily: 'Bodoni 72 Smallcaps'}}>Bodoni 72 Smallcaps </h2>
        <h2 style={{fontFamily: 'Bodoni Ornaments'}}>Bodoni Ornaments </h2>
        <h2 style={{fontFamily: 'BodoniOrnamentsITCTT'}}>BodoniOrnamentsITCTT </h2>
        <h2 style={{fontFamily: 'BodoniSvtyTwoITCTT-Bold'}}>BodoniSvtyTwoITCTT-Bold </h2>
        <h2 style={{fontFamily: 'BodoniSvtyTwoITCTT-Book'}}>BodoniSvtyTwoITCTT-Book </h2>
        <h2 style={{fontFamily: 'BodoniSvtyTwoITCTT-BookIta'}}>BodoniSvtyTwoITCTT-BookIta </h2>
        <h2 style={{fontFamily: 'BodoniSvtyTwoOSITCTT-Bold'}}>BodoniSvtyTwoOSITCTT-Bold </h2>
        <h2 style={{fontFamily: 'BodoniSvtyTwoOSITCTT-Book'}}>BodoniSvtyTwoOSITCTT-Book </h2>
        <h2 style={{fontFamily: 'BodoniSvtyTwoSCITCTT-Book'}}>BodoniSvtyTwoSCITCTT-Book </h2>
        <h2 style={{fontFamily: 'Bradley Hand'}}>Bradley Hand </h2>
        <h2 style={{fontFamily: 'BradleyHandITCTT-Bold'}}>BradleyHandITCTT-Bold </h2>
        <h2 style={{fontFamily: 'Chalkboard SE'}}>Chalkboard SE </h2>
        <h2 style={{fontFamily: 'ChalkboardSE-Bold'}}>ChalkboardSE-Bold </h2>
        <h2 style={{fontFamily: 'ChalkboardSE-Light'}}>ChalkboardSE-Light </h2>
        <h2 style={{fontFamily: 'ChalkboardSE-Regular'}}>ChalkboardSE-Regular </h2>
        <h2 style={{fontFamily: 'Chalkduster'}}>Chalkduster </h2>
        <h2 style={{fontFamily: 'Chalkduster'}}>Chalkduster </h2>
        <h2 style={{fontFamily: 'Cochin'}}>Cochin </h2>
        <h2 style={{fontFamily: 'Cochin-Bold'}}>Cochin-Bold </h2>
        <h2 style={{fontFamily: 'Cochin-BoldItalic'}}>Cochin-BoldItalic </h2>
        <h2 style={{fontFamily: 'Cochin-Italic'}}>Cochin-Italic </h2>
        <h2 style={{fontFamily: 'Copperplate'}}>Copperplate </h2>
        <h2 style={{fontFamily: 'Copperplate-Bold'}}>Copperplate-Bold </h2>
        <h2 style={{fontFamily: 'Copperplate-Light'}}>Copperplate-Light </h2>
        <h2 style={{fontFamily: 'Courier'}}>Courier </h2>
        <h2 style={{fontFamily: 'Courier New'}}>Courier New </h2>
        <h2 style={{fontFamily: 'Courier-Bold'}}>Courier-Bold </h2>
        <h2 style={{fontFamily: 'Courier-BoldOblique'}}>Courier-BoldOblique </h2>
        <h2 style={{fontFamily: 'Courier-Oblique'}}>Courier-Oblique </h2>
        <h2 style={{fontFamily: 'CourierNewPS-BoldItalicMT'}}>CourierNewPS-BoldItalicMT </h2>
        <h2 style={{fontFamily: 'CourierNewPS-BoldMT'}}>CourierNewPS-BoldMT </h2>
        <h2 style={{fontFamily: 'CourierNewPS-ItalicMT'}}>CourierNewPS-ItalicMT </h2>
        <h2 style={{fontFamily: 'CourierNewPSMT'}}>CourierNewPSMT </h2>
        <h2 style={{fontFamily: 'Damascus'}}>Damascus </h2>
        <h2 style={{fontFamily: 'DamascusBold'}}>DamascusBold </h2>
        <h2 style={{fontFamily: 'DamascusLight'}}>DamascusLight </h2>
        <h2 style={{fontFamily: 'DamascusMedium'}}>DamascusMedium </h2>
        <h2 style={{fontFamily: 'DamascusSemiBold'}}>DamascusSemiBold </h2>
        <h2 style={{fontFamily: 'Devanagari Sangam MN'}}>Devanagari Sangam MN </h2>
        <h2 style={{fontFamily: 'DevanagariSangamMN'}}>DevanagariSangamMN </h2>
        <h2 style={{fontFamily: 'DevanagariSangamMN-Bold'}}>DevanagariSangamMN-Bold </h2>
        <h2 style={{fontFamily: 'Didot'}}>Didot </h2>
        <h2 style={{fontFamily: 'Didot-Bold'}}>Didot-Bold </h2>
        <h2 style={{fontFamily: 'Didot-Italic'}}>Didot-Italic </h2>
        <h2 style={{fontFamily: 'DiwanMishafi'}}>DiwanMishafi </h2>
        <h2 style={{fontFamily: 'Euphemia UCAS'}}>Euphemia UCAS </h2>
        <h2 style={{fontFamily: 'EuphemiaUCAS-Bold'}}>EuphemiaUCAS-Bold </h2>
        <h2 style={{fontFamily: 'EuphemiaUCAS-Italic'}}>EuphemiaUCAS-Italic </h2>
        <h2 style={{fontFamily: 'Farah'}}>Farah </h2>
        <h2 style={{fontFamily: 'Futura'}}>Futura </h2>
        <h2 style={{fontFamily: 'Futura-CondensedExtraBold'}}>Futura-CondensedExtraBold </h2>
        <h2 style={{fontFamily: 'Futura-CondensedMedium'}}>Futura-CondensedMedium </h2>
        <h2 style={{fontFamily: 'Futura-Medium'}}>Futura-Medium </h2>
        <h2 style={{fontFamily: 'Futura-MediumItalic'}}>Futura-MediumItalic </h2>
        <h2 style={{fontFamily: 'Geeza Pro'}}>Geeza Pro </h2>
        <h2 style={{fontFamily: 'GeezaPro-Bold'}}>GeezaPro-Bold </h2>
        <h2 style={{fontFamily: 'Georgia'}}>Georgia </h2>
        <h2 style={{fontFamily: 'Georgia-Bold'}}>Georgia-Bold </h2>
        <h2 style={{fontFamily: 'Georgia-BoldItalic'}}>Georgia-BoldItalic </h2>
        <h2 style={{fontFamily: 'Georgia-Italic'}}>Georgia-Italic </h2>
        <h2 style={{fontFamily: 'Gill Sans'}}>Gill Sans </h2>
        <h2 style={{fontFamily: 'GillSans-Bold'}}>GillSans-Bold </h2>
        <h2 style={{fontFamily: 'GillSans-BoldItalic'}}>GillSans-BoldItalic </h2>
        <h2 style={{fontFamily: 'GillSans-Italic'}}>GillSans-Italic </h2>
        <h2 style={{fontFamily: 'GillSans-Light'}}>GillSans-Light </h2>
        <h2 style={{fontFamily: 'GillSans-LightItalic'}}>GillSans-LightItalic </h2>
        <h2 style={{fontFamily: 'GillSans-SemiBold'}}>GillSans-SemiBold </h2>
        <h2 style={{fontFamily: 'GillSans-SemiBoldItalic'}}>GillSans-SemiBoldItalic </h2>
        <h2 style={{fontFamily: 'GillSans-UltraBold'}}>GillSans-UltraBold </h2>
        <h2 style={{fontFamily: 'Gujarati Sangam MN'}}>Gujarati Sangam MN </h2>
        <h2 style={{fontFamily: 'GujaratiSangamMN'}}>GujaratiSangamMN </h2>
        <h2 style={{fontFamily: 'GujaratiSangamMN-Bold'}}>GujaratiSangamMN-Bold </h2>
        <h2 style={{fontFamily: 'Gurmukhi MN'}}>Gurmukhi MN </h2>
        <h2 style={{fontFamily: 'GurmukhiMN-Bold'}}>GurmukhiMN-Bold </h2>
        <h2 style={{fontFamily: 'Heiti SC'}}>Heiti SC </h2>
        <h2 style={{fontFamily: 'Heiti TC'}}>Heiti TC </h2>
        <h2 style={{fontFamily: 'Helvetica'}}>Helvetica </h2>
        <h2 style={{fontFamily: 'Helvetica Neue'}}>Helvetica Neue </h2>
        <h2 style={{fontFamily: 'Helvetica-Bold'}}>Helvetica-Bold </h2>
        <h2 style={{fontFamily: 'Helvetica-BoldOblique'}}>Helvetica-BoldOblique </h2>
        <h2 style={{fontFamily: 'Helvetica-Light'}}>Helvetica-Light </h2>
        <h2 style={{fontFamily: 'Helvetica-LightOblique'}}>Helvetica-LightOblique </h2>
        <h2 style={{fontFamily: 'Helvetica-Oblique'}}>Helvetica-Oblique </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-Bold'}}>HelveticaNeue-Bold </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-BoldItalic'}}>HelveticaNeue-BoldItalic </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-CondensedBlack'}}>HelveticaNeue-CondensedBlack </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-CondensedBold'}}>HelveticaNeue-CondensedBold </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-Italic'}}>HelveticaNeue-Italic </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-Light'}}>HelveticaNeue-Light </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-LightItalic'}}>HelveticaNeue-LightItalic </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-Medium'}}>HelveticaNeue-Medium </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-MediumItalic'}}>HelveticaNeue-MediumItalic </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-Thin'}}>HelveticaNeue-Thin </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-ThinItalic'}}>HelveticaNeue-ThinItalic </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-UltraLight'}}>HelveticaNeue-UltraLight </h2>
        <h2 style={{fontFamily: 'HelveticaNeue-UltraLightItalic'}}>HelveticaNeue-UltraLightItalic </h2>
        <h2 style={{fontFamily: 'Hiragino Mincho ProN'}}>Hiragino Mincho ProN </h2>
        <h2 style={{fontFamily: 'Hiragino Sans'}}>Hiragino Sans </h2>
        <h2 style={{fontFamily: 'HiraginoSans-W3'}}>HiraginoSans-W3 </h2>
        <h2 style={{fontFamily: 'HiraginoSans-W6'}}>HiraginoSans-W6 </h2>
        <h2 style={{fontFamily: 'HiraMinProN-W3'}}>HiraMinProN-W3 </h2>
        <h2 style={{fontFamily: 'HiraMinProN-W6'}}>HiraMinProN-W6 </h2>
        <h2 style={{fontFamily: 'Hoefler h2'}}>Hoefler h2 </h2>
        <h2 style={{fontFamily: 'HoeflerText-Black'}}>HoeflerText-Black </h2>
        <h2 style={{fontFamily: 'HoeflerText-BlackItalic'}}>HoeflerText-BlackItalic </h2>
        <h2 style={{fontFamily: 'HoeflerText-Italic'}}>HoeflerText-Italic </h2>
        <h2 style={{fontFamily: 'HoeflerText-Regular'}}>HoeflerText-Regular </h2>
        <h2 style={{fontFamily: 'Iowan Old Style'}}>Iowan Old Style </h2>
        <h2 style={{fontFamily: 'IowanOldStyle-Bold'}}>IowanOldStyle-Bold </h2>
        <h2 style={{fontFamily: 'IowanOldStyle-BoldItalic'}}>IowanOldStyle-BoldItalic </h2>
        <h2 style={{fontFamily: 'IowanOldStyle-Italic'}}>IowanOldStyle-Italic </h2>
        <h2 style={{fontFamily: 'IowanOldStyle-Roman'}}>IowanOldStyle-Roman </h2>
        <h2 style={{fontFamily: 'Kailasa'}}>Kailasa </h2>
        <h2 style={{fontFamily: 'Kailasa-Bold'}}>Kailasa-Bold </h2>
        <h2 style={{fontFamily: 'Kannada Sangam MN'}}>Kannada Sangam MN </h2>
        <h2 style={{fontFamily: 'KannadaSangamMN'}}>KannadaSangamMN </h2>
        <h2 style={{fontFamily: 'KannadaSangamMN-Bold'}}>KannadaSangamMN-Bold </h2>
        <h2 style={{fontFamily: 'Khmer Sangam MN'}}>Khmer Sangam MN </h2>
        <h2 style={{fontFamily: 'Kohinoor Bangla'}}>Kohinoor Bangla </h2>
        <h2 style={{fontFamily: 'Kohinoor Devanagari'}}>Kohinoor Devanagari </h2>
        <h2 style={{fontFamily: 'Kohinoor Telugu'}}>Kohinoor Telugu </h2>
        <h2 style={{fontFamily: 'KohinoorBangla-Light'}}>KohinoorBangla-Light </h2>
        <h2 style={{fontFamily: 'KohinoorBangla-Regular'}}>KohinoorBangla-Regular </h2>
        <h2 style={{fontFamily: 'KohinoorBangla-Semibold'}}>KohinoorBangla-Semibold </h2>
        <h2 style={{fontFamily: 'KohinoorDevanagari-Light'}}>KohinoorDevanagari-Light </h2>
        <h2 style={{fontFamily: 'KohinoorDevanagari-Regular'}}>KohinoorDevanagari-Regular </h2>
        <h2 style={{fontFamily: 'KohinoorDevanagari-Semibold'}}>KohinoorDevanagari-Semibold </h2>
        <h2 style={{fontFamily: 'KohinoorTelugu-Light'}}>KohinoorTelugu-Light </h2>
        <h2 style={{fontFamily: 'KohinoorTelugu-Medium'}}>KohinoorTelugu-Medium </h2>
        <h2 style={{fontFamily: 'KohinoorTelugu-Regular'}}>KohinoorTelugu-Regular </h2>
        <h2 style={{fontFamily: 'Lao Sangam MN'}}>Lao Sangam MN </h2>
        <h2 style={{fontFamily: 'Malayalam Sangam MN'}}>Malayalam Sangam MN </h2>
        <h2 style={{fontFamily: 'MalayalamSangamMN'}}>MalayalamSangamMN </h2>
        <h2 style={{fontFamily: 'MalayalamSangamMN-Bold'}}>MalayalamSangamMN-Bold </h2>
        <h2 style={{fontFamily: 'Marker Felt'}}>Marker Felt </h2>
        <h2 style={{fontFamily: 'MarkerFelt-Thin'}}>MarkerFelt-Thin </h2>
        <h2 style={{fontFamily: 'MarkerFelt-Wide'}}>MarkerFelt-Wide </h2>
        <h2 style={{fontFamily: 'Menlo'}}>Menlo </h2>
        <h2 style={{fontFamily: 'Menlo-Bold'}}>Menlo-Bold </h2>
        <h2 style={{fontFamily: 'Menlo-BoldItalic'}}>Menlo-BoldItalic </h2>
        <h2 style={{fontFamily: 'Menlo-Italic'}}>Menlo-Italic </h2>
        <h2 style={{fontFamily: 'Menlo-Regular'}}>Menlo-Regular </h2>
        <h2 style={{fontFamily: 'Mishafi'}}>Mishafi </h2>
        <h2 style={{fontFamily: 'Noteworthy'}}>Noteworthy </h2>
        <h2 style={{fontFamily: 'Noteworthy-Bold'}}>Noteworthy-Bold </h2>
        <h2 style={{fontFamily: 'Noteworthy-Light'}}>Noteworthy-Light </h2>
        <h2 style={{fontFamily: 'Optima'}}>Optima </h2>
        <h2 style={{fontFamily: 'Optima-Bold'}}>Optima-Bold </h2>
        <h2 style={{fontFamily: 'Optima-BoldItalic'}}>Optima-BoldItalic </h2>
        <h2 style={{fontFamily: 'Optima-ExtraBlack'}}>Optima-ExtraBlack </h2>
        <h2 style={{fontFamily: 'Optima-Italic'}}>Optima-Italic </h2>
        <h2 style={{fontFamily: 'Optima-Regular'}}>Optima-Regular </h2>
        <h2 style={{fontFamily: 'Oriya Sangam MN'}}>Oriya Sangam MN </h2>
        <h2 style={{fontFamily: 'OriyaSangamMN'}}>OriyaSangamMN </h2>
        <h2 style={{fontFamily: 'OriyaSangamMN-Bold'}}>OriyaSangamMN-Bold </h2>
        <h2 style={{fontFamily: 'Palatino'}}>Palatino </h2>
        <h2 style={{fontFamily: 'Palatino-Bold'}}>Palatino-Bold </h2>
        <h2 style={{fontFamily: 'Palatino-BoldItalic'}}>Palatino-BoldItalic </h2>
        <h2 style={{fontFamily: 'Palatino-Italic'}}>Palatino-Italic </h2>
        <h2 style={{fontFamily: 'Palatino-Roman'}}>Palatino-Roman </h2>
        <h2 style={{fontFamily: 'Papyrus'}}>Papyrus </h2>
        <h2 style={{fontFamily: 'Papyrus-Condensed'}}>Papyrus-Condensed </h2>
        <h2 style={{fontFamily: 'Party LET'}}>Party LET </h2>
        <h2 style={{fontFamily: 'PartyLetPlain'}}>PartyLetPlain </h2>
        <h2 style={{fontFamily: 'PingFang HK'}}>PingFang HK </h2>
        <h2 style={{fontFamily: 'PingFang SC'}}>PingFang SC </h2>
        <h2 style={{fontFamily: 'PingFang TC'}}>PingFang TC </h2>
        <h2 style={{fontFamily: 'PingFangHK-Light'}}>PingFangHK-Light </h2>
        <h2 style={{fontFamily: 'PingFangHK-Medium'}}>PingFangHK-Medium </h2>
        <h2 style={{fontFamily: 'PingFangHK-Regular'}}>PingFangHK-Regular </h2>
        <h2 style={{fontFamily: 'PingFangHK-Semibold'}}>PingFangHK-Semibold </h2>
        <h2 style={{fontFamily: 'PingFangHK-Thin'}}>PingFangHK-Thin </h2>
        <h2 style={{fontFamily: 'PingFangHK-Ultralight'}}>PingFangHK-Ultralight </h2>
        <h2 style={{fontFamily: 'PingFangSC-Light'}}>PingFangSC-Light </h2>
        <h2 style={{fontFamily: 'PingFangSC-Medium'}}>PingFangSC-Medium </h2>
        <h2 style={{fontFamily: 'PingFangSC-Regular'}}>PingFangSC-Regular </h2>
        <h2 style={{fontFamily: 'PingFangSC-Semibold'}}>PingFangSC-Semibold </h2>
        <h2 style={{fontFamily: 'PingFangSC-Thin'}}>PingFangSC-Thin </h2>
        <h2 style={{fontFamily: 'PingFangSC-Ultralight'}}>PingFangSC-Ultralight </h2>
        <h2 style={{fontFamily: 'PingFangTC-Light'}}>PingFangTC-Light </h2>
        <h2 style={{fontFamily: 'PingFangTC-Medium'}}>PingFangTC-Medium </h2>
        <h2 style={{fontFamily: 'PingFangTC-Regular'}}>PingFangTC-Regular </h2>
        <h2 style={{fontFamily: 'PingFangTC-Semibold'}}>PingFangTC-Semibold </h2>
        <h2 style={{fontFamily: 'PingFangTC-Thin'}}>PingFangTC-Thin </h2>
        <h2 style={{fontFamily: 'PingFangTC-Ultralight'}}>PingFangTC-Ultralight </h2>
        <h2 style={{fontFamily: 'Savoye LET'}}>Savoye LET </h2>
        <h2 style={{fontFamily: 'SavoyeLetPlain'}}>SavoyeLetPlain </h2>
        <h2 style={{fontFamily: 'Sinhala Sangam MN'}}>Sinhala Sangam MN </h2>
        <h2 style={{fontFamily: 'SinhalaSangamMN'}}>SinhalaSangamMN </h2>
        <h2 style={{fontFamily: 'SinhalaSangamMN-Bold'}}>SinhalaSangamMN-Bold </h2>
        <h2 style={{fontFamily: 'Snell Roundhand'}}>Snell Roundhand </h2>
        <h2 style={{fontFamily: 'SnellRoundhand-Black'}}>SnellRoundhand-Black </h2>
        <h2 style={{fontFamily: 'SnellRoundhand-Bold'}}>SnellRoundhand-Bold </h2>
        <h2 style={{fontFamily: 'Symbol'}}>Symbol </h2>
        <h2 style={{fontFamily: 'Tamil Sangam MN'}}>Tamil Sangam MN </h2>
        <h2 style={{fontFamily: 'TamilSangamMN-Bold'}}>TamilSangamMN-Bold </h2>
        <h2 style={{fontFamily: 'Telugu Sangam MN'}}>Telugu Sangam MN </h2>
        <h2 style={{fontFamily: 'Thonburi'}}>Thonburi </h2>
        <h2 style={{fontFamily: 'Thonburi-Bold'}}>Thonburi-Bold </h2>
        <h2 style={{fontFamily: 'Thonburi-Light'}}>Thonburi-Light </h2>
        <h2 style={{fontFamily: 'Times New Roman'}}>Times New Roman </h2>
        <h2 style={{fontFamily: 'TimesNewRomanPS-BoldItalicMT'}}>TimesNewRomanPS-BoldItalicMT </h2>
        <h2 style={{fontFamily: 'TimesNewRomanPS-BoldMT'}}>TimesNewRomanPS-BoldMT </h2>
        <h2 style={{fontFamily: 'TimesNewRomanPS-ItalicMT'}}>TimesNewRomanPS-ItalicMT </h2>
        <h2 style={{fontFamily: 'TimesNewRomanPSMT'}}>TimesNewRomanPSMT </h2>
        <h2 style={{fontFamily: 'Trebuchet MS'}}>Trebuchet MS </h2>
        <h2 style={{fontFamily: 'Trebuchet-BoldItalic'}}>Trebuchet-BoldItalic </h2>
        <h2 style={{fontFamily: 'TrebuchetMS-Bold'}}>TrebuchetMS-Bold </h2>
        <h2 style={{fontFamily: 'TrebuchetMS-Italic'}}>TrebuchetMS-Italic </h2>
        <h2 style={{fontFamily: 'Verdana'}}>Verdana </h2>
        <h2 style={{fontFamily: 'Verdana-Bold'}}>Verdana-Bold </h2>
        <h2 style={{fontFamily: 'Verdana-BoldItalic'}}>Verdana-BoldItalic </h2>
        <h2 style={{fontFamily: 'Verdana-Italic'}}>Verdana-Italic </h2>
        <h2 style={{fontFamily: 'Zapf Dingbats'}}>Zapf Dingbats </h2>
        <h2 style={{fontFamily: 'ZapfDingbatsITC'}}>ZapfDingbatsITC </h2>
        <h2 style={{fontFamily: 'Zapfino'}}>Zapfino </h2>
        </ul>
    </div>

  
    </div>
    )
  }

export default MainFeaturedPost

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
