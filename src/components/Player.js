function Player(props) {
  console.log("player props", props);

  const allHobbies = props.hobbies.map((hobby) => {
    return <li>{hobby}</li>;
  });

  return (
    <div>
      <h3>
        {props.firstName} his jersey number is {props.jerseyNumber}
      </h3>
      <ul>{allHobbies}</ul>
    </div>
  );
}

export default Player;

// player name h3
// add list of hobbies under each player
