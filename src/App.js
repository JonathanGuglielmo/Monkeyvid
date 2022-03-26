// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";




function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=> {
    //cada vez que cambie el usuario lo detecta
    const unsuscribe = auth.onAuthStateChanged((userAuth)=> {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsuscribe;
  }, [dispatch])

  return (
    <div className={classes.root}>
      <Router>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/checkout' element={<Paypal />} />
              <Route path='/' element={<Home />} />
            </Routes>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111", 
    minHeight: "100vh"
  },
}));

export default App;
