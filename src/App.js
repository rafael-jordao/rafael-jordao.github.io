import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      
      {/* <div className="aboutMe">
        <div className="textContainer">
          <h1 className="titleAboutMe">Sobre mim</h1>
        </div>


      </div> */}
    </div>
  )
};


export default App;
