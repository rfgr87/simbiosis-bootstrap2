import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

import image1 from "assets/img/decolonial-fotos/foto-roy-pieza-roy1.jpg";

import image2 from "assets/img/decolonial-fotos/foto-roy-pieza-roy1.jpg";
import profile from "assets/img/simbiosis-fotos/julioquinone.png";
import image3 from "assets/img/decolonial-fotos/foto-roy-aurora2.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/decolonial-fotos/foto-roy-escardillo.png";
import work2 from "assets/img/decolonial-fotos/foto-roy-metamusica1.jpg";
import work3 from "assets/img/decolonial-fotos/foto-roy-metamusica2.jpg";
import work4 from "assets/img/decolonial-fotos/foto-roy-numeritos.png";
import work5 from "assets/img/decolonial-fotos/foto-roy-garabato1.png";
// import work6 from "assets/img/decolonial-fotos/foto-roy-triangulo.jpg";
import work6 from "assets/img/decolonial-fotos/foto-roy-fractalidad-criolla.png";
import work7 from "assets/img/decolonial-fotos/foto-roy-kreppy.jpg";
import work8 from "assets/img/decolonial-fotos/foto-roy-pacto-blanco-criollo.png";
// import work10 from "assets/img/decolonial-fotos/foto-roy-triangulo.jpg";
import work9 from "assets/img/decolonial-fotos/foto-roy-analogias-anatopicas.jpg";
import work10 from "assets/img/decolonial-fotos/foto-roy-primitives.png";
// import work11 from "assets/img/decolonial-fotos/foto-roy-pacto-blanco-criollo.png";
import work12 from "assets/img/decolonial-fotos/foto-roy-abecedario.png";
import work13 from "assets/img/decolonial-fotos/foto-roy-numeritosorquesta.jpg";

import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
// import styles2 from "assets/jss/material-kit-react/views/profilePage1.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle1.js";

const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage9(props) {
  const classes = useStyles1();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgGallery);

  const classes2 = useStyles2();
  return (
    <div style={{ 
      position: "absolute",
      backgroundColor: `white`,
      height: "1900px",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      padddingRigth: "45px",
      paddingBottom: "200px",
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
        <div>  {/* <div style = {{border: "black", borderWidth: "3px", borderStyle: "outset",backgroundColor: "white", width: "75%", marginLeft: "12.5%", marginTop: "15%"}}> */}
      <div>
        <div>
            <GridContainer justify="left" >
              <GridItem xs={12} sm={12} md={6}>
                <div >
                  <div>
                    <img style = {{marginLeft: "2%", marginTop: "20%", position: "relative", display: "block", width: "70%", height: "70%"}} src={profile} alt="..." />
                  </div>
                  </div>
                  <div>
                    <h3 style={{color: "black", marginLeft:  "2%", dislay: "block", position: "relative", fontFamily: 'AmericanTypewriter-CondensedLight', fontSize: "30px", fontWeight: "600"}}>Julio Elvin Quiñones Santiago</h3>
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
              </GridItem>
            </GridContainer>
            <div >
              <p style={{color: "black", marginLeft:  "2%", dislay: "block", position: "relative", fontFamily: 'AmericanTypewriter-CondensedLight', fontSize: "15px", fontWeight: "600", width:"75%"}}>
              {"Julio Elvin Quiñones Santiago Compositor, saxofonista y director puertorriqueño; conocido por su música convincente, expresiva y socialmente consciente, Quiñones Santiago escribe obras que están imbuidas de pasión, intuición y representan todos los aspectos de su identidad. Desde un gran conjunto hasta un solo y obras de cámara, su enfoque en desarrollar un estilo abstracto que reconozca su identidad puertorriqueña [desde la música folclórica, la música popular, los ritmos caribeños, la literatura nacional e internacional, hasta la agitación política y social] está siempre presente."}<br></br><br></br> 
              {"Ha tenido varias colaboraciones con importantes conjuntos en la isla y en el extranjero. Su pieza para banda de viento: Elegía (en memoria de las víctimas del huracán María) se estrenó la Banda de Conciertos del Conservatorio de Música de PR (CMPR). The Young Artists Concerts Orchestra de PR encargó su pieza: Mosaico. Su colaboración más reciente fue con el Omnibus Ensemble de Uzbekistán para su pieza: [añorando una] naturaleza perdida."}<br></br><br></br>              
              {"Su música se ha interpretado en EE. UU., Europa; algunos de estos compromisos son: el festival highSCORE, Going Viral Non-Festival y el ClarinetFest 2017 de la International Clarinet Association."}<br></br><br></br>              
              {"Quiñones también disfruta trabajar con artistas de otras disciplinas como la Asociación de Danza APRODANZA, que le encargó su pieza de danza: A Julia de Burgos. Como parte de dicha colaboración debutó como director estrenando su propia pieza, así como Entre : Meses con el CMPR Pierrot Ensemble. Después de los compromisos de dirección han incluido la Banda de Conciertos de CMPR y la Orquesta de Conciertos de Jóvenes Artistas."}<br></br><br></br>
              {"Como saxofonista, ha realizado conciertos de música nueva y regular con la Banda de Conciertos CMPR y la Sinfónica de Viento de Puerto Rico."}<br></br><br></br>
              {"Julio actualmente está completando su maestría en Composición Musical en el Conservatorio Peabody con Michael Hersch. Tiene una licenciatura en Composición Musical del Conservatorio de Música de Puerto Rico, donde estudió composición y orquestación con Alfonso Fuentes."}<br></br><br></br>
              {"También es co-creador y editor del podcast de música clásica puertorriqueña: Conversaciones Simbióticas Podcast y creador, narrador, editor y productor del audiolibro-podcast: Textos Audibles Podcast."}<br></br><br></br>
              </p>
              </div>        
            </div>      
          </div>
        </div>
{/*        

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
                          
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>

                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>

                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>

                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>


                          </GridItem>
                         
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Textos",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                          
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                         
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer> */}
            </div>
  );
}
