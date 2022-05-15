import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import ServiceCard from "./components/ServiceCard/ServiceCard";

const App = () => {

  return (
    <div className="App">
      <Header />
      <MainContent />

      <div className="services">
        <div className="">
          <h1 className="titleAboutMe">Serviços</h1>
        </div>
       
        <div className="DFlexContainer">
          <ServiceCard 
          title="Design Gráfico"
          paragraph="Some quick example text to build on the card title and make up the bulk of the card's content."/>
          <ServiceCard 
          title="Desenvolvimento Front-End"
          paragraph="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      
      </div>
    </div>
  )
};


export default App;
