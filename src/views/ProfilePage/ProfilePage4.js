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
import profile from "assets/img/simbiosis-fotos/hibana.png";
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

export default function ProfilePage4(props) {
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
            {"Hibana (a.k.a. Marney Ackerman) (n.1997) is a Puerto Rican singer-songwriter and multi-instrumentalist who creates and produces indie-pop music. Having established herself as an electronic fusion music producer, her music combines sounds from various genres such as traditional and popular Japanese music, punk-rock, lo-fi genres and jazz. Her most recent endeavor is to establish herself as a koto player through her musical style and focus her current projects around the instrument. As an artist, Hibana uses moody, introspective, nostalgic soundscapes and lyrics, and combines them with contrasting imagery - sugary and bubbly with a creepy-cute vibe, vibrant computer graphics and Japanese anime-styled art. She also incorporates Harajuku kawaii street fashions to convey a “broken doll” concept - a metaphor that highlights topics relating to mental health, inequality, and the human condition:  “Beautiful and happy on the outside, dark and conflicted on the inside"}<br></br><br></br>
            {"Hibana began studying classical music at 8 years old. She composed her first tune at the age of 10, and wrote her first set of pop songs at the age of 13. Among these is “Songbird”, a featured track on her E*Motion EP, (released in 2016). After deciding on a career in music, she began taking pop vocal lessons from Estuardo Linde and incorporated her flute studies with Mindy Heinsohn into some of her songs."}<br></br><br></br>
            {"In 2015, she was a gold medalist in the World Championships of Performing Arts (WCOPA) in Long Beach, California in both the instrumentalist and self-accompanied categories. Marney went on to become the Grand Instrumental Champion of the World for her performance of Beatbox Flute. She also began her BA in Music Composition at the Puerto Rico Conservatory of Music (CMPR) under the tutelage of Manuel Ceide, where she refined her artistic style by furthering her general composition, arrangement and songwriting skills. She combined her studies in composition with studies in jazz theory and interpretation with Professor Elias Santos-Celpa (double-bassist) and Professor Norberto “Tiko” Ortiz (tenor saxophonist) and began teaching herself jazz vocals and scat singing, all while incorporating these new techniques into her own compositions."}<br></br><br></br>
            {"From 2016 to 2018, Hibana collaborated with local Puerto Rican punk and indie rock guitarist Ese_Mismo to form the duet H.E. (Hibana and Ese). Together they created songs around  improvisation and minimalism, using loop pedals, delays, and modal melodies, combined with rhythms from the folkloric Afro-Puerto Rican genre “bomba” to create eclectic and psychedelic rock. Hibana co-wrote and co-composed songs like “In Queued” and “Nirvana” along with Ese_Mismo. She joined the CMPR Big Band in 2017 as a singer, flutist and piccolo player, and through this was able to perform with internationally-acclaimed artists such as Miguel Zenon, Luis Bonilla and Charlie Sepulveda. She also had the opportunity to be the featured artist in two CMPR Jazz Festivals, singing jazz, bossa nova and funk music. The following year she released three singles “Oyasumi”, “Cotton Candy”, and Whispers."}<br></br><br></br>
            {"In 2019, as Hibana, Ackerman played at numerous festivals including Miramar Vive and Bitches’ Brew, a feminist event hosted by the Arquetipas Orchestra celebrating women in music and the Mexican holiday “The Day of the Dead”; playing her original songs, incorporating scat singing, singing in Japanese and the use of the traditional Japanese instrument “koto”. That same year she recorded the song “All the Way'' as the artist Marney Ackerman - a song made famous by Frank Sinatra and (later) Celine Dion in duet with Fidel Osorio for his debut Album -40-, which launched her career as a Jazz singer on the island, as she briefly sung jazz as a substitute for Ran Can Can PR Burlesque Show up until the COVID-19 pandemic."}<br></br><br></br> 
            {"In 2020 Hibana received her bachelor’s degree in Music Composition from the Conservatory of Music of Puerto Rico and was accepted into the master’s program in Creative Music Production at Catalyst Institute for Creative Arts and Technology. Her current artistic research revolves around the incorporation of the Japanese koto into her main musical projects while experimenting with her art via interactive livestreams on her Instagram: Hibana's (@hibanasound) Instagram profile • 287 photos and videos . Hibana is also working on her debut full-length album, Deeper Spaces, where she experiments with fusing sonorities of lo-fi, jazz, traditional Japanese music and nostalgic elements as a part of her masters program’s artistic research. She writes about her battles with depression, social injustices in her home country, self-empowerment, interpersonal conflicts and relationships and it is scheduled to be released in 2021."}<br></br><br></br>
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
