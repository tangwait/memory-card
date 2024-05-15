export default function Cards() {
    const players = [
        { name: "Lebron James" },
        { name: "Nikola Jokic" },
        { name: "Kevin Durant" },
        { name: "De'Aaron Fox" },
        { name: "Shai Gilgeous-Alexander" },
        { name: "Giannis Antetokounmpo" },
        { name: "Donovan Mitchell" },
        { name: "Kyrie Irving" },
        { name: "Luka Doncic" },
        { name: "Stephen Curry" },
        { name: "Jayson Tatum" },

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