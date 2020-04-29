import React from 'react';
import {Link} from 'react-router-dom';


import "./MatchItem.css";

const MatchItem = props => {
    return (
        
        <div className="card">
            
            <div className="card-header">
                <h3>{props.name}</h3>
            </div>
            <div className="card-body">
                <h3 className="card-title">{props.hometeam} - {props.awayteam}</h3>
                <p className="card-text">Kickoff: {props.kickoff}</p>
                <Link to={`/${props.id}/channel`}>
                <button className="btn btn-primary">Go to Dashboard</button>
                {/* <button className="btn btn-primary">Edit</button> */}
            </Link>
            </div>
        </div>
    )
};

export default MatchItem;