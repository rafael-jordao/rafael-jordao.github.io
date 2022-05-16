import React from "react";
import "/Users/rafaeljordao/Documents/my-codes/rafael-jordao.github.io/src/components/FormField/FormField.css"


const FormField = () => {
    const [ inputName, setInputName ] = React.useState('')
    const [ inputEmail, setInputEmail ] = React.useState('')
    const [ inputText, setInputText ] = React.useState('')
    
    const handleChangeName = (e) => {
        setInputName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setInputEmail(e.target.value)

    }
    const handleChangeText = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputName(e.target.value)
        setInputEmail(e.target.value)
        setInputText(e.target.value)
    }
    
    return(
        <div className="dflexContainer">
            <div className="textContainer">
                <h1>Como eu posso ajudar?</h1>
            </div>
            <div >
                <form className="formField" >
                    <div className="inputContainer">
                        <label className="labelColor">Insira seu nome</label>
                        <input value={inputName} onChange={handleChangeName}  type="text" className="mainInput"></input>
                    </div>
                    <div className="inputContainer">
                        <label className="labelColor">Insira seu e-mail</label>
                        <input value={inputEmail} onChange={handleChangeEmail}  type="e-mail" className="mainInput"></input>
                    </div>
                    <div className="inputContainer">
                        <label className="labelColor">Escreva sua mensagem</label>
                        <textarea  value={inputText} onChange={handleChangeText} className="mainInput"></textarea>
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="mainButton">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormField;