import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Rows from '../components/Rows';
import requests from '../Request';


const Home = () => {
  const classes = useStyles();
  return (
    <div>
    <Header />
    <Banner />
    <Rows title="TOP PELICULAS" fetchUrl={requests.fetchTopRated} isLargeRow/>
    <Rows title="ORIGINALES DE NETFLIX" fetchUrl={requests.fetchNetflixOriginals}/>
    <Rows title="TERROR" fetchUrl={requests.fetchHorrorMovies}/>
    <Rows title="ACCIÓN" fetchUrl={requests.fetchActionMovies}/>
    <Rows title="ROMANCE" fetchUrl={requests.fetchRomanceMovies}/>
    <Rows title="COMEDIA" fetchUrl={requests.fetchComedyMovies}/>
    <Rows title="DOCUMENTALES" fetchUrl={requests.fetchTopRated}/>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    minHeight: "100vh"
  },
}));

export default Home