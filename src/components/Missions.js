import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <div>
          <Title headline="Missões" />
        </div>
      </div>
    );
  }
}

export default Missions;
