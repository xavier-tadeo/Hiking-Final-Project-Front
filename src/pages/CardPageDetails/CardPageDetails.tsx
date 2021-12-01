import { useEffect } from "react";
import { useParams } from "react-router";
import useUser from "../../hooks/useUser";

const CardPageDetails = () => {
  const { currentHike, getCurrentHike } = useUser();
  const { id } = useParams();

  useEffect(() => {
    getCurrentHike(id);
  }, [getCurrentHike, id]);
  console.log(currentHike);
  return (
    <>
      <section className="cardpage__container">
        <div className="cardpage__description-container">
          <h3 className="cardpage__description">Details Hike</h3>
        </div>
        <h4 className="cardpage__title">{currentHike.title}</h4>
        <div className="cardpage__description">
          <p className="cardpage__description-parraf">
            {currentHike.description}
          </p>
        </div>
        <div className="cardpage__stadistics">
          <p className="cardHike__stadistics-title">Distance</p>
          <p className="cardHike__stadistics-distance stadistics">
            {currentHike.stadistics.distance}
          </p>
          <p className="cardHike__stadistics-title">Time</p>
          <p className="cardHike__stadistics-time stadistics">
            {currentHike.stadistics.time}
          </p>
          <p className="cardHike__stadistics-title">Dificulty</p>
          <p className="cardHike__stadistics-dificulty stadistics">
            {currentHike.stadistics.dificulty}
          </p>
          <p className="cardHike__stadistics-title">Elevation</p>
          <p className="cardHike__stadistics-elevation stadistics">
            {currentHike.stadistics.elevation}
          </p>
        </div>
        <img
          src={currentHike.images[0]}
          alt="hike montain"
          className="cardHike__images"
        />
        <img
          src={currentHike.images[1]}
          alt="hike montain"
          className="cardHike__images"
        />
        <img
          src={currentHike.images[2]}
          alt="hike montain"
          className="cardHike__images"
        />
        <img
          src={currentHike.images[3]}
          alt="hike montain"
          className="cardHike__images"
        />
        <img
          src={currentHike.images[4]}
          alt="hike montain"
          className="cardHike__images"
        />
      </section>
    </>
  );
};

export default CardPageDetails;
