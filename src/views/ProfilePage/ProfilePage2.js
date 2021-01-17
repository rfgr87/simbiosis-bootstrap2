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

import image1 from "assets/img/decolonial-fotos/foto-piezaroy1.jpg";

import image2 from "assets/img/decolonial-fotos/foto-decolonial1.jpg";
import profile from "assets/img/decolonial-fotos/foto-renzo3.jpg";

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

import styles from "assets/jss/material-kit-react/views/profilePage2.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle2.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage2(props) {
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
   <Parallax2  style = {{height: "20000px", backgroundAttachment: "fixed"}} small image={require("assets/img/decolonial-fotos/foto-renzo1.jpg")} />
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
                    <h3 className={classes.title}>Renzo Filinich</h3>
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
              {"[Renzo Filinich Orozco (Lima 1978) Magister en Artes Mediales / Doctorando en Estudios Interdisciplinarios / Master in Media Arts / PhD in Interdisciplinary Studies"}<br></br><br></br>
        {"Mi interes surge en la investigacion y produccion con nuevas tecnologías en el arte, con el objetivo de desarrollar nuevos campos interactivos y cognitivos del espectador, así como la representación espacial del sonido y la imagen por medio del uso de interfaces gestuales de control y performance."}<br></br><br></br>
        {"En mi trabajo abordo distintos aspectos del lenguaje en el arte contemporaneo, como la instalacion, la performance y la improvisacion. Fui miembro y coordinador de la Comunidad Electroacustica de Chile CECh 2010 - 2018."}<br></br><br></br>
        {"A su ves, he mostrado mis obras e investigaciones en diversos Festivales y coloquios en: Austria, Portugal, Colombia, Argentina, Mexico, España, Inglaterra, Francia, Peru y Chile. Actualmente trabajo como docente e investigador de nuevos medios para Latinoamerica."}<br></br><br></br>
        {"My Interest arises in the research and production with new technologies in art, with the aim of developing new interactive and cognitive fields of the viewer, as well as the spatial representation of sound and image through the use of gestural control and performance interfaces."}<br></br><br></br>
        {"In my work I address different aspects of language in contemporary arts, such as installation, performance and improvisation. I was a member and coordinator of the Electro-acoustic Community of Chile CECh 2010 - 2018. In turn, I have shown my works and research in various festivals and colloquia in: Austria, Portugal, Colombia, Argentina, Mexico, Spain, England, France, Peru and Chile."}<br></br>
        {"I currently work as a teacher and researcher of new media for Latin America."}<br></br>
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

    <iframe  style = {{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3782459298/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/album/7-ensayos-sobre-la-cosmovisi-n-andina">7 Ensayos sobre la Cosmovisión Andina by Renzo Filinich</a></iframe>    
    
    <iframe  style = {{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/track=4156088800/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/track/esto-no-es-s-ntesis-es-s-ncresis">Esto no es Síntesis, es Síncresis! by Renzo Filinich</a></iframe>      
     
    <iframe  style = {{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2117347669/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/album/ondas-migratorias">Ondas Migratorias by Renzo Filinich</a></iframe>
   
    <iframe  style = {{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/track=1069000977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/track/a-tu-memoria">A tu Memoria by Renzo Filinich</a></iframe>
  
      <iframe  style = {{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/track=3761010274/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/track/metasistema-1-homenaje-a-roland-kayn">Metasistema 1- Homenaje a Roland Kayn by Renzo Filinich</a></iframe>    
     
       <iframe style = {{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/track=1027233157/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/track/pulsares-para-piano-y-electronica">Pulsares para piano y electronica by Renzo Filinich</a></iframe> 

                       
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
