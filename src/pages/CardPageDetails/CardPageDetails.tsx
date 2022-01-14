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

const CardPageDetails = () => {
  const { userInfo, currentHike, getCurrentHike } = useUser();
  const { id } = useParams();
  const {
    deleteActionHike,
    hikeData,
    newHikeCreate,
    onChange,
    onChangeMap,
    onChangeStadistics,
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
        <div className="container__form">
          <form
            className="registerForm"
            noValidate
            autoComplete="off"
            onSubmit={newHikeCreate}
          >
            <h5 className="create-route__title">Modify your Route</h5>
            <div className="create-route__container">
              <label className="create-route__title-label" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                className="create-route__title"
                id="title"
                placeholder="Title"
                value={hikeData.title}
                onChange={(evt) => onChange(evt)}
              />
              <label
                className="create-route__distance-label"
                htmlFor="distance"
              >
                Distance
              </label>
              <input
                type="text"
                className="create-route__distancie"
                id="distance"
                placeholder="Distance"
                value={hikeData.stadistics.distance}
                onChange={(evt) => onChangeStadistics(evt)}
              />
              <label
                className="create-route__dificulty-label"
                htmlFor="dificulty"
              >
                Dificulty
              </label>
              <input
                type="number"
                min="1"
                max="5"
                className="create-route__dificulty"
                id="dificulty"
                placeholder="Distance"
                value={hikeData.stadistics.dificulty}
                onChange={(evt) => onChangeStadistics(evt)}
              />
              <label
                className="create-route__elevation-label"
                htmlFor="elevation"
              >
                Elevation
              </label>
              <input
                type="text"
                className="create-route__elevation"
                id="elevation"
                placeholder="Elevation"
                value={hikeData.stadistics.elevation}
                onChange={(evt) => onChangeStadistics(evt)}
              />
              <label className="create-route__time-label" htmlFor="time">
                Time
              </label>
              <input
                type="text"
                className="create-route__time"
                id="time"
                placeholder="Time"
                value={hikeData.stadistics.time}
                onChange={(evt) => onChangeStadistics(evt)}
              />
              <label
                className="create-route__latitude-label"
                htmlFor="latitude"
              >
                Latitude
              </label>
              <input
                type="number"
                className="create-route__latitude"
                id="latitude"
                placeholder="Latitude"
                value={hikeData.map.latitude}
                onChange={(evt) => onChangeMap(evt)}
              />
              <label
                className="create-route__longitude-label"
                htmlFor="longitude"
              >
                Longitude
              </label>
              <input
                type="number"
                className="create-route__longitude"
                id="longitude"
                placeholder="Longitude"
                value={hikeData.map.longitude}
                onChange={(evt) => onChangeMap(evt)}
              />
              <label
                className="create-route__description-label"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                maxLength={1000}
                minLength={30}
                cols={23}
                rows={20}
                className="create-route__description"
                id="description"
                placeholder="Description"
                value={hikeData.description}
                onChange={(evt) => onChange(evt)}
              />
              <div className="form__button">
                <button type="submit" className="form__button">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CardPageDetails;
