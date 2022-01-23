import { useEffect } from "react";
import CardHike from "../../components/CardHike/CardHike";
import useUser from "../../hooks/useUser";
import { Spinner } from "reactstrap";
import "./HomePage.scss";
import "@fontsource/architects-daughter";
import "@fontsource/roboto";
const HomePage = (): JSX.Element => {
  const { hikingInfo, getHiking } = useUser();

  useEffect(() => {
    getHiking();
  }, [getHiking]);

  return (
    <>
      <section className="homepage__container">
        <div className="homepage__description-container">
          <h3 className="homepage__description-title animate__animated animate__backInLeft">
            Welcome to the best walking routes, where you can enjoy nature.
          </h3>
          <h3 className="homepage__description-title  animate__animated animate__backInRight">
            You want to create your own routes. Register and start your way.
          </h3>
        </div>
        <div className="homepage__container-title">
          <h3 className="homepage__title ">The best routes</h3>
        </div>
        {hikingInfo.length === 0 ? (
          <div className="container_spinner">
            <Spinner color="primary" />
          </div>
        ) : (
          <div className="homepage__card">
            {hikingInfo.map((hike: any) => (
              <CardHike hike={hike} key={hike.id} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default HomePage;
