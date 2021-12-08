import { useState } from "react";
import { useNavigate } from "react-router";
import "./NewHikeForm.scss";
import useUser from "../../hooks/useUser";
import pathsHike from "../../paths/pathsHike";

type FormElement = React.FormEvent<HTMLFormElement>;

interface Maping {
  latitude: number | any;
  longitude: number | any;
}

interface Stadistics {
  distance: string;
  time: string;
  elevation: string;
  dificulty: number | any;
}

export interface IForm {
  title: string;
  description: string;
  map: Maping;
  stadistics: Stadistics;
  images?: any;
}

const NewHikeForm = (): JSX.Element => {
  const initialData: IForm = {
    title: "",
    stadistics: { distance: "", time: "", elevation: "", dificulty: 0 },
    map: { latitude: 0, longitude: 0 },

    description: "",
  };

  const [userData, setUserData] = useState<IForm>(initialData);
  const [isDisable, setIsDisable] = useState(true);

  const checkForm = () => {
    if (
      userData.title !== "" &&
      userData.stadistics.distance !== "" &&
      userData.stadistics.elevation !== "" &&
      userData.stadistics.dificulty !== "" &&
      userData.stadistics.time !== "" &&
      userData.map.latitude !== 0 &&
      userData.map.longitude !== 0 &&
      userData.description !== ""
    ) {
      setIsDisable(false);
    }
  };

  const onChange = (evt: any) => {
    setUserData({
      ...userData,
      [evt.target.id]:
        evt.target.type === "file" ? evt.target.files[0] : evt.target.value,
    });
    checkForm();
  };

  const onChangeStadistics = (evt: any) => {
    setUserData({
      ...userData,
      stadistics: {
        ...userData.stadistics,
        [evt.target.id]: evt.target.value,
      },
    });

    checkForm();
  };

  const onChangeMap = (evt: any) => {
    setUserData({
      ...userData,
      map: {
        ...userData.map,
        [evt.target.id]: evt.target.value,
      },
    });
    checkForm();
  };

  const { postCurretHike } = useUser();
  let navigate = useNavigate();

  const newHikeCreate = async (evt: FormElement) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("title", userData.title);
    formData.append("stadistics[distance]", userData.stadistics.distance);
    formData.append("stadistics[elevation]", userData.stadistics.elevation);
    formData.append("stadistics[dificulty]", userData.stadistics.dificulty);
    formData.append("stadistics[time]", userData.stadistics.time);
    formData.append("images", userData.images);
    formData.append("map[latitude]", userData.map.latitude);
    formData.append("map[longitude]", userData.map.longitude);
    formData.append("description", userData.description);

    await postCurretHike(formData);
    navigate(pathsHike.homePage);
    window.scroll(0, 0);
  };

  return (
    <>
      <form
        className="registerForm"
        noValidate
        autoComplete="off"
        onSubmit={newHikeCreate}
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
          <label className="create-route__distance-label" htmlFor="distance">
            Distance
          </label>
          <input
            type="text"
            className="create-route__distancie"
            id="distance"
            placeholder="Distance"
            value={userData.stadistics.distance}
            onChange={(evt) => onChangeStadistics(evt)}
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
            onChange={(evt) => onChangeStadistics(evt)}
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
            value={userData.stadistics.time}
            onChange={(evt) => onChangeStadistics(evt)}
          />
          <label className="create-route__longitude-label" htmlFor="longitude">
            Longitude
          </label>
          <input
            type="number"
            className="create-route__longitude"
            id="longitude"
            placeholder="Longitude"
            value={userData.map.longitude}
            onChange={(evt) => onChangeMap(evt)}
          />
          <label className="create-route__latitude-label" htmlFor="latitude">
            Latitude
          </label>
          <input
            type="number"
            className="create-route__latitude"
            id="latitude"
            placeholder="Latitude"
            value={userData.map.latitude}
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
            maxLength={1000}
            minLength={30}
            cols={23}
            rows={20}
            className="create-route__description"
            id="description"
            placeholder="Description"
            value={userData.description}
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
