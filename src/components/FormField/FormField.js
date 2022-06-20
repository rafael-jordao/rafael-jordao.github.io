import React from "react";
import "/Users/rafaeljordao/Documents/my-codes/rafael-jordao.github.io/src/components/FormField/FormField.css"


const FormField = ({contact}) => {

    return (
        <div ref={contact} className="dflexContainer">
            <div className="textContainer">
                <h1>Como eu posso ajudar?</h1>
            </div>
            <div >
                <form action="https://formsubmit.co/afa93664dc1045b20d9413a4c814aac7" method="POST" className="formField">
                    <input placeholder="Insira seu nome" className="mainInput" type="text" name="name" required />
                    <input placeholder="Insira seu e-mail" className="mainInput" type="email" name="email" required />
                    <textarea placeholder="Escreva sua mensagem" className="mainInput" type="text" name="text" required />
                    <button type="submit">Envie sua mensagem</button>
                </form>
            </div>
        </div>
    )
}

export default FormField;