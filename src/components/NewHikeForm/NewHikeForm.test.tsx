import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import NewHikeForm from "./NewHikeForm";

describe("Given a NewHikeForm component", () => {
  describe("When it is render", () => {
    test("Then it should render a form with a 9 inputs and labels, and a button", () => {
      const labelTitle = "Title";
      const labelDistance = "Distance";
      const labelDificulty = "Dificulty";
      const labelElevation = "Elevation";
      const labelTime = "Time";
      const labelMapLongitude = "Map Longitude";
      const labelMapLatitude = "Map Latitude";
      const labelImages = "Images";
      const labelDescription = "Description";

      render(<NewHikeForm />);

      const title = screen.getByLabelText(labelTitle);
      // const distance = screen.getByLabelText(labelDistance);
      const dificulty = screen.getByLabelText(labelDificulty);
      const elevation = screen.getByLabelText(labelElevation);
      const time = screen.getByLabelText(labelTime);
      const longitude = screen.getByLabelText(labelMapLongitude);
      const latitude = screen.getByLabelText(labelMapLatitude);
      const images = screen.getByLabelText(labelImages);
      const description = screen.getByLabelText(labelDescription);

      expect(title).toBeInTheDocument();
      // expect(distance).toBeInTheDocument();
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
      render(<NewHikeForm />);
      const addButton = screen.getByRole("button", {
        name: "Create",
      });

      expect(addButton).toBeDisabled();
    });
  });

  // describe("When the user has typed all inputs", () => {
  //   test("Then login button should not be clickable", () => {
  //     const labelTitle = "Title";
  //     const labelDistance = "Distance";
  //     const labelDificulty = "Dificulty";
  //     const labelElevation = "Elevation";
  //     const labelTime = "Time";
  //     const labelMapLongitude = "Map Longitude";
  //     const labelMapLatitude = "Map Latitude";
  //     const labelImages = "Images";
  //     const labelDescription = "Description";

  //     render(<NewHikeForm />);

  //     const title = screen.getByLabelText(labelTitle);
  //     const distance = screen.getByLabelText(labelDistance);
  //     const dificulty = screen.getByLabelText(labelDificulty);
  //     const elevation = screen.getByLabelText(labelElevation);
  //     const time = screen.getByLabelText(labelTime);
  //     const longitude = screen.getByLabelText(labelMapLongitude);
  //     const latitude = screen.getByLabelText(labelMapLatitude);
  //     const images = screen.getByLabelText(labelImages);
  //     const description = screen.getByLabelText(labelDescription);

  //     userEvent.type(title, "Arlet");
  //     userEvent.type(distance, "Arlet");
  //     userEvent.type(dificulty, "Arlet");
  //     userEvent.type(elevation, "Arlet");
  //     userEvent.type(time, "Arlet");
  //     userEvent.type(longitude, "Arlet");
  //     userEvent.type(latitude, "Arlet");
  //     userEvent.type(images, "Arlet");
  //     userEvent.type(description, "Arlet");

  //     const createButton = screen.getByRole("button", {
  //       name: "Create",
  //     });
  //     userEvent.click(createButton);

  //     expect(createButton).not.toBeDisabled();
  //   });
  // });
});
