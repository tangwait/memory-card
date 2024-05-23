import { useState } from 'react';
import './App.css';
import Scoreboard from './components/ScoreBoard.jsx';
import ShuffleCards from './components/ShuffleCards.jsx';

function App() {
  const initialPlayers = [
    { id: 1, name: "Lebron James", picture: "/player-pictures/lebron.png" },
    { id: 2, name: "Nikola Jokic", picture: "/player-pictures/jokic.png" },
    { id: 3, name: "Kevin Durant", picture: "/player-pictures/kd.png" },
    { id: 4, name: "De'Aaron Fox", picture: "/player-pictures/fox.png" },
    { id: 5, name: "Shai Gilgeous-Alexander", picture: "/player-pictures/shai.png" },
    { id: 6, name: "Giannis Antetokounmpo", picture: "/player-pictures/giannis.png" },
    { id: 7, name: "Donovan Mitchell", picture: "/player-pictures/mitchell.png" },
    { id: 8, name: "Kyrie Irving", picture: "/player-pictures/kyrie.png" },
    { id: 9, name: "Luka Doncic", picture: "/player-pictures/doncic.png" },
    { id: 10, name: "Stephen Curry", picture: "/player-pictures/curry.png" },
    { id: 11, name: "Jayson Tatum", picture: "/player-pictures/tatum.png" },
  ];

  const [players, setPlayers] = useState(initialPlayers);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const shufflePlayers = () => {
    setPlayers(shuffleArray(players));
  };

  const handleClick = (id) => {
    if (clicked.includes(id)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClicked([]);
    } else {
      setScore(prevScore => prevScore + 1);
      setClicked([...clicked, id]);
    }
    shufflePlayers();
  };

  return (
    <>
      <Scoreboard score={score} highScore={highScore} />
      <ShuffleCards players={players} handleClick={handleClick} />
    </>
  );
}

export default App;
