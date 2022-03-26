import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    //transparencia al hacer scroll en Y
    const hideHeader = () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    useEffect(()=> {
      window.addEventListener("scroll", hideHeader);
      // limpieza del EventListener una vez utilizado
      return ()=>window.removeEventListener("scroll", hideHeader)
    }, [])
  return (
    <AppBar position='sticky' elevation={0} className={`${classes.root} ${show && classes.transparent}`}>
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={()=>navigate.push("/")}>
            <img src={logo} alt="logo" className={classes.logo}/>
          </IconButton>
          <Avatar variant="square" style={{cursor: "pointer"}} onClick={()=>navigate.push("/profile")} />
        </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#111",
      top: 0,
      left: 0,
      right: 0,
    },
    transparent: {
      backgroundColor: "transparent"
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    logo: {
      width: "100px",
      cursor: "pointer",
    },
  }));

export default Header