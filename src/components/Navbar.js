import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import LocalLibraryRoundedIcon from "@material-ui/icons/LocalLibraryRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 95,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "fantasy",
  },
  homePage: {
    marginRight: 20,
  },
}));

export default function ButtonAppBar({ sendTheme }) {
  const classes = useStyles();
  const [theme, setTheme] = useState("lightTheme");

  const themeHandler = () => {
    if (theme === "lightTheme") {
      setTheme("darkTheme");
      sendTheme("darkTheme");
    }
    if (theme === "darkTheme") {
      setTheme("lightTheme");
      sendTheme("lightTheme");
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              style={{ color: "white" }}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <LocalLibraryRoundedIcon />
            </IconButton>
          </Link>
          <Link
            to={{
              pathname:
                "https://www.facebook.com/FR.France.fr/?brand_redir=151406801552581",
            }}
            target="_blank"
          >
            <IconButton
              style={{ color: "white" }}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <FacebookIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Voyagez en France !
          </Typography>
          {/* <Link to="/services" style={{ color: "white" }}>
            <Button color={"inherit"}>خدمات</Button>
          </Link>
          <Link to="/jobs" style={{ color: "white" }}>
            <Button color="inherit">توظيف</Button>
          </Link> */}

          <Link to="/manage" style={{ color: "white", textDecoration: "none" }}>
            <Button color="inherit">Gérer</Button>
          </Link>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit">Message</Button>
          </Link>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Button color="inherit" className={classes.homePage}>
              Accueil
            </Button>
          </Link>
          <Button
            variant="contained"
            size="small"
            onClick={themeHandler}
            style={{ borderRadius: "60px" }}
          >
            {theme === "lightTheme" ? <Brightness2Icon /> : <WbSunnyIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
