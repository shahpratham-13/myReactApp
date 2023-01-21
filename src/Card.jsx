import React from 'react';

const width = {
  width: "18rem"
}
export default function Card(props){
  return(
      <>
        <div className="card my-3" style={width}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
</div>
      </>
    )
}

