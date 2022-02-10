import React,{useState} from 'react';

export default function TextForm(props) {
    const [text, settext] = useState("");
    const upper = () =>
    {
      settext(text.toUpperCase());
    }
    const lower = () =>
    {
      settext(text.toLowerCase());
    }
    const clear = () =>
    {
      settext("");
    }
    const camelcase= () => {
        settext( text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
          }).replace(/\s+/g, ''))
        
      }
      const Copy = () => {
        navigator.clipboard.writeText(text);
    }
    const handleExtraSpaces = ()=>{
      const newText = text.replace(/\s+/g, ' ').trim();
      settext(newText)
      }
    const handleOnChange = (event) =>
    {
        settext(event.target.value);
    }
  return (
      <>
      <div className="container my-3"  >
          <h1 style={{color : props.mode==='dark'?'white':'black'}}> {props.heading}</h1>
        <div className="mb-3">
            <textarea className= "form-control" style={{backgroundColor : props.mode==='dark'?'#181818':'white', color : props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleOnChange} rows="9" autoFocus placeholder='Enter text here'    ></textarea>
        </div>
        <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={upper} >UpperCase</button>
        <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={lower}>LowerCase</button>
        <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={camelcase}>CamelCase</button>
        <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={clear}>Clear</button>
        <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={Copy}>Copy</button>
        <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={handleExtraSpaces}>Extra Space</button>

        </div> 
       <div className="container my-4" style={{color : props.mode==='dark'?'white':'black'}}>
           <h1>Summary</h1>
           <p>{text.split(/\s+/).filter((e) => { return e.length !==0}).length} words and {text.length}  characters</p>
       </div>
       <div className="container my-3"  style={{color : props.mode==='dark'?'white':'black'}}>
           <h1>Preview</h1>
           <p>{text}</p>
       </div>
    </>
    );
}
