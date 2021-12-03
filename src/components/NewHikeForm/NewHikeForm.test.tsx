import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import NewHikeForm from "./NewHikeForm";

const store = configureStore();

describe("Given a NewHikeForm component", () => {
  describe("When it is render", () => {
    test("Then it should render a form with a 9 inputs and labels, and a button", () => {
      const labelTitle = "Title";
      const labelDistance = "Distance";
      const labelDificulty = "Dificulty";
      const labelElevation = "Elevation";
      const labelTime = "Time";
      const labelMapLongitude = "Longitude";
      const labelMapLatitude = "Latitude";
      const labelImages = "Images";
      const labelDescription = "Description";

      render(
        <Provider store={store}>
          <NewHikeForm />
        </Provider>
      );

      const title = screen.getByLabelText(labelTitle);
      const distance = screen.getByLabelText(labelDistance);
      const dificulty = screen.getByLabelText(labelDificulty);
      const elevation = screen.getByLabelText(labelElevation);
      const time = screen.getByLabelText(labelTime);
      const latitude = screen.getByLabelText(labelMapLatitude);
      const longitude = screen.getByLabelText(labelMapLongitude);
      const images = screen.getByLabelText(labelImages);
      const description = screen.getByLabelText(labelDescription);

      expect(title).toBeInTheDocument();
      expect(distance).toBeInTheDocument();
      expect(dificulty).toBeInTheDocument();
      expect(elevation).toBeInTheDocument();
      expect(time).toBeInTheDocument();
      expect(longitude).toBeInTheDocument();
      expect(latitude).toBeInTheDocument();
      expect(images).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  describe("When the user hasn't typed all inpunts", () => {
    test("Then it should have a disabled button", () => {
      render(
        <Provider store={store}>
          <NewHikeForm />
        </Provider>
      );
      const addButton = screen.getByRole("button", {
        name: "Create",
      });

      expect(addButton).toBeDisabled();
    });
  });
});
