import { useEffect } from "react";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import Icon from "../../assets/icon.svg";
import useUser from "../../hooks/useUser";
import { useCardPage } from "../../hooks/useCardPage";
import "leaflet/dist/leaflet.css";
import "./CardPageDetails.scss";
import { UpdateForm } from "../../components/UpdateForm/UpdateForm";

const CardPageDetails = () => {
  const { userInfo, currentHike, getCurrentHike } = useUser();
  const { id } = useParams();
  const {
    deleteActionHike,

    updateWant,
    setUpdateWant,
  } = useCardPage();

  useEffect(() => {
    getCurrentHike(id);
  }, [getCurrentHike, id]);

  const tokenUser: any = localStorage.getItem("tokenStorage");
  let token;
  let idUserHike;
  let idHike;
  if (tokenUser) {
    const userToken = JSON.parse(tokenUser);
    token = userToken.token;
    const tokenDecode: any = jwtDecode(token);
    idUserHike = tokenDecode.id;
    idHike = currentHike.user;
  }

  const iconPerson = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconSize: [50, 50],
  });

  return (
    <>
      {updateWant === false ? (
        <section className="cardpage__container">
          <div className="cardpage__description-container">
            <h3 className="cardpage__description--title">Details Hike</h3>
          </div>
          {idUserHike === idHike && userInfo.isAuthenticated === true && (
            <div className="container__button-update-delete">
              <button
                className="button__update"
                onClick={() => setUpdateWant(true)}
              >
                Update
              </button>
              <button className="button__delete" onClick={deleteActionHike}>
                Delete
              </button>
            </div>
          )}

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
                <MapContainer
                  center={{
                    lat: currentHike.map?.latitude,
                    lng: currentHike.map?.longitude,
                  }}
                  zoom={6.5}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                  />
                  <Marker
                    position={{
                      lat: currentHike.map?.latitude,
                      lng: currentHike.map?.longitude,
                    }}
                    icon={iconPerson}
                  />
                </MapContainer>
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
