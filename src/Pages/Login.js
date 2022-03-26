import { IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import bgbanner from '../images/homebg.jpg'
import { StyledButton, StyledInput } from '../styled/styledcomponents';
import SignUp from "./SignUp";

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(false);
  return (
    <div className={classes.root}>
      <IconButton onClick={()=>navigate.push("/")}>
        <img src={logo} alt="logo" className={classes.logo}/>
      </IconButton>
      <StyledButton className={classes.session}>Iniciar Sesión</StyledButton>
      <div className={classes.info}> {
          !signIn ? (<SignUp />) : (
            <>
            <Typography variant='h4' gutterBottom>
              Peliculas ilimitadas, programas de TV y más.
            </Typography>
            <Typography variant='h5'>
              Miralo cuando quieras. Cancelalo cuando quieras.
            </Typography>
            <Typography variant='h6' gutterBottom>
              Listo para ver ? Introduce tu mail para crear o reiniciar tu membresia.
            </Typography>
            <div className={classes.inputBlock}>
              <StyledInput placeholder='Introduce tu mail'/>
              <StyledButton wide='medium' onClick={() => setSignIn}>EMPEZEMOS</StyledButton>
          </div>
          </>
          )}
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundImage: `url(${bgbanner})`,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "100px",
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
    inputBlock: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
  },
}));

export default Login