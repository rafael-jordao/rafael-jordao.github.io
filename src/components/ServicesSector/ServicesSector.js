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
                <ServiceCard
                    setImage={IconDesign}
                    title="Design Gráfico"
                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content." />
                <ServiceCard
                    setImage={IconDev}
                    title="Desenvolvimento Front-End"
                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content." />
            </div>
        </div>
    )
}

export default ServiceSectors;