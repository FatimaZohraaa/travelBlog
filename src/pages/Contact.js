import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginTop: 30,
  },
  field: {
    marginTop: 15,
    marginBottom: 10,
  },
  container: {
    marginTop: 45,
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.field}>
          Envoyez-nous un message!
        </Typography>
        <TextField
          className={classes.field}
          id="outlined-secondary"
          label="objet"
          variant="outlined"
          color="primary"
          fullWidth
        />
        <TextField
          className={classes.field}
          id="outlined-secondary"
          variant="outlined"
          color="primary"
          fullWidth
          placeholder="message..."
          multiline
          rows={7}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          fullWidth
        >
          envoyer
        </Button>
      </Container>
    </>
  );
}

export default Contact;
