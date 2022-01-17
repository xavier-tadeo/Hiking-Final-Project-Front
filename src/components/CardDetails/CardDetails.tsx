import React from "react";
import { ICurrentHikeObject } from "../../interfaces/interfaces";
import { MapHike } from "../MapHike/MapHike";

export const CardDetails = ({ currentHike }: ICurrentHikeObject) => {
  const { description, map, stadistics, images } = currentHike;

  return (
    <>
      <h4 className="cardpage__title">{currentHike.title}</h4>
      <div className="cardpage__description">
        <p className="cardpage__description--paragraph">{description}</p>
      </div>
      <div className="cardpage__container-stadistics-image">
        <div className="cardpage__stadistics">
          <p className="cardpage__stadistics-distance stadistics">
            Distance: {stadistics?.distance}
          </p>

          <p className="cardpage__stadistics-time stadistics">
            Time: {stadistics?.time}
          </p>

          <p className="cardpage__stadistics-dificulty stadistics">
            Dificulty: {stadistics?.dificulty}
          </p>

          <p className="cardpage__stadistics-elevation stadistics">
            Elevation: {stadistics?.elevation}
          </p>
        </div>
        <div className="cardpage__stadistics-map">
          {map?.latitude !== undefined && <MapHike currentHike={currentHike} />}
        </div>

        <div className="cardpage__images">
          {images?.map((hike: string, i: number) => (
            <div className="container__image" key={i}>
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
    </>
  );
};
