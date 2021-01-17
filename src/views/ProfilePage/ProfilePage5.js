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
import Parallax2 from "components/Parallax/Parallax2.js";

import image1 from "assets/img/decolonial-fotos/foto-piezaroy1.jpg";

import image2 from "assets/img/decolonial-fotos/foto-decolonial1.jpg";
import profile from "assets/img/decolonial-fotos/foto-daniel5.jpg";

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

import styles from "assets/jss/material-kit-react/views/profilePage5.js";
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
   <Parallax2  style = {{height: "20000px", backgroundAttachment: "fixed"}} small small image={require("assets/img/decolonial-fotos/foto-daniel1.jpg")} />
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
                    <h3 className={classes.title}>Daniel Flores Días</h3>
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
              {"Daniel Flores Días, Otavaleño. Sus estudios musicales los empezó a los 21 años en el Conservatorio Nacional de Música de Quito donde se formó en la especialidad de guitarra clásica y composición. Posteriormente, continuó su preparación en diversos centros de estudio incluyendo la universidad de Paris 8 (Francia), donde realizó una maestría financiado con una beca del gobierno de Ecuador así como también obtuvo una maestría dentro de la Universidad Internacional de la Rioja en Investigación musical."}<br></br><br></br>
              {"Actualmente se dedica a la docencia universitaria, creación e investigación. Sus composiciones han sido presentadas dentro y fuera del país. El trabajo compositivo lo dedica a la experimentación y a la búsqueda de una identidad sonora (no occidental) basada en elementos indígenas que han sabido mantener sus sonoridades a través del tiempo; es por eso que dedica su tiempo a la investigación y al análisis de la música ancestral en la comunidad de Kotama en Otavalo para con estos elementos experimentar y en un futuro proponer un sistema compositivo basado en la música originaria del país."}<br></br><br></br>          
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
                  url="https://soundcloud.com/daniel-flores-d-as/gracias-po-todo-daniel-flores-dias"
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
                  url="https://soundcloud.com/daniel-flores-d-as/camellando-shuk"
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
                      url="https://soundcloud.com/daniel-flores-d-as/runa-fractal-13"
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
                    url="https://soundcloud.com/daniel-flores-d-as/vientos-de-paz-daniel-flores-dias"
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
                  url="https://soundcloud.com/daniel-flores-d-as/runa-fractal-2"
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
                  url="https://soundcloud.com/daniel-flores-d-as/runa-fractal-11-fimac-cuenca"
                  ></ReactPlayer> 
      </GridItem>      
      </GridContainer>
        )
      },
                    {
                      tabButton: "Partituras",
                      // tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Textos",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
            </div>
    </div>
  );
}
