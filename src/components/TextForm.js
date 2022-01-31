import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        setText("");
    }
    const handleExtraSpaces = () => {
        let newT = text.split(/[ ]+/);
        setText(newT.join(" "));
    }
    const handleCopy = () => {
        var copyText = document.getElementById('myBox');
        copyText.select();
        copyText.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(copyText.value);
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(167 161 161)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-1" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#0d6efd', border: 'none' }}>Convert to Uppercase</button>
                <button onClick={handleLoClick} className="btn btn-primary mx-1" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#0d6efd', border: 'none' }}>Convert to Uppercase</button>
                <button onClick={handleClearClick} className="btn btn-primary mx-1" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#0d6efd', border: 'none' }}>Clear Text</button>
                <button onClick={handleCopy} className="btn btn-primary mx-1" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#0d6efd', border: 'none' }}>Copy Text</button>
                <button onClick={handleExtraSpaces} className="btn btn-primary mx-1" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#0d6efd', border: 'none' }}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Please Enter Text to preview here.'}</p>
            </div>

        </>
    )
}
