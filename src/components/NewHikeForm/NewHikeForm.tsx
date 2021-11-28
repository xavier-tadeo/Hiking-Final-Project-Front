import { useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;

interface Maping {
  latitude: number;
  longitude: number;
}

interface Stadistics {
  distance: string;
  time: string;
  elevation: string;
  dificulty: number;
}

interface IForm {
  title: string;
  description: string;
  map: Maping;
  stadistics: Stadistics;
  images: [string];
}

const NewHikeForm = (): JSX.Element => {
  const initialData: IForm = {
    title: "",
    description: "",
    map: { latitude: 0, longitude: 0 },
    stadistics: { distance: "", time: "", elevation: "", dificulty: 1 },
    images: [""],
  };

  const [userData, setUserData] = useState(initialData);
  const [isDisable, setIsDisable] = useState(true);

  const checkForm = () => {
    if (
      userData.title !== "" &&
      userData.description !== "" &&
      userData.map.latitude !== 0 &&
      userData.map.longitude !== 0 &&
      userData.stadistics.distance !== "" &&
      userData.stadistics.elevation !== "" &&
      userData.stadistics.dificulty !== 0 &&
      userData.stadistics.time !== "" &&
      userData.images !== [""]
    ) {
      setIsDisable(false);
    }
  };

  const onChange = (evt: any) => {
    setUserData({
      ...userData,
      [evt.target.id]: evt.target.value,
    });
    checkForm();
  };

  const onSignUp = (evt: FormElement) => {
    evt.preventDefault();
  };

  return (
    <>
      <form
        className="registerForm"
        noValidate
        autoComplete="off"
        onSubmit={onSignUp}
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
            value={userData.title}
            onChange={(evt) => onChange(evt)}
          />
          <label
            className="create-route__distance-label"
            htmlFor="stadistics.distance"
          >
            Distance
          </label>
          <input
            type="text"
            className="create-route__distancie"
            id="stadistics.distance"
            placeholder="Distance"
            value={userData.stadistics.distance}
            onChange={(evt) => onChange(evt)}
          />
          <label className="create-route__dificulty-label" htmlFor="dificulty">
            Dificulty
          </label>
          <input
            type="number"
            min="1"
            max="5"
            className="create-route__dificulty"
            id="dificulty"
            placeholder="Distance"
            value={userData.stadistics.dificulty}
            onChange={(evt) => onChange(evt)}
          />
          <label className="create-route__elevation-label" htmlFor="elevation">
            Elevation
          </label>
          <input
            type="text"
            className="create-route__elevation"
            id="elevation"
            placeholder="Elevation"
            value={userData.stadistics.elevation}
            onChange={(evt) => onChange(evt)}
          />
          <label className="create-route__time-label" htmlFor="time">
            Time
          </label>
          <input
            type="text"
            className="create-route__time"
            id="time"
            placeholder="Time"
            value={userData.stadistics.time}
            onChange={(evt) => onChange(evt)}
          />
          <label className="create-route__longitude-label" htmlFor="longitude">
            Map Longitude
          </label>
          <input
            type="number"
            className="create-route__longitude"
            id="longitude"
            placeholder="Longitude"
            value={userData.map.longitude}
            onChange={(evt) => onChange(evt)}
          />
          <label className="create-route__latitude-label" htmlFor="latitude">
            Map Latitude
          </label>
          <input
            type="number"
            className="create-route__latitude"
            id="latitude"
            placeholder="Latitude"
            value={userData.map.latitude}
            onChange={(evt) => onChange(evt)}
          />
          <label className="create-route__images-label" htmlFor="images">
            Images
          </label>
          <input
            type="file"
            className="create-route__images"
            id="images"
            placeholder="Images"
            value={userData.images}
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
            value={userData.images}
            onChange={(evt) => onChange(evt)}
          />
          <div className="form__button">
            <button type="submit" className="form__button" disabled={isDisable}>
              Create
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewHikeForm;
