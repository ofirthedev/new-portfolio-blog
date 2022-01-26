import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Hidden from "@material-ui/core/Hidden";
import Bounce from "react-reveal/Bounce";
import Grid from "@material-ui/core/Grid";
import contactIllu from "../ills/sit.svg";
import contactIlluMobile from "../ills/sitmobile.svg";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 0,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 0,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const [message, setMessage] = useState("");

  const classes = useStyles();
  function sumbitted(event) {
    setError(false);
    event.preventDefault();
    if (name !== "" && lastName !== "" && email !== "" && message !== "") {
      setSubmitted(true);
    } else {
      setError(true);
    }
  }
  return (
    <section id="contact">
      <Grid
        container
        style={{ paddingBottom: "20px" }}
        className="contactGrid"
        alignItems="center"
      >
        <Grid item sm={6}>
          <Hidden smDown={true}>
            <img className="sit" alt="sit" src={contactIllu} />
          </Hidden>
          <Hidden xsUp={true}>
            <img
              className="sitmobile"
              alt="sitmobile"
              src={contactIlluMobile}
            />
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={{ display: "flex" }}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              {!submitted && (
                <Bounce>
                  <Typography style={{ paddingBottom: "20px" }} variant="h4">
                    Let's talk!
                  </Typography>
                  <form
                    onSubmit={sumbitted}
                    className={classes.form}
                    noValidate
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          onChange={(e) => setName(e.target.value)}
                          fullWidth
                          id="firstName"
                          label="First Name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          onChange={(e) => setLastName(e.target.value)}
                          label="Last Name"
                          name="lastName"
                          autoComplete="lname"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          placeholder="Tell me about your next project..."
                          multiline
                          onChange={(e) => setMessage(e.target.value)}
                          fullWidth
                          minRows={10}
                          maxRows={10}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      variant="outlined"
                      color="default"
                      className={classes.submit}
                    >
                      Send
                    </Button>
                    {error && (
                      <Typography>Some of the fields are missing!</Typography>
                    )}
                  </form>
                </Bounce>
              )}
              {submitted && (
                <div>
                  {" "}
                  <Typography variant="h5">
                    Thank you , form has been submitted!
                  </Typography>
                </div>
              )}
            </div>
          </Container>
        </Grid>
      </Grid>
    </section>
  );
}
