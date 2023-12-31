import React, {useState} from "react";

export default function Textform(props) {

  const handleUpClick = () => {
   
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  }
  const handleLoClick = () => {
    let Text = text.toLowerCase();
    setText(Text);
    props.showAlert("Converted to lower case","success");
  }
  const handleReClick = () => {
    let Text1 = text.split('').reverse().join('');
    setText(Text1);
    props.showAlert(" The text is Reversed","success");
  }
  const handleclearClick = () => {
    let Text1 ='';
    setText(Text1);
    props.showAlert(" Text Cleared","success");
  }
  const handlecpyClick = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!","success");
  }
  
  const handleOnChange = (event) => {
    
    setText(event.target.value);
  }
  const[text, setText] = useState('');
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 mb-4>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#8b7878':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleReClick}>Reverse text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecpyClick}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear text</button>
      
     

    
      
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2> Your text summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
