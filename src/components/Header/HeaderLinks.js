/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link to="/" className={classes.navLink}>
              Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="/sobrenosotros" className={classes.navLink}>
              Sobre Nosotros
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Compositores"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          // buttonIcon={Apps}
          dropdownList={[
        <Link to={"/pedrofranco"} className={classes.dropdownLink}>
              Pedro Emanuel Franco Fraticelli
        </Link>,
        <Link to={"/luisfernando"} className={classes.dropdownLink}>
           Luis Fernando Ruiz-Pacheco
        </Link>,
        <Link to={"/kevinjomar"} className={classes.dropdownLink}>
            Kevin Jomar Rivera Calderón
        </Link>,
         <Link to={"/hibana"} className={classes.dropdownLink}>
         Hibana (a.k.a. Marney Ackerman)
        </Link>,
         <Link to={"/josuevera"} className={classes.dropdownLink}>
         Josué Vera
        </Link>,
        <Link to={"/jaimerivera"} className={classes.dropdownLink}>
          Jaime “Flauta” Rivera González
        </Link>,
        <Link to={"/karinarodriguez"} className={classes.dropdownLink}>
          Karina “Del Mar” Rodríguez 
        </Link>,
        <Link to={"/agustinmunoz"} className={classes.dropdownLink}>
          Agustín Muñoz Ríos
        </Link>,
        <Link to={"/julioquinones"} className={classes.dropdownLink}>
        Julio Elvin Quiñones Santiago
        </Link>,
        <Link to={"/emmanuelsegarra"} className={classes.dropdownLink}>
        Emmanuel Segarra Ortiz
        </Link>
        ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link to="/medios" className={classes.navLink}>
              Medios
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link to="/articulos" className={classes.navLink}>
              Articulos
        </Link>
      </ListItem>

      
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/simbiosispr"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/simbiosispr/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
