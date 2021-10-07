import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";
import { addPost } from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { editPost } from "../actions";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginTop: 30,
  },
  field: {
    marginTop: 25,
    marginBottom: 10,
  },
  container: {
    marginTop: 35,
  },
}));

function CreatePost({ addPost }) {
  const history = useHistory();

  const classes = useStyles();
  const [postData, setPostData] = useState({});

  const titleHandler = (e) => {
    setPostData({ ...postData, title: e.target.value });
  };

  const textHandler = (e) => {
    setPostData({ ...postData, text: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addPost(postData);
    history.push("/");
  };

  return (
    <>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.field}></Typography>
        <form onSubmit={submitHandler}>
          <TextField
            className={classes.field}
            id="outlined-secondary"
            label="titre"
            variant="outlined"
            color="primary"
            fullWidth
            onChange={titleHandler}
            required
          />
          <TextField
            className={classes.field}
            id="outlined-secondary"
            variant="outlined"
            color="primary"
            fullWidth
            placeholder="texte..."
            multiline
            rows={7}
            onChange={textHandler}
            required
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<SaveIcon />}
            type="submit"
          >
            sauvegarder
          </Button>

          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              annuler
            </Button>
          </Link>
        </form>
      </Container>
    </>
  );
}

export default connect(null, { addPost, editPost })(CreatePost);
