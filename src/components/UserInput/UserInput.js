export function UserInput(props) {
  const styling = {
    border: "2px solid red",
  };
  return (
    <input
      style={styling}
      type="text"
      onChange={props.changed}
      value={props.currentValue}
    />
  );
}
