import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 40,

    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: 27,
    marginRight: "10px",
  },

  title: {},
  grid: {
    marginBottom: 40,
  },
}));

function FullWidthGrid({ postsArray }) {
  const classes = useStyles();

  return (
    <>
      <Container>
        {postsArray.map((item) => {
          return (
            <Grid container spacing={3} className={classes.grid} id={item.id}>
              <Grid item xs={12} sm={6} className="gridBackgroundOne">
                <Paper
                  className={classes.paper}
                  elevation={0}
                  style={{ minWidth: "440px" }}
                >
                  <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.title}
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      marginBottom: "30px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography style={{ fontSize: "18px", textAlign: "start" }}>
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={item.value}
                style={{
                  backgroundImage: `url(${item.imageData})`,
                  backgroundSize: "cover",
                  minWidth: "450px",
                  minHeight: "350px",
                }}
              ></Grid>
            </Grid>
          );
        })}
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    postsArray: state.posts,
  };
};

export default connect(mapStateToProps)(FullWidthGrid);
