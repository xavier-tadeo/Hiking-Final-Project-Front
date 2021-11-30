import "./CardHike.scss";

interface IHike {
  hike: any;
}

const CardHike = ({ hike }: IHike): JSX.Element => {
  return (
    <section className="constainer__hike">
      <div className="cardHike">
        <h4 className="cardHike__title">{hike.title}</h4>
        <div className="cardHike__info">
          <img
            src={hike.images[0]}
            alt="hike montain"
            className="cardHike__images"
          />
          <span className="cardHike__stadistics">
            <p className="cardHike__stadistics-title">Distance</p>
            <p className="cardHike__stadistics-distance stadistics">
              {hike.stadistics.distance}
            </p>
            <p className="cardHike__stadistics-title">Time</p>
            <p className="cardHike__stadistics-time stadistics">
              {hike.stadistics.time}
            </p>
            <p className="cardHike__stadistics-title">Dificulty</p>
            <p className="cardHike__stadistics-dificulty stadistics">
              {hike.stadistics.dificulty}
            </p>
            <p className="cardHike__stadistics-title">Elevation</p>
            <p className="cardHike__stadistics-elevation stadistics">
              {hike.stadistics.elevation}
            </p>
          </span>
        </div>
        <p className="cardHike__author">Name: {hike.user.name}</p>
      </div>
    </section>
  );
};

export default CardHike;
