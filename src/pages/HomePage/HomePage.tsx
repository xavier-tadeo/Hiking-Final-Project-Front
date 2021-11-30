import "./HomePage.scss";

const HomePage = (): JSX.Element => {
  return (
    <>
      <section className="homepage__container">
        <div className="homepage__description-container">
          <h3 className="homepage__description">
            Welcome to the best walking routes, where you can enjoy nature.
          </h3>
        </div>
        <h3 className="homepage__title">The best routes</h3>
        <div className="homepage__card"></div>
      </section>
    </>
  );
};

export default HomePage;
