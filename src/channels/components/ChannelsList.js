import React from "react";

import ChannelItem from "./ChannelItem";
// import ScriptItem from './ScriptItem';

import "./ChannelsList.css";

const ChannelList = props => {
  // console.log(props.items[0].scripts[0].function);
  // console.log(props.items);
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No channels found!</h2>
      </div>
    );
  }
  // console.log(props);
  return (
    <ul className="container">
      {props.items.map(channel => (
        <ChannelItem
        key={channel.id}
        id={channel.id}
        name={channel.name}
        address={channel.address}
        matchId={channel.matchId}
        scripts={channel.scripts}
        />
        ))}
    </ul>
  );
};

// [
//   channel.scripts.map(script => (
//     {
//       key:script.id,
//       number:script.number,
//       description: script.description,
//       function: script.function
//     }
//   ))
// ]


export default ChannelList;
