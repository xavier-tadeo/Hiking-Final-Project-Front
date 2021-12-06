import { Marker } from "react-leaflet";
import Icon from "../../assets/icon.svg";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const iconPerson = L.icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  iconSize: [50, 50],
  shadowUrl: Icon,
});

const Markers = () => {
  const coordinate = {
    lat: 41.41993844003448,
    lng: 2.181601662365733,
  };

  return <Marker position={coordinate} icon={iconPerson} />;
};

export default Markers;
