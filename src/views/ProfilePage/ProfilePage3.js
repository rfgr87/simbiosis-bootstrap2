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
import Parallax3 from "components/Parallax/Parallax3.js";

import image1 from "assets/img/decolonial-fotos/foto-piezaroy1.jpg";

import image2 from "assets/img/decolonial-fotos/foto-decolonial1.jpg";
import profile from "assets/img/decolonial-fotos/foto-diego31.png";

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

import styles from "assets/jss/material-kit-react/views/profilePage3.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle3.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage3(props) {
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
   <Parallax3  style = {{height: "20000px", backgroundAttachment: "fixed"}} small small image={require("assets/img/decolonial-fotos/foto-diego1.png")} />
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
                    <h3 className={classes.title}>Diego Villaseñor de Cortina</h3><br></br>
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
              <p>{"Diego Villaseñor (Videco) es compositor, improvisador, multi-instrumentista, filósofo y programador, cuya práctica e investigación se desarrolla en torno a los siguientes temas: creación colectiva, composición modular e inspirada en sistemas naturales (particularmente ecosistemas), ecoacústica, comprovisación, desarrollo de técnicas extendidas, politemporalidad, microtonalidad, síntesis sonora mediante instrumentos acústicos, ontología del proceso creativo-musical."}<br></br><br></br>
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

                          <iframe style={{
     display: "inline-block",
     position: "relative",
     width: "380px", 
     height: "260px", 
     border: 0,
     marginTop: "0%",
     marginLeft:  "0%"}} width="200px" height="150px" src="https://www.youtube.com/embed/s15OA9nZ7AY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


          
    <iframe style={{
    display: "inline-block",
    position: "relative",
    width: "380px", 
    height: "260px",  
    border: 0,
    marginTop: "0%",
    marginLeft:  "0%"}} width="200px" height="150px" src="https://www.youtube.com/embed/HA49X3KUaA8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe style={{
     display: "inline-block",
     position: "relative",
     width: "380px", 
     height: "260px", 
     border: 0,
     marginTop: "0%",
     marginLeft:  "0%"}} width="200px" height="150px" src="https://www.youtube.com/embed/S-Y4cWhUE5I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
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
