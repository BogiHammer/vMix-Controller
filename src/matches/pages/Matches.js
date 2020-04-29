import React from 'react';

import MatchList from '../components/MatchList';

const Matches = () => {
    const MATCHES = [
        {id: '1', name: 'R1', round: "1", hometeam: "KÍ", awayteam: "HB", kickoff: "10. Apr 15:00"},
        {id: '2', name: 'R2', round: "1", hometeam: "NSÍ", awayteam: "EBS", kickoff: "10. Apr 15:00"},
        {id: '3', name: 'R3', round: "1", hometeam: "B36", awayteam: "Skála", kickoff: "10. Apr 15:00"},
        {id: '4', name: 'R4', round: "1", hometeam: "TB", awayteam: "AB", kickoff: "10. Apr 15:00"},
        {id: '5', name: 'R5', round: "1", hometeam: "Víkingur", awayteam: "ÍF", kickoff: "10. Apr 15:00"},
    ];

    return <MatchList items={MATCHES}/>
};

export default Matches;