import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import CardPageDetails from "./CardPageDetails";

const store = configureStore();

jest.mock("jwt-decode");

describe("Given a CardPageDetails component", () => {
  describe("When it render", () => {
    test("It should rendered a card with title 'Details Hike'", () => {
      const titlePage = "Details Hike";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardPageDetails />
          </BrowserRouter>
        </Provider>
      );

      const expectedTitle = screen.getByRole("heading", {
        name: titlePage,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
