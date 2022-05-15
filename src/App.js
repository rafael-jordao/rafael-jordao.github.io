import React from "react";

const App = () => {
  const [toggleButton, setToggleButton] = React.useState(false)

  const handleClick = () => {
    setToggleButton(!toggleButton)
    console.log(toggleButton)
  }

  return (
    <div className="App">
      <header>
        <div>
          <h1 className="myName">Rafael Jordão</h1>
        </div>

        <nav className={`navMenu ${toggleButton ? 'navMenuActive' : ''}`}>
          <button onClick={handleClick} className="btnMobile">Menu
            <span id="hamburger"></span></button>

          <ul className="menuTopics">
            <a href="./"><li className="menuTopic">Home</li></a>
            <a href="./"><li className="menuTopic">Sobre</li></a>
            <a href="./"><li className="menuTopic">Contato</li></a>
          </ul>
        </nav>

      </header>

    </div>
  )



};


export default App;
