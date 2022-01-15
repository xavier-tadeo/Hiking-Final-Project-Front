import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useCardPage } from "../../hooks/useCardPage";
import { UpdateForm } from "../../components/UpdateForm/UpdateForm";
import { Buttons } from "../../components/Buttons/Buttons";
import { lookLocalStorage } from "../../helpers/lookLocalStorage";
import { CardDetails } from "../../components/CardDetails/CardDetails";
import "leaflet/dist/leaflet.css";
import "./CardPageDetails.scss";

const CardPageDetails = () => {
  const { userInfo, currentHike, getCurrentHike } = useUser();
  const { id } = useParams();
  const { updateWant } = useCardPage();

  useEffect(() => {
    getCurrentHike(id);
  }, [getCurrentHike, id]);

  const { tokenDecode } = lookLocalStorage();

  return (
    <>
      {updateWant === false ? (
        <section className="cardpage__container">
          <div className="cardpage__description-container">
            <h3 className="cardpage__description--title">Details Hike</h3>
          </div>
          {tokenDecode.id === currentHike.user &&
            userInfo.isAuthenticated === true && <Buttons />}
          <h4 className="cardpage__title">{currentHike.title}</h4>
          <div className="cardpage__description">
            <p className="cardpage__description--paragraph">
              {currentHike.description}
            </p>
          </div>
          <div className="cardpage__container-stadistics-image">
            <CardDetails currentHike={currentHike} />
          </div>
        </section>
      ) : (
        <UpdateForm />
      )}
    </>
  );
};

export default CardPageDetails;
