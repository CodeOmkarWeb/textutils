import React from 'react'
import { useState } from 'react';



export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase", "info", "Info")
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase", "info", "Info")
    }
    const handleCpClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "info", "Info")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "info", "Info")
    }

    const clearText = (event) => {
        setText("")
        props.showAlert("Text Cleared", "info", "Info")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    let wordscount = text.split(/\s[a-z]/).length
    document.title = "TextUtils - Home"
    return (
        <>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'} `} >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <div>
                        <textarea className="form-control" id="mybox" rows="3" value={text} onChange={handleOnChange} placeholder='Enter Text Here'
                            style={{ color: `${props.mode === 'dark' ? 'white' : '#212138'}`, backgroundColor: `${props.mode === 'dark' ? '#212138' : 'white'}` }}></textarea>
                    </div>
                    <button className={`btn btn-primary mx-2 ${props.mode === 'dark' ? 'light' : 'dark'} `} onClick={handleUpClick} disabled={text.length === 0} >To UpperCase</button>
                    <button className={`btn btn-primary  my-2 mx-2 ${props.mode === 'dark' ? 'light' : 'dark'} `} onClick={handleLoClick} disabled={text.length === 0} >To LowerCase</button>
                    <button className={`btn btn-primary  my-2 mx-2 ${props.mode === 'dark' ? 'light' : 'dark'} `} onClick={handleExtraSpaces} disabled={text.length === 0} >Remove Extra Spaces</button>
                    <button className={`btn btn-primary  my-2 mx-2 ${props.mode === 'dark' ? 'light' : 'dark'} `} onClick={handleCpClick} disabled={text.length === 0} >Copy Text</button>
                    <button className={`btn btn-primary  my-2 mx-2 ${props.mode === 'dark' ? 'light' : 'dark'} `} onClick={clearText} disabled={text.length === 0} >Clear Text</button>
                </div>
            </div>
            <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h3>Your text Summary</h3>
                <b>Words - </b> {`${text.length === 0 ? "0" : wordscount}`}<br />
                <b>Characters - </b> {text.length}<br />
            </div>
        </>
    )
}
