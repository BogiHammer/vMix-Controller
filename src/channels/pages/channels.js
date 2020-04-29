import React from "react";
import { useParams } from "react-router-dom";

import ChannelList from "../components/ChannelsList";

const DUMMY_CHANNELS = [
  {
    id: "1",
    name: "R1",
    address: "http://10.50.5.181:8088/api?",
    scripts: [
      {
        id: "1",
        number: "1",
        description: "Toggle Fixture",
        function:
          "http://10.50.5.181:8088/api?Function=OverlayInput1&input=Fixture"
      },
      {
        id: "2",
        number: "2",
        description: "Toggle Lineup",
        function:
          "http://10.50.5.181:8088/api?Function=OverlayInput1&input=Lineup"
      },
      {
        id: "3",
        number: "3",
        description: "Toggle Runningscore",
        function: "http://10.50.5.181:8088/api?Function=OverlayInput1&input=Runningscore"
      },
      {
        id: "4",
        number: "4",
        description: "Toggle Bigscore",
        function: "http://10.50.5.181:8088/api?Function=OverlayInput1&input=Bigscore"
      },
      {
        id: "5",
        number: "5",
        description: "Start First Half",
        function: "http://10.50.5.181:8088/api?Function=ScriptStart&Value=StartFirstHalf"
      },
      {
        id: "6",
        number: "6",
        description: "Start Second Half",
        function: "http://10.50.5.181:8088/api?Function=ScriptStart&Value=StartSecondHalf"
      },
      {
        id: "7",
        number: "7",
        description: "Run Commercials",
        function: "http://10.50.5.181:8088/api?Function=Fade&Input=Commercials"
      }
    ],
    matchId: "1"
  },
  {
    id: "2",
    name: "R2",
    address: "http://10.50.5.182:8088/api?",
    scripts: [{
      id: "1",
      number: "1",
      description: "Toggle Fixture",
      function:
        "http://10.50.5.182:8088/api?Function=OverlayInput1&input=Fixture"
    }],
    matchId: "2"
  },
  {
    id: "3",
    name: "R3",
    address: "http://10.50.5.183:8088/api?",
    scripts: [],
    matchId: "3"
  },
  {
    id: "4",
    name: "R4",
    address: "http://10.50.5.184:8088/api?",
    scripts: [],
    matchId: "4"
  },
  {
    id: "5",
    name: "R5",
    address: "http://10.50.5.185:8088/api?",
    scripts: [],
    matchId: "5"
  }
];

const Channels = () => {
  const channelId = useParams().channelId;
  const loadedChannels = DUMMY_CHANNELS.filter(
    channel => channel.matchId === channelId
  );
  return <ChannelList items={loadedChannels} />;
};

export default Channels;
