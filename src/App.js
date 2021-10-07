import React, { useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CreatePost from "./pages/CreatePost";
import ManagePosts from "./pages/ManagePosts";
import EditPost from "./pages/EditPost";
import { Grid } from "@material-ui/core";
import Footer from "./components/Footer";

const darkTheme = createTheme({ palette: { type: "dark" } });
const lightTheme = createTheme({ palette: { type: "light" } });

function App() {
  const [theme, setTheme] = useState("lightTheme");

  const getTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Navbar sendTheme={getTheme} />
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          style={{ minHeight: "83.8vh" }}
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

export default App;
