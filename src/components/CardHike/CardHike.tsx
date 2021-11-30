interface IHike {
  hike: any;
}

const CardHike = ({ hike }: IHike): JSX.Element => {
  return (
    <section className="constainer__hike">
      <div className="cardHike">
        <h4 className="cardHike__title">{hike.title}</h4>
        <div className="cardHike__info">
          <img src={hike.image[0]} alt="hike montain" />
          <span className="cardHike__stadistics">
            <p className="cardHike__stadistics-distance">
              Distance: {hike.stadistics.distance}
            </p>
            <p className="cardHike__stadistics-time">
              Time: {hike.stadistics.time}
            </p>
            <p className="cardHike__stadistics-dificulty">
              Dificulty: {hike.stadistics.dificulty}
            </p>
            <p className="cardHike__stadistics-elevation">
              Elevation: {hike.stadistics.elevation}
            </p>
          </span>
        </div>
        <p className="cardHike__author">Name: {hike.user.name}</p>
      </div>
    </section>
  );
};

export default CardHike;
