import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../Request';


const Home = () => {
  const classes = useStyles();
  return (
    <div>
    <Header />
    <Banner />
    <Row title="TOP PELICULAS" fetchUrl={requests.fetchTopRated} isLargeRow/>
    <Row title="ORIGINALES DE NETFLIX" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="TERROR" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="ACCIÓN" fetchUrl={requests.fetchActionMovies}/>
    <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="COMEDIA" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="DOCUMENTALES" fetchUrl={requests.fetchTopRated}/>
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