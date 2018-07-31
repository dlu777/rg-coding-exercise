import React from 'react';
import { Table } from 'react-bootstrap';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SortingIcon from '../SortingIcon'

import PlayerRow from '../PlayerRow';

const PlayerTable = ({ players }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name <SortingIcon sortType="u"/></th>
          <th>Position</th>
          <th>Team</th>
          <th>Height <SortingIcon sortType="u"/></th>
          <th>Weight <SortingIcon sortType="u"/></th>
          <th>ADP <SortingIcon sortType="a"/></th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => <PlayerRow player={player} key={player.id} />)}
      </tbody>
    </Table>
  );
}

PlayerTable.propTypes = {
  players: Proptypes.array,
}

export default PlayerTable;
