import ButtonHike from "../../components/ButtonHike/ButtonHike";
import HeaderHike from "../../components/HeaderHike/HeaderHike";

const HomePage = (): JSX.Element => {
  const handlerButton = () => {
    console.log("Hola");
  };

  return (
    <>
      <HeaderHike />
      <div className="homepage__container">
        <h4 className="homepage__description">
          Welcome to the best walking routes, where you can enjoy nature.
        </h4>
        <ButtonHike text={"MAP"} click={handlerButton} />
      </div>
    </>
  );
};

export default HomePage;
