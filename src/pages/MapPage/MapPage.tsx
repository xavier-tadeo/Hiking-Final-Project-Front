import "./MapPage.scss";

const MapPage = (): JSX.Element => {
  return (
    <>
      <div className="leaflet__container">
        <h3 className="leaflet__map">MAP</h3>
        <div className="leaflet"></div>
      </div>
    </>
  );
};

export default MapPage;
