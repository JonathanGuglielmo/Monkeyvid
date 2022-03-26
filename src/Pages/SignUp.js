import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { StyledButton, StyledInput } from '../styled/styledcomponents';

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((authUser) => navigate.push("/"))
    .catch(err => alert(err.message))
  };

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(authUser => navigate.push("/"))
      .catch(err => alert(err.message))
    };

  return (
    <div className={classes.root}>
      <Typography variant='h5' align='left'>
        Iniciar Sesión
      </Typography>
      <form className={classes.form}>
        <StyledInput 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder='Email' 
          className={classes.email}
        />
        <StyledInput 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          type="password"
          placeholder='Contraseña' 
          className={classes.contraseña}
        />
        <StyledButton
        onClick={signIn}
        type='submit'
        wide='mediumWidth' 
        radius>
          Iniciar Sesión
        </StyledButton>
        <Typography variant='subtitle2'>
          Nuevo en Monkey Movies? {" "}
          <span 
          className={classes.signupLink}
          onClick={register}
          >
            Registrate. {" "}
          </span>
        </Typography>
      </form>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0,0,0,0.65)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    "& h5": {
      marginTop: theme.spacing(2),
      width: "70%",
    },
  },
  form: {
    width: "80%"
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  contraseña: {
    marginBottom: theme.spacing(4),
  },
  signupLink: {
    color: "fff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default SignUp