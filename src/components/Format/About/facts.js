import "./facts.css";

export default function bigCoin(props){
  return(
    <div>
      {props.content.map(element => (
        <Facts content={element} />
      ))}
    </div>
  )
}

function Facts(props) {
  return (
    <div className="containerF">
      {props.content}
    </div>
  );
}
