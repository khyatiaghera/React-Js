import React,{useState} from "react";

export default function TextForm(props) {
    const [text,setText] = useState('');
    const [value,setValue] = useState("");
   
    const handleUpClick = () => {
      // console.log("Uppercase was clicked");
      if(text.length>0){
      let newText = text.toUpperCase();
      setValue(newText);
      props.showAlert("Converted to Uppercase!","success");
      }
    }
    const handleLoClick = () =>  {
      if(text.length>0){
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!","success");
      }
    }
    const handleClearClick = () => {
      if(text.length>0){
      let newText = '';
      setText(newText);
      props.showAlert("Cleared text!","success");
      }
    }
    const handleCopy = () => {
      // var text = document.getElementById('myBox');
      // text.select();
      // text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied!","success")
    }
    const handleOnChange = (event) => {
      // console.log("On change");
      setText(event.target.value);
    } 
    

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'rgb(35 61 82)':'white', color:props.mode==='dark'?'white':'black'}}
          value={text}
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
    <b><h1>your text summary</h1>
    <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p></b>
    <h2>Preview</h2>
    <p>{text.length>0?value:"Nothing To Preview"}</p>
    
    </div>
    </>
  );
}
