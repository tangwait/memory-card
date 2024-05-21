import PropTypes from 'prop-types';

function Scoreboard({ score, highScore }) {
  return (
    <div className='Scoreboard'>
      <div className='Score'>Score: {score}</div>
      <div className='Highscore'>Highscore: {highScore}</div>
    </div>
  );
}

Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default Scoreboard;
