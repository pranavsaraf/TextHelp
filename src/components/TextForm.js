import React,{useState} from 'react'


export default function TextForm(props) {
    const handleOnChange=(event)=>{
        console.log("OnChange was Clicked");
        setText(event.target.value);  
    }
    const handleUpclick=()=>{
        console.log("UpperCase was Clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoclick=()=>{
        console.log("LowerCase was Clicked!" + text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleclearclick=()=>{
        console.log("Clear text was Clicked" + text);
        let newtext='';
        setText(newtext);
        props.showAlert("Cleared text!","success");
    }
    const handlecopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    const [text,setText]=useState('');
  return (
    <>
<div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>{props.heading}</h2>
<div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-dark mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-dark mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
<button className="btn btn-dark mx-1" onClick={handleclearclick}>Clear Text</button>
<button className="btn btn-dark mx-1" onClick={handlecopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in the text box above to preview"}</p>
    </div>
    </>
  )
}
