import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar.js";
import Header from "./Components/header.js";
import Intro from "./Components/Intro.js";
import Cards from "./Components/Cards.js";
function App() {
  return (
    <>
   
    <Navbar/>
    <Header/>
    <Intro/>
    <Cards />
    </>

  );
}

export default App;
