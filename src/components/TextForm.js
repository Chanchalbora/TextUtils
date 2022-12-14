import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success")
  }

  const handleLowClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success")
  }

  const handleOnChange =(event)=> {
    setText(event.target.value);
  }

  const handleCopy = ()=> {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success")
  }

  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success")
  }

  const[text, setText] = useState('');

 const handleClearClick = ()=> {
    setText('');
    props.showAlert("Text Cleared!", "success")
 }

  return (
    <>
    <div style={{color : props.mode === "light"?"black":"white"}}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === "dark"?"#121d38":"white", color : props.mode === "light"?"black":"white"}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color : props.mode === "light"?"black":"white"}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Nothing to Preview!"}</p>
    </div>
    </>
  )
}
