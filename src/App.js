import React,{useState} from 'react';
import './App.css'
import Navbar from './Navbar'

function App(){
  const [currTxt,changeTxt] = useState("Enter the Text here...");
  const change = (e)=>{
    changeTxt(e.target.value);
  }
  const convert = ()=>{
    let newTxt = currTxt.toUpperCase();
    changeTxt(newTxt);
  }
  return(
      <>
        <Navbar/>
        <div className="container mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text to Convert Into UpperCase</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={currTxt}onChange={change}></textarea>
  <button className="btn btn-primary my-3"onClick={convert}>Convert</button>
</div>
<div className="container">
  <h2 className="heading">Text Summary</h2>
  <p>{currTxt.split(" ").length} words and {currTxt.split("").length} letters</p>
</div>
<button class="btn btn-secondary mx-3 my-3">Enable Dark Mode</button>
      </>
    );
}
export default App;
