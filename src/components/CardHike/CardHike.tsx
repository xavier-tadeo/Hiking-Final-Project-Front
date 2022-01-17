import { useNavigate } from "react-router";
import { IHike } from "../../redux/actions/actionCreator";
import "./CardHike.scss";

const CardHike = ({ hike }: IHike): JSX.Element => {
  let navigate = useNavigate();

  const { id, title, images, stadistics, user } = hike;

  const { distance, time, dificulty, elevation } = stadistics;

  const { name } = user;

  const onClick = (id: string) => {
    navigate(`/hike/get/${id}`);
    window.scroll(0, 0);
  };

  return (
    <section className="constainer__hike" onClick={() => onClick(id)}>
      <div className="cardHike">
        <h4 className="cardHike__title">{title}</h4>
        <div className="cardHike__info">
          <img
            src={images[0]}
            alt="hike montain"
            className="cardHike__images"
            width="200"
            height="150"
          />
          <span className="cardHike__stadistics">
            <p className="cardHike__stadistics-title">Distance</p>
            <p className="cardHike__stadistics-distance stadistics">
              {distance}
            </p>
            <p className="cardHike__stadistics-title">Time</p>
            <p className="cardHike__stadistics-time stadistics">{time}</p>
            <p className="cardHike__stadistics-title">Dificulty</p>
            <p className="cardHike__stadistics-dificulty stadistics">
              {dificulty}
            </p>
            <p className="cardHike__stadistics-title">Elevation</p>
            <p className="cardHike__stadistics-elevation stadistics">
              {elevation}
            </p>
          </span>
        </div>
        <p className="cardHike__author">Author: {name}</p>
      </div>
    </section>
  );
};

export default CardHike;
