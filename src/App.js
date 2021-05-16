import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.js";
import Header from "./Components/header.js";
import Intro from "./Components/Intro.js";
import Cards from "./Components/Cards.js";
import Footer from "./Components/footer.js";
function App() {
  return (
    <>
   
    <Navbar/>
    <Header/>
    <Intro/>
    <Cards />
    <Footer />
    </>

  );
}

export default App;
