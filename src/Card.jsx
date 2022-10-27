const Card = (props) => {
  return (
    <div className="card">
      <a id={props.Id} href={props.link}>
        {props.content}
      </a>
      <p>{props.subtext}</p>
    </div>
  );
};
export default Card;
