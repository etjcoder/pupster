import React from "react";

function SearchResult(props) {

    var randomDogNum = Math.floor(Math.random()* 100);
    // console.log()
    // console.log()
  return (
    <div>
        <h1>Your Dog</h1>
    <img alt={""} className="img-fluid" src={props.results[randomDogNum]} />
    </div>
  );
}

export default SearchResult;