import React from "react";
import "./Header.css"

const Header = () => {
    const [toggleButton, setToggleButton] = React.useState(false)

    const handleClick = () => {
        setToggleButton(!toggleButton)
        console.log(toggleButton)
    }

    return (
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
    )
}

export default Header