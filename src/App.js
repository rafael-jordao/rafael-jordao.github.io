import React from "react";
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
    boxShadow: '0px 10px 20px var(--darkblue)'
  }

  return (
    <div className="App">
      <Header />
      <MainContent />
      <ServiceSectors />
      <div className="dflexContainer">
        <div className="textContainer">
          <h1>Como eu posso ajudar?</h1>
        </div>
        <div >
          <form className="formField" >
            <div className="inputContainer">
              <label className="labelColor">Insira seu nome</label>
              <input type="text" className="mainInput"></input>
            </div>
            <div className="inputContainer">
              <label className="labelColor">Insira seu e-mail</label>
              <input type="e-mail" className="mainInput"></input>
            </div>
            <div className="inputContainer">
              <label className="labelColor">Escreva sua mensagem</label>
              <textarea className="mainInput"></textarea>
            </div>
            <div>
              <button className="mainButton">Enviar</button>
            </div>
          </form>
        </div>
      </div>

      {backToTop && (
        <button style={styleBtn} onClick={scrollUp}>^</button>
      )}
    </div>
  )
};


export default App;



