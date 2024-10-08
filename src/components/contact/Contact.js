import React, { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Swal from 'sweetalert2';
import ResumePDF from './../../assets/Deepali-Nagwade-Resume.pdf';
import emailjs from '@emailjs/browser';
import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Let's Connect";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8bezxog', 'template_jmsk313', form.current, 'knwNTK4YU4K30HYMd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have sent an email!',
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                className={classes.formfield}
              />
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                className={classes.formfield}
              />
              <TextField
                id="outlined-password-input"
                label="Message"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                className={classes.formfield}
              />
              <button type="submit" value="Send" className="submit-btn">
                <Typography component='span'> Send Message</Typography>
              </button>
              <a 
                href={ResumePDF} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="submit-btn"
              >
                <Typography component='span'>View Resume</Typography>
              </a>
            </form>
          </div>
          <h3 className="contact_msg">
            {greetings}
          </h3>
        </div>
      </Container>
    </section>
  );
};