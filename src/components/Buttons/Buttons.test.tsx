import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import { Buttons } from "./Buttons";

const store = configureStore();
describe("Given a Buttons component", () => {
  describe("When it render", () => {
    test("It should rendered a two buttons with text 'Update' 'Delete'", () => {
      const buttonTextUpdate = "Update";
      const buttonTextDelete = "Delete";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Buttons />
          </BrowserRouter>
        </Provider>
      );

      const expectedButtonUpdate = screen.getByText(buttonTextUpdate);
      const expectedButtonDelete = screen.getByText(buttonTextDelete);

      expect(expectedButtonDelete).toBeInTheDocument();
      expect(expectedButtonUpdate).toBeInTheDocument();
    });
  });
  describe("When user click the buttons", () => {
    test("It should called the function", () => {});
  });
});
