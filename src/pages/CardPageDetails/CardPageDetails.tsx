import { useEffect, useState } from "react";
import { useParams } from "react-router";
import jwtDecode from "jwt-decode";
import useUser from "../../hooks/useUser";
import { IForm } from "../../components/NewHikeForm/NewHikeForm";

const CardPageDetails = () => {
  const { currentHike, getCurrentHike } = useUser();
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

  // useEffect(() => {
  //   setTimeout(() => ({
  //  initialHike = { title: currentHike.title,
  //   stadistics: {
  //     distance: currentHike.stadistics?.distance,
  //     time: currentHike.stadistics?.time,
  //     elevation: currentHike.stadistics?.elevation,
  //     dificulty: currentHike.stadistics?.dificulty,
  //   },
  //   map: {
  //     latitude: currentHike.map?.latitude,
  //     longitude: currentHike.map?.longitude,
  //   },

  //   description: currentHike.description,}
  // }))
  // })

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

  // const newHikeCreate = async (evt: FormElement) => {
  //   evt.preventDefault();
  //   const formData = new FormData();
  //   formData.append("title", userData.title);
  //   formData.append("stadistics[distance]", userData.stadistics.distance);
  //   formData.append("stadistics[elevation]", userData.stadistics.elevation);
  //   formData.append("stadistics[dificulty]", userData.stadistics.dificulty);
  //   formData.append("stadistics[time]", userData.stadistics.time);
  //   formData.append("images", userData.images);
  //   formData.append("map[latitude]", userData.map.latitude);
  //   formData.append("map[longitude]", userData.map.longitude);
  //   formData.append("description", userData.description);
  // };

  return (
    <>
      <section className="cardpage__container">
        <div className="cardpage__description-container">
          <h3 className="cardpage__description">Details Hike</h3>
        </div>
        {idUserHike === idHike ? <button>Hola</button> : ""}
        <h4 className="cardpage__title">{currentHike.title}</h4>

        <div className="cardpage__description">
          <p className="cardpage__description-paragraph">
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
        {hikeData.title === undefined ? (
          ""
        ) : (
          <form
            className="registerForm"
            noValidate
            autoComplete="off"
            onSubmit={() => {}}
          >
            <h5 className="create-route__title">Create your Route</h5>
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
                type="text"
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
                className="create-route__longitude-label"
                htmlFor="longitude"
              >
                Longitude
              </label>
              <input
                type="text"
                className="create-route__longitude"
                id="longitude"
                placeholder="Longitude"
                value={hikeData.map.longitude}
                onChange={(evt) => onChangeMap(evt)}
              />
              <label
                className="create-route__latitude-label"
                htmlFor="latitude"
              >
                Latitude
              </label>
              <input
                type="text"
                className="create-route__latitude"
                id="latitude"
                placeholder="Latitude"
                value={hikeData.map.latitude}
                onChange={(evt) => onChangeMap(evt)}
              />
              <label className="create-route__images-label" htmlFor="images">
                Images
              </label>
              <input
                type="file"
                name="filefield"
                multiple
                className="create-route__images"
                id="images"
                placeholder="Images"
                onChange={(evt) => onChange(evt)}
              />
              <label
                className="create-route__description-label"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                maxLength={200}
                minLength={30}
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
        )}
      </section>
    </>
  );
};

export default CardPageDetails;
