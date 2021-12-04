import NewHikeForm from "../../components/NewHikeForm/NewHikeForm";
import "./CreateHikePage.scss";

const CreateHikePage = (): JSX.Element => {
  return (
    <>
      <section className="createhike__container">
        <div className="createhike__description-container">
          <h3 className="createhike__description">Create your own hike</h3>
        </div>

        <div className="createhike__form">
          <NewHikeForm />
        </div>
      </section>
    </>
  );
};

export default CreateHikePage;
