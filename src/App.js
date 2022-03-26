// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';




function App() {
  const user = null;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        {
          !user ? (<Login />) : (
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/checkout' element={<Paypal />} />
              <Route path='/' element={<Home />} />
            </Routes>
          )
        }
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
