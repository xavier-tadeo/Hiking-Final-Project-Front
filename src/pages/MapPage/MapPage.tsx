import "./MapPage.scss";

const MapPage = (): JSX.Element => {
  return (
    <>
      <div className="googlemaps__container">
        <h3 className="title__map">MAP</h3>
        <div className="googlemaps">
          <iframe
            title="mapsgoogle"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210922.19596242218!2d1.5177389240041905!3d42.61686191743411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12af6472344ffc2b%3A0xd5d6d50d2feb3254!2sPic%20de%20l%E2%80%99Estany%20Mort!5e0!3m2!1sen!2ses!4v1638790628744!5m2!1sen!2ses"
            width="300"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapPage;
