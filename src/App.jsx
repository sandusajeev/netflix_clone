import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "./requests";


function App() {
  

  return (
    <>
      <Nav/>
      <Banner fetchurl={requests.fetchNetflixOriginals}/>
      <Row title={'TRENDING'} fetchurl={requests.fetchTrending}/>
      <Row title={'NETFLIX ORIGINALS'} fetchurl={requests.fetchNetflixOriginals}/>
      <Row title={'TOP RATED'} fetchurl={requests.fetchTopRated}/>
      <Row title={'ACTION MOVIES'} fetchurl={requests.fetchActionMovies}/>
      <Row title={'COMEDY MOVIES'} fetchurl={requests.fetchComedyMovies}/>
      <Row title={'HORROR MOVIES'} fetchurl={requests.fetchHorrorMovies}/>
      <Row title={'ROMANTIC MOVIES'} fetchurl={requests.fetchRomanceMovies}/>
      <Row title={'DOCUMENTERIES'} fetchurl={requests.fetchDocumentaries}/>
            
    </>
  )
}

export default App


