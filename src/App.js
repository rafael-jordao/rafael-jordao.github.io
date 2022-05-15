import React from "react";
import Header from "./components/Header/Header";
import MainPhoto from "./assets/profileImage.png"
import Curriculo from "./assets/Curriculo.pdf"

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="mainContainer">
        <div className="textContainer">
          <p>Olá,</p>
          <h1>meu nome é Rafael Jordão</h1>
          <p>Desinger | Front-end Developer</p>
         <a href={Curriculo} download><button>Download CV</button></a>
        </div>

        <div className="photoContainer">
          <img className="mainPhoto" src={MainPhoto}></img>
        </div>
      </div>
    </div>
  )
};


export default App;
