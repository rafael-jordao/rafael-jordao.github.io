import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import IconDev from "/Users/rafaeljordao/Documents/my-codes/rafael-jordao.github.io/src/assets/gridCss .png"
import IconDesign from "/Users/rafaeljordao/Documents/my-codes/rafael-jordao.github.io/src/assets/iconDesign.png"
import "/Users/rafaeljordao/Documents/my-codes/rafael-jordao.github.io/src/components/ServicesSector/ServicesSector.css"

const ServiceSectors = () => {
    return (
        <div className="services">
            <div className="">
                <h1 className="titleServices">Serviços</h1>
            </div>
            <div className="DFlexContainer">
                <a href="https://www.behance.net/rafaeljord7623" target="_blank"><ServiceCard
                    setImage={IconDesign}
                    title="Design Gráfico"
                    paragraph="Clique aqui para conhecer alguns dos meus projetos de Design e Identidade Visual." /></a>
                <a href="https://github.com/rafael-jordao" target="_blank"> <ServiceCard
                    setImage={IconDev}
                    title="Desenvolvimento Front-End"
                    paragraph="Clique aqui para conhecer alguns dos meus projetos de desenvolvimento Web Front-End." /></a>
            </div>
        </div>
    )
}

export default ServiceSectors;