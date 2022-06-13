const Card = (props) => {
  const { simpson, getSimpsons } = props;
  
  return (
    
    <div>
      <h1>{simpson.character}</h1>
      <img src={simpson.image} alt={simpson.character}></img>
      <p>{simpson.quote}</p>
      <button onClick={getSimpsons}>Generate a new quote</button>
    </div>
  );
};

export default Card;
