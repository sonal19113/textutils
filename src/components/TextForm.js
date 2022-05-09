
import React, { useState } from 'react';

export default function TextForm(props) {
   
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const handleUpperClick = ()=>{
       let  newText= text.toUpperCase();
       setText(newText);
       props.showAlert("Upper Case","success");
    }

    const handleLowerClick = ()=>{
        let  newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Lower Case","success");
     }

 
    const [text, setText] = useState("");
  return (
      <>
      <div className="container"style={{color: props.mode==='dark'?'white':'#183654'}} >
     <h3>{props.heading} </h3>
    <div className="mb-5">
    <textarea className="form-control"  value={text}  onChange={handleOnChange} 
    style={{backgroundColor: props.mode==='dark'?'#183654':'white',color: props.mode==='dark'?'white':'#183654'}} 
     id="myBox" rows="10"></textarea>
    </div>
    <div>
    <button disable={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleUpperClick}>Upper Case</button>
    <button disable={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}>Lower Case</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#183654'}}>
        <h4>Your Text Summary</h4>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>  
        <p>{0.008*(text.split(" ").length-1)} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter your text in above text box to preview it"}</p>
    </div>
    </div>
</>
  )
}
