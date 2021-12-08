import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import NewHikeForm from "./NewHikeForm";
import userEvent from "@testing-library/user-event";

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
          <BrowserRouter>
            <NewHikeForm />
          </BrowserRouter>
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
          <BrowserRouter>
            <NewHikeForm />
          </BrowserRouter>
        </Provider>
      );
      const addButton = screen.getByRole("button", {
        name: "Create",
      });

      expect(addButton).toBeDisabled();
    });
  });

  describe("When the user type in inputs", () => {
    test("Then it should change a value", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NewHikeForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(
        screen.getByRole("textbox", { name: "Title" }),
        `Hello, formigal`
      );
      expect(screen.getByRole("textbox", { name: "Title" })).toHaveValue(
        "Hello, formigal"
      );
    });
  });

  describe("When function onChangeStadistics it s called", () => {
    test("It should called the setUserData", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NewHikeForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByRole("textbox", { name: "Distance" }), `100m`);
      expect(screen.getByRole("textbox", { name: "Distance" })).toHaveValue(
        "100m"
      );
    });
  });
  describe("When function onChangeMap it s called", () => {
    test("It should called the setUserData", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NewHikeForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(
        screen.getByRole("spinbutton", { name: "Latitude" }),
        `1.12121`
      );
      expect(screen.getByRole("spinbutton", { name: "Latitude" })).toHaveValue(
        1.12121
      );
    });
  });

  describe("When the user writte in all inputs", () => {
    test("It should button enabled", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NewHikeForm />
          </BrowserRouter>
        </Provider>
      );
      const addButton = screen.getByRole("button", {
        name: "Create",
      });
      fireEvent.click(addButton);

      userEvent.type(
        screen.getByRole("textbox", { name: "Title" }),
        `Canigo les valls`
      );
      userEvent.type(screen.getByRole("textbox", { name: "Distance" }), `100m`);
      userEvent.type(
        screen.getByRole("textbox", { name: "Description" }),
        `Todo muy cool`
      );
      userEvent.type(
        screen.getByRole("textbox", { name: "Elevation" }),
        `1000m`
      );

      userEvent.type(screen.getByRole("textbox", { name: "Time" }), `1h`);

      userEvent.type(
        screen.getByRole("spinbutton", { name: "Latitude" }),
        `1.12121`
      );
      userEvent.type(
        screen.getByRole("spinbutton", { name: "Longitude" }),
        `1.12121`
      );
      userEvent.type(
        screen.getByRole("spinbutton", { name: "Dificulty" }),
        `1`
      );

      expect(addButton).not.toBeDisabled();
    });
  });
});
