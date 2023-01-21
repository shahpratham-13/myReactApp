import React,{useState} from 'react';
import './App.css'
import Navbar from './Navbar'
import Card from './Card'

function App(){
  const [txt,change] = useState("Enter the text...");
  return(
      <>
        <Navbar/>
        <Card title="Shirts" subTitle="Gucci Shirt"/>
        
        <div className="container mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text to Convert Into UpperCase</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={txt}></textarea>
  <button className="btn btn-primary my-3">Convert</button>
</div>
      </>
    );
}
export default App;