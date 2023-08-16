import React, { useState } from 'react'

export default function TextForm(props) {
 
    const [text, setText] = useState("");
    
    const handleOnChange = (event)=>{
       // console.log("on change")
        setText(event.target.value)
    }

    const handleOnClickUpper = ()=>{
        if(text.length !== 0){
       // console.log("Upper case was clicked");
       setText(text.toUpperCase())
       props.showAlert("Text has been successfully udated to Uppercase", "success")
        }
       } 

    const handleOnClickLower = ()=>{
        if(text.length !== 0){
        setText(text.toLowerCase())
        props.showAlert("Text has been successfully udated to lowercase", "success")
        }
    }

    const handleOnClickClear = ()=>{
        if(text.length !== 0){
        setText("")
        props.showAlert("Text has been successfully deleted", "success")
        }
    }

    const copyText = ()=>{
    if(text.length !== 0){
        navigator.clipboard.writeText(text);
        setText("")
        props.showAlert("Text has been successfully copied", "success")
    }
    }

    const removeExtraSpaces = ()=>{
    if(text.length !== 0){
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Text has been successfully udated", "success")
    }       
    }

    return (
    <>   
       <div className="form-group">
            <h1 className='text-center'>{props.heading}</h1> 
            <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='Enter text here' id="myBox" rows="8"></textarea>
            <button className='btn btn-primary my-3 mx-3' onClick={handleOnClickUpper} >Uppercase</button>
            <button className='btn btn-info my-3 mx-3' onClick={handleOnClickLower} >Lowercase</button>
            <button className='btn btn-success my-3 mx-3' onClick={handleOnClickClear} >Clear Text</button>
            <button className='btn btn-danger my-3 mx-3' onClick={copyText} >Copy Text</button>
            <button className='btn btn-warning my-3 mx-3' onClick={removeExtraSpaces} >Remove Extra Spaces</button>
       </div>

       <div className="container my3">
            <h1>your text summary</h1>
            <p>{text.length} characters and {text.trim() === ''? '0':text.trim().split(" ").length} words</p>
            <h3>time to read words : {text.trim() === ''? '0':text.trim().split(" ").length * 0.008} minutes</h3>
            <h4>Preview</h4>
            <p>{text}</p>
       </div>
  
    </> 
  )
}
