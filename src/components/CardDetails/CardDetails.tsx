import React from "react";
import { MapHike } from "../MapHike/MapHike";

export const CardDetails = ({ currentHike }: any) => {
  return (
    <>
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
          <MapHike currentHike={currentHike} />
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
    </>
  );
};
