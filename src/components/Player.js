function Player(props) {
  console.log("player props", props);

  const playerHobbies = props.hobbies.length ? (
    props.hobbies.map((hobby) => {
      return <li key={props.id}>{hobby}</li>;
    })
  ) : (
    <p>None listed</p>
  );

  // const allHobbies = props.hobbies.map((hobby) => {
  //   return <li>{hobby}</li>;
  // });

  return (
    <div>
      <h3>
        {props.firstName} his jersey number is {props.jerseyNumber}
      </h3>
      <ul>{playerHobbies}</ul>
    </div>
  );
}

export default Player;

// player name h3
// add list of hobbies under each player
