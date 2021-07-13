  
import Black from "./Black";
import White from "./White";

const Card = () => {
  const getCard = () => {
    let ar = [];
    for (let i = 0; i < 72; i++) {
      if (i % 2 === 0) {
        ar.push(<Black key={i} />);
      } else {
        ar.push(<White key={i} />);
      }
    }
    return ar;
  };
  return (
    <>
      <div className="container">
        <div className="card">{getCard()}</div>
      </div>
    </>
  );
};

export default Card;