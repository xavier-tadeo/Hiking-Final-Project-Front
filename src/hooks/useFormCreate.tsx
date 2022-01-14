import { useState } from "react";
import toast from "react-hot-toast";
import { FormElement, IFormHike } from "../interfaces/interfaces";
import useUser from "./useUser";

export const useFormCreate = () => {
  const initialData: IFormHike = {
    title: "",
    stadistics: { distance: "", time: "", elevation: "", dificulty: 0 },
    map: { latitude: 0, longitude: 0 },

    description: "",
  };

  const [userData, setUserData] = useState<IFormHike>(initialData);
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
    setUserData(initialData);
    window.scroll(0, 0);
    toast.success("Successfully Create YouRoute!!!");
  };

  return {
    newHikeCreate,
    onChangeMap,
    onChangeStadistics,
    onChange,
    isDisable,
    userData,
  };
};
