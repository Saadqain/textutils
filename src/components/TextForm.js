
import React, {useState, useEffect} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("");

    useEffect(() => {  
        
    },[text]);

    const   handleUpClick = ()=> {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(text.toUpperCase());
    }
    const   handleLoClick = ()=> {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopy = () => {
      
        navigator.clipboard.writeText(text);
        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    const handleOnChange = (event)=> {
        //console.log("On change");
        setText(event.target.value)
        
    }

 

  return (
    <>
    <div className='container'>
    <form>  
    <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea type="email" className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"/>
    <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    
    </div>
        
</form>
    </div>
    <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
         words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
</> 
  )
}
