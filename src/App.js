import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from"react-particles-js";
import Navbar from "./Components/Navbar.js";
import Header from "./Components/header.js";
import Intro from "./Components/Intro.js";
import Cards from "./Components/Cards.js";
import Footer from "./Components/footer.js";
import Form from "./Components/form.js";
function App() {
  return (
    <>
   <Particles
   params={{
     particles:{
       number:{
         value:30,
         density:{
           enable:true,
           value_area:900
         }
       },
       shape:{
         type:"star",
         stroke:{
           width:6,color:"#fff"
         }
       }
     }
   }}
     />
    <Navbar/>
    <Header/>
    <Intro/>
    <Cards />
    <Form />
    <Footer />
    </>

  );
}

export default App;
