import "./MapPage.scss";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";

const MapPage = (): JSX.Element => {
  const coordinate = {
    lat: 41.41993844003448,
    lng: 2.181601662365733,
  };
  return (
    <>
      <div className="container">
        <h3 className="title__map">MAP</h3>
        <div className="container__map">
          <MapContainer center={coordinate} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Markers />
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default MapPage;
