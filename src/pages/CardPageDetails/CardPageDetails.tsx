import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useCardPage } from "../../hooks/useCardPage";
import { UpdateForm } from "../../components/UpdateForm/UpdateForm";
import { MapHike } from "../../components/MapHike/MapHike";
import "leaflet/dist/leaflet.css";
import "./CardPageDetails.scss";
import { Buttons } from "../../components/Buttons/Buttons";
import { lookLocalStorage } from "../../helpers/lookLocalStorage";

const CardPageDetails = () => {
  const { userInfo, currentHike, getCurrentHike } = useUser();
  const { id } = useParams();
  const { updateWant } = useCardPage();

  useEffect(() => {
    getCurrentHike(id);
  }, [getCurrentHike, id]);

  const { tokenDecode } = lookLocalStorage();

  return (
    <>
      {updateWant === false ? (
        <section className="cardpage__container">
          <div className="cardpage__description-container">
            <h3 className="cardpage__description--title">Details Hike</h3>
          </div>
          {tokenDecode.id === currentHike.user &&
            userInfo.isAuthenticated === true && <Buttons />}
          <h4 className="cardpage__title">{currentHike.title}</h4>
          <div className="cardpage__description">
            <p className="cardpage__description--paragraph">
              {currentHike.description}
            </p>
          </div>
          <div className="cardpage__container-stadistics-image">
            <div className="cardpage__stadistics">
              <p className="cardpage__stadistics-distance stadistics">
                Distance: {currentHike.stadistics?.distance}
              </p>

              <p className="cardpage__stadistics-time stadistics">
                Time: {currentHike.stadistics?.time}
              </p>

              <p className="cardpage__stadistics-dificulty stadistics">
                Dificulty: {currentHike.stadistics?.dificulty}
              </p>

              <p className="cardpage__stadistics-elevation stadistics">
                Elevation: {currentHike.stadistics?.elevation}
              </p>
            </div>
            <div className="cardpage__stadistics-map">
              {currentHike.map?.latitude !== undefined && (
                <MapHike currentHike={currentHike} />
              )}
            </div>

            <div className="cardpage__images">
              {currentHike.images?.map((hike: string, index: number) => (
                <div className="container__image" key={index}>
                  {" "}
                  <img
                    src={hike}
                    alt="hike montain"
                    className="cardpage__image"
                    width="200"
                    height="150"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <UpdateForm />
      )}
    </>
  );
};

export default CardPageDetails;
