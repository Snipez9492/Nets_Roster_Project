
import React from 'react';

export default function PlayerCard(props) {

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
                  <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">Player Name: {playerName} </h2>
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
            )
  
          })
  
        )
      } else {
        return (<h1>No Players </h1>)
      }
    }
  
    return (
      <>
        {displayPlayers(props)}
      </>
    )
  }
  