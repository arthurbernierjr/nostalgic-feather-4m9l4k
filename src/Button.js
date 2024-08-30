import "./button.css";

export default function Button(props) {
  return <button onClick={props.action}>{props.symbol}</button>;
}


