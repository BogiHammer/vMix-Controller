import React from 'react'

import MatchItem from './MatchItem';
import './MatchList.css';

const MatchList = props => {
    if(props.items.length === 0 ) {
        return (
            <div className="center">
                <h2>No Matches found!</h2>
            </div>
        );
    }

    return (
        <ul className="container">
          {props.items.map(match => (
            <MatchItem 
              key={match.id} 
              id={match.id} 
              name={match.name}
              hometeam={match.hometeam}
              awayteam={match.awayteam}
              kickoff={match.kickoff} />
          ))}
        </ul>
      );
}

export default MatchList;