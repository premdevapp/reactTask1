import "./UserOutput.css";
export function UserOutput(props) {
  return [
    <p className="UserOutput">Hey {props.userName}</p>,
    <p className="UserOutput">Here</p>,
  ];
}
