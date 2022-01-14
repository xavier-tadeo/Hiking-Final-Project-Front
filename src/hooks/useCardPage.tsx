import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormElement, IFormHike } from "../interfaces/interfaces";
import pathsHike from "../paths/pathsHike";
import useUser from "./useUser";

export const useCardPage = () => {
  const { currentHike, deleteCurrentHike } = useUser();
  const { id } = useParams();
  const [updateWant, setUpdateWant] = useState(false);

  let initialHike: IFormHike = {
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

  useEffect(() => {
    setHikeData(currentHike);
  }, [currentHike]);

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

  const { updateCurrentHike } = useUser();
  let navigate = useNavigate();

  const newHikeCreate = async (evt: FormElement) => {
    evt.preventDefault();
    setUpdateWant(false);
    await updateCurrentHike(hikeData, id as string);
    navigate(pathsHike.createHike);
    window.scroll(0, 0);
  };

  const deleteActionHike = async () => {
    await deleteCurrentHike(id as string);
    navigate(pathsHike.userProfile);
  };

  return {
    hikeData,
    onChange,
    onChangeStadistics,
    onChangeMap,
    newHikeCreate,
    updateWant,
    deleteActionHike,
    setUpdateWant,
  };
};
