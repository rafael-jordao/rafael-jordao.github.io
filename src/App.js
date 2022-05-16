import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import FormField from "./components/FormField/FormField";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import ServiceSectors from "./components/ServicesSector/ServicesSector";

const App = () => {
  const [backToTop, setBackToTop] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const styleBtn = {
    borderRadius: '50px',
    background: '#4a6ef1',
    border: 'none',
    padding: '0.5rem',
    color: '#f2f2f2',
    cursor: 'pointer',
    margin: '1rem',
    transition: '.3s',
    boxShadow: '0px 10px 20px var(--darkblue)',
    opacity: 0.3,
  }

  return (
    <div className="App">
      <Header />
      <MainContent />
      <ServiceSectors />
      <FormField />

      {backToTop && (
        <button style={styleBtn} onClick={scrollUp}>Voltar para o topo</button>
      )}
    </div>
  )
};


export default App;



