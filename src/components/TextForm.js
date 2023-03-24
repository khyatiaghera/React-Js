import React,{useState} from "react";

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpClick = () => {
      // console.log("Uppercase was clicked");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick = () => {
      let newText = '';
      setText(newText);
      props.showAlert("Cleared text!","success");
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
          style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
          value={text}
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
    <b><h1>your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p></b>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
