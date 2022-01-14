import { useCardPage } from "../../hooks/useCardPage";

export const UpdateForm = () => {
  const { hikeData, newHikeCreate, onChange, onChangeMap, onChangeStadistics } =
    useCardPage();
  return (
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
          <label className="create-route__distance-label" htmlFor="distance">
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
            value={hikeData.stadistics.dificulty}
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
          <label className="create-route__latitude-label" htmlFor="latitude">
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
          <label className="create-route__longitude-label" htmlFor="longitude">
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
  );
};
