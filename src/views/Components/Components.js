import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import Navigation from "components/navigation";
import image1 from "assets/img/simbiosis-fotos/foto-simbiosis1.jpg";

import styles from "assets/jss/material-kit-react/views/components.js";
import styles1 from "assets/jss/material-kit-react/views/profilePage.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle.js";

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);


export default function Components(props) {
  const classes1 = useStyles();
  // const { ...rest } = props;

  const classes = useStyles1();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );

  const classes2 = useStyles2();
  return (
    <div style={{ 
      position: "absolute",
      backgroundColor: "white",
      height: "320%",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundSize: "100%",
      width: "100%",

      // width: "100%",
      padddingTop: "1000px",
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
        <div style = {{marginTop: "100px"}} className={classes1.container}>
          <GridContainer>
            <GridItem>
            <div>
                    <img src={image1} alt="..." className={imageClasses} />
                  </div>
            </GridItem>
          </GridContainer>
        </div>

      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>  */}
      {/* <Footer /> */}
    </div>
  );
}
