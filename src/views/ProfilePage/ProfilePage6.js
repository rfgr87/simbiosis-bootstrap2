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
import profile from "assets/img/simbiosis-fotos/jaimerivera.png";

import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
// import styles2 from "assets/jss/material-kit-react/views/profilePage1.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle1.js";

const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage6(props) {
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
                    <h3 style={{color: "black", marginLeft:  "2%", dislay: "block", position: "relative", fontFamily: 'AmericanTypewriter-CondensedLight', fontSize: "30px", fontWeight: "600"}}>Jaime “Flauta” Rivera González</h3>
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
              {"Jaime “Flauta” Rivera González, de cuna aguadeña en la isla de Puerto Rico fue iniciado a la música por su tío Frank Rivera al performance de la flauta. A los doce años decide que quiere ser músico esperando el día de su graduación de la escuela. Habiendo participado en múltiples actividades con agrupaciones escolares y otras independientes de índole popular, su maestro lo introduce, a la edad de dieciséis años, en la música clásica y comienza su formación como estudiante y músico solista y de orquesta en la Universidad Inter Americana, recinto de San Germán."}<br></br><br></br>
            {"Como parte de su carrera, Jaime ha participado de múltiples eventos de diversas categorías como lo ha sido recitales de estudiantes, conciertos de orquesta, participación en el coro y conjuntos de cámara durante su Bachillerato. Grupos de varios géneros lo han contratado como músico de sesión, como lo fue orquestas de salsa, conjuntos de Jazz, conjuntos de música típica, entre otros. Al graduarse de bachillerato, Rivera tuvo la oportunidad de servir como profesor en el departamento de música de su alma máter, realizando varios conciertos como compositor, y como evaluación de sus cursos de composición y conjunto de música experimental."}<br></br><br></br>
            {"Actualmente, Jaime Rivera cursa su maestría en ejecución musical en el Conservatorio de Música de Puerto Rico buscando nuevas oportunidades en la ciudad de San Juan. Además de trabajar en nuevos repertorios, ha creado su nuevo proyecto “El Arte de Escuchar” que intenta llevar un poco de conciencia sonora a los jóvenes que buscan música para ellos mismos, enseñándoles que hay una gran diversidad por descubrir la cual tiene el potencial de mostrar aspectos de otras culturas que pueden enriquecerles grandemente; y más el aspecto de escuchar música, no solo por gusto, pero por curiosear y por aprender a extraer información."}<br></br><br></br>
            {"Además, se encuentra trabajando con su próxima producción discográfica, llamada “Tierra Blanca”, obra llena de variedad de conjuntos de cámara con piezas, generalmente, con flauta solista. Entre los conjuntos acompañantes se encuentran: conjunto de cuerdas, quinteto de vientos madera, flauta y piano, flauta y guitarra, y flauta sola con efectos electroacústicos. Dentro de las capas de diversidad que Rivera ha explorado, además, cada pieza tiene como elemento aspectos que caracterizan varios géneros en términos rítmicos, armónicos y/o melódicos."}<br></br><br></br>
            {"En cuanto a proyectos futuros, se encuentra trabajando en su página web jaimeflauta.com donde estará compartiendo su perfil como flautista, compositor y maestro, tales como discografía, blog, y enlaces hacia el impacto que esta organización espera efectuar, en propósito realzar la conciencia sonora. "}<br></br><br></br>
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
