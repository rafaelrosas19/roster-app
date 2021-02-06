import Player from "./Player";

function PlayerList(props) {
  // create a list of Player components
  const allPlayers = props.players.map((player) => {
    return (
      <Player
        firstName={player.firstName}
        jerseyNumber={player.jerseyNumber}
        hobbies={player.hobbies}
      />
    );
  });
  //   console.log("props players", props.players);

  return <div>{allPlayers}</div>;
}

export default PlayerList;
