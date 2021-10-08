import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { editPost, deletePost } from "../actions";
import { Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Typography } from "@material-ui/core";
import "./Manage.css";
import { HashLink } from "react-router-hash-link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function ManagePosts({ postsArray, editPost, deletePost }) {
  const history = useHistory();
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  const editHandler = (id) => {
    editPost(id);
    history.push("/edit");
  };

  const deleteHandler = (id) => {
    console.log(id);
    deletePost(id);
    // history.push("/");
  };
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Link to="/create" style={{ textDecoration: "none" }}>
          <Button
            style={{ marginBottom: "20px", backgroundColor: "#003366" }}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Ajouter un article
          </Button>
        </Link>
      </Grid>
      {postsArray.map((post) => {
        return (
          <div className={classes.demo} key={post.id}>
            <List dense={dense}>
              <ListItem>
                <HashLink
                  smooth
                  to={`/#${post.id}`}
                  style={{
                    color: "#808080",
                    textDecoration: "none",
                  }}
                >
                  <ListItemText primary={post.title} id="titleManage" />
                </HashLink>
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => deleteHandler(post.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton edge="end">
                    <Typography
                      variant="h6"
                      style={{ fontSize: "15px" }}
                      onClick={() => editHandler(post.id)}
                    >
                      modifier
                    </Typography>
                    <ChevronRightIcon
                      onClick={() => editHandler(post.id)}
                    ></ChevronRightIcon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
        );
      })}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    postsArray: state.posts,
  };
};

export default connect(mapStateToProps, { editPost, deletePost })(ManagePosts);
