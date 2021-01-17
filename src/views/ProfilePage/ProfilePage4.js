import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";


// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax3 from "components/Parallax/Parallax3.js";

import image1 from "assets/img/decolonial-fotos/foto-piezaroy1.jpg";

import image2 from "assets/img/decolonial-fotos/foto-decolonial1.jpg";
import profile from "assets/img/decolonial-fotos/foto-felipe7.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage4.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle2.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage4(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgGallery);

  const classes2 = useStyles2();
  return (
    <div>
       <Header
        brand="Decolonial Records"
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />
   <Parallax3  style = {{height: "20000px", backgroundAttachment: "fixed"}} small small image={require("assets/img/decolonial-fotos/foto-felipe1.png")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container} style = {{paddingBottom: "80px"}}>
            <GridContainer justify="left" >
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Felipe Corredor Tréllez</h3><br></br>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                {"Felipe Corredor-Téllez (1988)"}<br></br><br></br>
                {"Compositor, arreglista y artista sonoro egresado del programa de arte musicales con énfasis en composición y arreglos de la Facultad de Artes ASAB de la Universidad Distrital Francisco José de Caldas en Bogotá y Magister en composición de la Universidad EAFIT en Medellín."}<br></br><br></br> 
                {"Algunas de sus composiciones son una reflexión sobre las múltiples maneras de combinar lenguajes musicales colombianos de tradición popular con estéticas compositivas de tipo académico. Sus obras abarcan formatos solistas, duetos, pequeños ensambles con y sin soporte fijo y ha explorado también el tratamiento sonoro multicanal y la instalación sonora."}<br></br><br></br>
                {"Ha publicado dos artículos académicos que relatan su experiencia como compositor e investigador y abordan con detalle sus obras y una memoria sobre una ponencia de estéticas del análisis musical, tomando como ejemplo también su música."}<br></br><br></br>
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
      <div>
      <GridContainer justify="center">
              <GridItem  className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="black"
                  tabs={[
                    {
                      tabButton: "Música",
                      // tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem >
                          <ReactPlayer  
                         style={{
                          display: "inline-block",
                          position: "relative",
                       
                          border: 0,
                          marginTop: "0%",
                          marginLeft:  "0%"}} 
                          width="80%"
                  height="20%"
                          url="https://soundcloud.com/felipecorredortellez/paso-en-el-litoral-pacifico"
       ></ReactPlayer>

                      <ReactPlayer   
                      style={{
                        display: "inline-block",
                        position: "relative",
                       
                        border: 0,
                        marginTop: "0%",
                        marginLeft:  "0%"}} 
                        width="80%"
                  height="20%"
        url="https://soundcloud.com/felipecorredortellez/la-vuelta-andina"
       ></ReactPlayer>  
                    <ReactPlayer  
                    style={{
                      display: "inline-block",
                      position: "relative",
                     
                      border: 0,
                      marginTop: "0%",
                      marginLeft:  "0%"}} 
                      width="80%"
                      height="20%"
                    url="https://soundcloud.com/felipecorredortellez/el-tao-joropero-piano"
       ></ReactPlayer>  
                    <ReactPlayer  
                   style={{
                    display: "inline-block",
                    position: "relative",
                   
                    border: 0,
                    marginTop: "0%",
                    marginLeft:  "0%"}} 
                    width="80%"
                    height="20%"
        url="https://soundcloud.com/felipecorredortellez/el-tao-joropero-percu-version"
       ></ReactPlayer>  
                  <ReactPlayer 
                  style={{
                    display: "inline-block",
                    position: "relative",
                 
                    border: 0,
                    marginTop: "0%",
                    marginLeft:  "0%"}} 
                    width="80%"
                  height="20%"
        url="https://soundcloud.com/felipecorredortellez/lamento-del-ganao"
       ></ReactPlayer>   
                <ReactPlayer  
                style={{
                  display: "inline-block",
                  position: "relative",
                
                  border: 0,
                  marginTop: "0%",
                  marginLeft:  "0%"}} 
                  width="80%"
                  height="20%"
        url="https://soundcloud.com/felipecorredortellez/morena-de-negros-cabellos"
       ></ReactPlayer> 
      </GridItem>      
      </GridContainer>
        )
      }
                  // {
                    //   tabButton: "Partituras",
                    //   // tabIcon: Palette,
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work1}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work2}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work3}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work4}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work5}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // },
                    // {
                    //   tabButton: "Textos",
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work4}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={studio3}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work2}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work1}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={studio1}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // }
                  ]}
                />
              </GridItem>
            </GridContainer>
            </div>
    </div>
  );
}
