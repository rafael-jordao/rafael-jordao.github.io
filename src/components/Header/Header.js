import React from "react";
import "./Header.css"

const Header = ({ scrollToSectors, scrollToContacts,home }) => {
    const [toggleButton, setToggleButton] = React.useState(false)

    const handleClick = () => {
        setToggleButton(!toggleButton);
    }
    
    return (
        <header ref={home}>
            <div>
                <h1 className="myName">Rafael Jordão</h1>
            </div>

            <nav className={`navMenu ${toggleButton ? 'navMenuActive' : ''}`}>
                <button onClick={handleClick} className="btnMobile">Menu
                    <span id="hamburger"></span></button>

                <ul className="menuTopics">
                    <li onClick={scrollToSectors} className="menuTopic">Serviços</li>
                    <li onClick={scrollToContacts} className="menuTopic">Contato</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header