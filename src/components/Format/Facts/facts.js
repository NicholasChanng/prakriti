import "./facts.css";

export default function BigCoin(props){
  return(
    <div className="containerF">
      {props.content.map(element => (
        <Facts content={element} />
      ))}
    </div>
  )
}

function Facts(props) {
  return (
    <div>
      {props.content}
    </div>
  );
}
