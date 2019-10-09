import React from "react";


const divStyle = {
        height: '400px',
        width: '400px'
  };

function DiscoverCard(props) {


  return (
    <div>

    <img alt={""} style={divStyle} className="img-fluid" src={props.results} />
    </div>
  );
}

export default DiscoverCard;