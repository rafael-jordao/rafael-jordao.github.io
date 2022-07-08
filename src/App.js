import React from "react";
import FormField from "./components/FormField/FormField";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import ServiceSectors from "./components/ServicesSector/ServicesSector";


const App = () => {
  const home = React.useRef(null);
  const services = React.useRef(null);
  const contact = React.useRef(null);

  const scrollToSectors = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  const scrollToContacts = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  const scrollUp = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
    console.log('scroll')
  }



  return (
    <div className="App">
      <Header
        home={home}
        scrollToSectors={() => scrollToSectors(services)} scrollToContacts={() => scrollToContacts(contact)} />
      <MainContent />
      <ServiceSectors services={services} />
      <FormField contact={contact} />
      <button className="styleBtn" onClick={() => scrollUp(home)}>Voltar para a Home</button>
    </div>
  )
};


export default App;



