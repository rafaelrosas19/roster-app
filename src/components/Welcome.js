function Welcome() {
  const currentHour = 4;
  const message =
    currentHour < 5
      ? "Why are you still up?"
      : currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good Evening";
  return (
    <div>
      <p>{message} sports fans!</p>
      <h1>Welcome to my React Page</h1>
    </div>
  );
}

export default Welcome;
