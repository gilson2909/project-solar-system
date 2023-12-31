import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planets.map((obj) => (<PlanetCard
          planetImage={ obj.image }
          planetName={ obj.name }
          key={ obj.name }
        />)) }
        ;
      </div>
    );
  }
}

export default SolarSystem;
