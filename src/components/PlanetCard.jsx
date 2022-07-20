import React from 'react';

class PlanetCard extends React.Component {
  render () {
    return (
      <div data-testid="planet-card">
        <p>{ this.props.planetName }</p>
        <img src={ this.props.planetImage } alt='Planeta {planetName}' />
      </div>
    );
  }
}

export default PlanetCard;
