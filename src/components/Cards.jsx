import PropTypes from 'prop-types';

function Cards({ players, handleClick }) {
  return (
    <div className='Cards'>
      {players.map((player) => (
        <div key={player.id} onClick={() => handleClick(player.id)}>
          <img src={player.picture} alt={player.name} className='player-picture' />
          <div className='player-name'>{player.name}</div>
        </div>
      ))}
    </div>
  );
}

Cards.propTypes = {
  players: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Cards;
