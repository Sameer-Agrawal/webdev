import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState('Enter text here');
    const handleupclick = ()=>{
        let NewText = text.toUpperCase();
        setText(NewText);
    }
    const handleloclick = ()=>{
        let NewText = text.toLowerCase();
        setText(NewText);
    }
    const handleonchange = (event)=>{
        setText(event.target.value)
    }
    return (
        <div>
            <div className="container">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleonchange} ></textarea>
                <button className="btn btn-primary mx-1 my-2" onClick={handleupclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleloclick}>Convert to Lowercase</button>
            </div>
            <div className="container">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes to read</p>
                <h3>Text Preview</h3>
                <p>{text}</p>

            </div>
        </div>
    )
}
