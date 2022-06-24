import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <section className="missionsCards">
          {
            missions.map((missionInfo) => (<MissionCard
              key={ missionInfo.name }
              name={ missionInfo.name }
              year={ missionInfo.year }
              country={ missionInfo.country }
              destination={ missionInfo.destination }
            />))
          }
        </section>
      </div>
    );
  }
}

export default Missions;
