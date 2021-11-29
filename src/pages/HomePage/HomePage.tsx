import ButtonHike from "../../components/ButtonHike/ButtonHike";
import HeaderHike from "../../components/HeaderHike/HeaderHike";
import "./HomePage.scss";

const HomePage = (): JSX.Element => {
  const handlerButton = () => {
    console.log("Hola");
  };

  return (
    <>
      <HeaderHike />
      <section className="homepage__container">
        <div className="homepage__description-container">
          <h4 className="homepage__description">
            Welcome to the best walking routes, where you can enjoy nature.
          </h4>
        </div>
        <div className="homepage__button">
          <ButtonHike text={"MAP"} click={handlerButton} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
