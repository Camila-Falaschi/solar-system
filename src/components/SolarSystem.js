import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';
import Missions from './Missions';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section>
          {
            planets.map((planetInfo) => (<PlanetCard
              key={ planetInfo.name }
              planetName={ planetInfo.name }
              planetImage={ planetInfo.image }
            />))
          }
        </section>
        <Missions />
      </div>
    );
  }
}

export default SolarSystem;
