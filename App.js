import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Component } from 'react/cjs/react.production.min';
import React from 'react';
//This is all my code

const baseURL2_stats = `https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json`;

function App() {

  const [players, getPlayers] = React.useState([]);

  React.useEffect(() => {
    getAllPlayers();
  }, []);

  const getAllPlayers = () => {
    axios.get(baseURL2_stats)
      .then((response) => {
        // handle success
        console.log(response.data.tpsts);
        const allPlayers = response.data.tpsts.pl;
        // Object or Array
        console.log("All PLayers: " + allPlayers)
        getPlayers(allPlayers);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (

    <PlayerCard players={players} />
  )
}


function PlayerCard(props) {

  // Display Player  Function
  const displayPlayers = (props) => {

    const { players } = props;
    console.log('PlayCard players: ' + players);
    if (players.length > 0) {

      return (
        players.map((player, index) => {
          console.log(player);

          let playerName = `${player.fn} ${player.ln}`
          let points = player.avg['pts']
          let assist = player.avg['ast']
          let rebounds = player.avg['reb']
          let steal = player.avg['stl']
          let blocks = player.avg['blk']

          return (

            <div className="flex justify-center">
              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <div className="grid grid-cols-4 gap-4">
                  <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">Player Name: {playerName}</h2>
                  <p className="text-gray-700 text-base mb-4">
                    Points: {points}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    Assits: {assist}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    Rebound: {rebounds}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    Steals: {steal}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    Blocks: {blocks}
                  </p>
                </div>
              </div>
            </div>

          )

        })

      )
    } else {
      return (<h1>No Players </h1>)
    }
  }

  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-black p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src={require('./Nets_Logo/brooklyn_nets_logo.png')} width={'50'} />
          <span class="font-semibold text-xl tracking-tight">Brooklyn Nets</span>
        </div>
      </nav>
      <div className="grid grid-cols-4 gap-4">
        {displayPlayers(props)}
      </div>

    </>
  )
}

export default App;
