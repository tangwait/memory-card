import PropTypes from 'prop-types';
import Cards from './Cards';

function ShuffleCards({ players, handleClick }) {
  return <Cards players={players} handleClick={handleClick} />;
}

ShuffleCards.propTypes = {
  players: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ShuffleCards;
