import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
// import Footer2 from "../components/Footer2";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";
import { addPost, editPost, replacePost } from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginTop: 30,
    backgroundColor: "#003366",
  },
  field: {
    marginTop: 25,
    marginBottom: 10,
  },
  container: {
    marginTop: 25,
  },
}));

function CreatePost({ posts, postId, replacePost }) {
  const history = useHistory();
  const [postObject, setPostObject] = useState(
    posts.filter((post) => post.id === postId)
  );
  const [editedTitle, setEditedTitle] = useState(postObject[0].title);
  const [editedText, setEditedText] = useState(postObject[0].text);
  const [editedPost, setEditedPost] = useState({});

  const classes = useStyles();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    setEditedPost({
      ...editedPost,
      ...postObject[0],
      title: editedTitle,
      text: editedText,
    });
  }, [editedTitle, editedText]);

  const submitHandler = (e) => {
    e.preventDefault();
    replacePost(editedPost);
    history.push("/");
  };

  return (
    <>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.field}>
          Modifier votre article
        </Typography>
        <form onSubmit={submitHandler}>
          <TextField
            className={classes.field}
            id="outlined-secondary"
            label="titre"
            variant="outlined"
            color="primary"
            fullWidth
            onChange={(e) => setEditedTitle(e.target.value)}
            value={editedTitle}
            required
          />
          <TextField
            className={classes.field}
            id="outlined-secondary"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={7}
            onChange={(e) => setEditedText(e.target.value)}
            value={editedText}
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

          <Link to="/manage">
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
      {/* <Footer2 /> */}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    postId: state.editedPostId,
  };
};
export default connect(mapStateToProps, { addPost, replacePost })(CreatePost);
