import { useEffect } from "react";
import { useParams } from "react-router";
import useUser from "../../hooks/useUser";

const CardPageDetails = () => {
  const { currentHike, getCurrentHike } = useUser();
  const { id } = useParams();

  useEffect(() => {
    getCurrentHike(id);
  }, [getCurrentHike, id]);

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
          <p className="cardpage__stadistics-title">Distance</p>
          <p className="cardpage__stadistics-distance stadistics">
            {currentHike.stadistics?.distance}
          </p>
          <p className="cardpage__stadistics-title">Time</p>
          <p className="cardpage__stadistics-time stadistics">
            {currentHike.stadistics?.time}
          </p>
          <p className="cardpage__stadistics-title">Dificulty</p>
          <p className="cardpage__stadistics-dificulty stadistics">
            {currentHike.stadistics?.dificulty}
          </p>
          <p className="cardpage__stadistics-title">Elevation</p>
          <p className="cardpage__stadistics-elevation stadistics">
            {currentHike.stadistics?.elevation}
          </p>
        </div>
        <div className="cardpage__images">
          {currentHike.images?.map((hike: string, index: number) => (
            <img
              src={hike}
              alt="hike montain"
              className="cardpage__image"
              key={index}
              width="200"
              height="150"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CardPageDetails;
