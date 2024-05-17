export default function Cards() {
    const players = [
        { name: "Lebron James",
          picture: "src/player-pictures/lebron.png" },
        { name: "Nikola Jokic",
        picture: "src/player-pictures/jokic.png" },
        { name: "Kevin Durant",
        picture: "src/player-pictures/kd.png" },
        { name: "De'Aaron Fox",
        picture: "src/player-pictures/fox.png" },
        { name: "Shai Gilgeous-Alexander",
        picture: "src/player-pictures/shai.png" },
        { name: "Giannis Antetokounmpo",
        picture: "src/player-pictures/giannis.png" },
        { name: "Donovan Mitchell",
        picture: "src/player-pictures/mitchell.png" },
        { name: "Kyrie Irving",
        picture: "src/player-pictures/kyrie.png" },
        { name: "Luka Doncic",
        picture: "src/player-pictures/doncic.png" },
        { name: "Stephen Curry",
        picture: "src/player-pictures/curry.png" },
        { name: "Jayson Tatum",
        picture: "src/player-pictures/tatum.png" },

    ]


return (
    <>
        <div>
        {players.map((player, index) => (
        <div key={index}>{player.name}</div>
      ))}
        </div>
    </>
)
}