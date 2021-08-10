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
import profile from "assets/img/simbiosis-fotos/luis-fernando.png";



import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
// import styles2 from "assets/jss/material-kit-react/views/profilePage1.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle1.js";

const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage2(props) {
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
                    <h3 style={{color: "black", marginLeft:  "2%", dislay: "block", position: "relative", fontFamily: 'AmericanTypewriter-CondensedLight', fontSize: "30px", fontWeight: "600"}}>Luis Fernando Ruiz-Pacheco</h3>
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
              {"Luis Fernando Ruiz-Pacheco (n.1992) compositor de origen peruano, criado y educado en la ciudad de Arequipa. Empezó su formación como compositor de manera autodidacta a los 11 años de edad. Posteriormente cursó los estudios de Formación Básica y de Formación Superior en la Escuela Superior de Música Luis Duncker Lavalle (ahora Conservatorio Regional de Música), de la cual es ahora egresado en la especialidad de Artista Profesional con mención en Dirección Musical y en el que se ha desempeñado como docente en algunas ocasiones. En forma paralela a los estudios musicales, estudió la carrera de Derecho en la Universidad Católica San Pablo, obteniendo el grado académico de bachiller y el título profesional de abogado. Por otro lado, está adscrito al Círculo de Compositores del Perú (CIRCOMPER) y es miembro co-fundador del Círculo de Compositores Opus XXI-Arequipa."}<br></br><br></br>
              {"Sus composiciones se abarcan desde las piezas de corta duración hasta las obras orquestales y sinfónico-corales. Ha estrenado con la Orquesta Filarmónica de la Universidad Católica San Pablo, en la cual también fue violinista, las siguientes obras: Segunda Sinfonía Pequeña Fantasía (2009), Suite Dante en el Infierno (2011), Pater Noster (2012), Misa en Do mayor (2015) y Vals rapsódico (2017), todas bajo la dirección y apoyo del maestro Augusto Vera Béjar. Asimismo, ha estrenado la obra El Laurel con la Young Artists Concert Orchestra (YACOPR) de Puerto Rico así como también ha estrenado obras en Estados Unidos. Asimismo, también se desempeñó como violinista en la Orquesta Sinfónica Juvenil de Puerto Rico. Recibió el encargo de componer la obra sinfónica Escenas literarias para ser estrenada por la Orquesta Filarmónica de Sofía en Bulgaria, pero a causa del COVID 19 no se pudo concretar el proyecto por lo que se espera que éste se lleve a cabo el próximo año 2021."}<br></br><br></br>
              {"Actualmente se encuentra estudiando el Bachillerato en Composición en el Conservatorio de Música de Puerto Rico con el Prof. Alfonso Fuentes y además se desempeña como instructor de violín y viola en el programa Música 100x35 (El Sistema), el cual se orienta a la enseñanza de música a la población infantil-juvenil de bajos recursos en Puerto Rico."}<br></br><br></br>
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
