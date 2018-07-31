import React, { Component } from 'react';

import { fetchPlayers, fetchADP } from './apiCalls';

import PlayerTable from '../../presentational/PlayerTable';
import PlayerTableFilters from '../../presentational/PlayerTableFilters';
import Loading from '../../presentational/Loading';

class PlayerTableContainer extends Component {
  state = {
    players: []
  }
  componentDidMount = async () => {
    const players = await fetchPlayers();
    const adp = await fetchADP();
    //change each player name to first then last
    for (let i = 0; i < players.length; i++) {
      players[i].name = players[i].name.split(', ')
      players[i].name = players[i].name[1] + ' ' + players[i].name[0]
      for (let j = 0; j < adp.length; j++) {
        if (players[i].id === adp[j].id) {
          players[i].adp = Number(adp[j].averagePick);
        }
      }
      if (!players[i].adp) {
        players[i].adp = 400;
      }
    }
    players.sort((a,b) => a.adp - b.adp);
    console.log('players', players)
    this.setState({ players });
  }
  render() {
    const { players } = this.state;
    return (
      <div>
        {players.length > 0 ?
          <div>
            <PlayerTableFilters />
            <PlayerTable players={players} />
          </div> :
          <Loading />

        }
      </div>
    );
  }
}

export default PlayerTableContainer;
