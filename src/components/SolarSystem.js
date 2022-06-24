import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <section className="planets">
          {
            planets.map((planetInfo) => (<PlanetCard
              key={ planetInfo.name }
              planetName={ planetInfo.name }
              planetImage={ planetInfo.image }
            />))
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
