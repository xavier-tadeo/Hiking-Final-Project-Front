import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import jwtDecode from "jwt-decode";
import useUser from "../../hooks/useUser";
import { IForm } from "../../components/NewHikeForm/NewHikeForm";
import "./CardPageDetails.scss";
import { FormElement } from "../../components/LoginForm/LoginForm";
import pathsHike from "../../paths/pathsHike";

const CardPageDetails = () => {
  const { userInfo, currentHike, getCurrentHike } = useUser();
  const { id } = useParams();

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

  let initialHike: IForm = {
    title: currentHike.title,
    stadistics: {
      distance: currentHike.stadistics?.distance,
      time: currentHike.stadistics?.time,
      elevation: currentHike.stadistics?.elevation,
      dificulty: currentHike.stadistics?.dificulty,
    },
    map: {
      latitude: currentHike.map?.latitude,
      longitude: currentHike.map?.longitude,
    },

    description: currentHike.description,
  };

  const [hikeData, setHikeData] = useState(initialHike);

  useEffect(() => {
    setHikeData(currentHike);
  }, [currentHike]);

  const onChange = (evt: any) => {
    setHikeData({
      ...hikeData,
      [evt.target.id]:
        evt.target.type === "file" ? evt.target.files[0] : evt.target.value,
    });
  };

  const onChangeStadistics = (evt: any) => {
    setHikeData({
      ...hikeData,
      stadistics: {
        ...hikeData.stadistics,
        [evt.target.id]: evt.target.value,
      },
    });
  };

  const onChangeMap = (evt: any) => {
    setHikeData({
      ...hikeData,
      map: {
        ...hikeData.map,
        [evt.target.id]: evt.target.value,
      },
    });
  };

  const { updateCurrentHike } = useUser();
  let navigate = useNavigate();

  const newHikeCreate = async (evt: FormElement) => {
    evt.preventDefault();
    setUpdateWant(false);
    await updateCurrentHike(hikeData, id as string);
    navigate(pathsHike.homePage);
  };

  const [updateWant, setUpdateWant] = useState(false);

  const { deleteCurrentHike } = useUser();

  const deleteActionHike = async () => {
    await deleteCurrentHike(id as string);
    navigate(pathsHike.userProfile);
  };

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
            <div className="cardpage__stadistics-map">
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
                <iframe
                  title="map"
                  width="405"
                  height="300"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${currentHike.map?.longitude}%2C${currentHike.map?.latitude}%2C${currentHike.map?.longitude}%2C${currentHike.map?.latitude}&amp=8;layer=cyclosm`}
                ></iframe>
                <br />
                <small>
                  <a
                    href={`https://www.openstreetmap.org/#map=8/${currentHike.map?.latitude}/${currentHike.map?.longitude}&amp;layers=Y`}
                  >
                    View Larger Map
                  </a>
                </small>
              </div>
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
