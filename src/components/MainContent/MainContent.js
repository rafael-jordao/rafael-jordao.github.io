import React from "react";
import "./MainContent.css"
import MainPhoto from "/Users/rafaeljordao/Documents/my-codes/rafael-jordao.github.io/src/assets/profileImage.png"
import Curriculo from "/Users/rafaeljordao/Documents/my-codes/rafael-jordao.github.io/src/assets/Curriculo.pdf"

const MainContent = () => {
    return (
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
    )
}

export default MainContent;