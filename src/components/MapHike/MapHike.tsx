import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import Icon from "../../assets/icon.svg";
import { ICurrentHikeObject } from "../../interfaces/interfaces";

export const MapHike = ({ currentHike }: ICurrentHikeObject) => {
  console.log(currentHike);
  const iconPerson = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconSize: [50, 50],
  });

  return (
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
  );
};
