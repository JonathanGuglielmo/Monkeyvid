import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import avatar from '../images/avatar.jpg';
import Plans from '../components/Plans';
import { StyledButton } from '../styled/styledcomponents';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const classes = useStyles();
  const history = useNavigate()
  const signout = () => {
    auth.signOut();
    history.push("/login")
  }
  return (
    <div className={classes.root}>
      <Header />
      <Typography variant='h3'>Editar Perfil</Typography>
      <div className={classes.info}>
        <img src={avatar} alt='avatar' />
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant='h6'>Mail usuario</Typography>
            <Typography className={classes.plansText} variant='h5' gutterBottom>Planes</Typography>
            <Plans cost={130}>Monkey Standard</Plans>
            <Plans cost={170}>Monkey Basic</Plans>
            <Plans wide="mediumWidth" color="gray" cost={250}>Monkey Premium</Plans>
            <StyledButton wide="fullWidth" onClick={signout}>Cerrar sesión</StyledButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    width: "80%",
    display: "flex",
    "& img": {
      height: "100px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px",
    },
  },
  plans: {
    width: "100%",
  },
  plansText: {
    borderBottom: "1px solid lightgray"
  },
}));

export default Profile