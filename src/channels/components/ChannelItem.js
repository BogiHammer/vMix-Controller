import React from "react";
import {Link} from 'react-router-dom';

import Button from "../../shared/components/FormElements/Button";
import "./ChannelItem.css";

const ChannelItem = props => {
  // console.log(props.scripts[0].id)

  // {reptiles.map(reptile => <li>{reptile}</li>)}

  console.log(props);
  // script: {props.scripts.map(script => <p key={script.id}>test</p>)}

  if (props.scripts.length === 0) {
    return (
      <div className="center">
        <h2>No SCRIPTS found!</h2>
      </div>
    );
  }

  return (
    <li>
      <div className="card">
        <div className="card-header">
          <h3>{props.name}</h3>
        </div>
            <button className="btn btn-primary btn-lg">sdf</button>
        <div className="card-body">
          {props.scripts.map(script => (
            <Button className="btn-lg" key={script.id}>{script.description}</Button>
            // <p className="card-text" key={script.id}>
            //   Description:{script.description}
            // </p>
          ))}
        </div>
      </div>
      <div>
        {/* <Button to={`/channel/${props.div}`}>EDIT</Button> */}
        {/* <Button default to={`/`}>BACK</Button> */}
        <Link>
        <button className="btn btn-warning mt-4" to={`/`}>BACK</button>
        </Link>
      </div>
    </li>
  );
};

export default ChannelItem;
