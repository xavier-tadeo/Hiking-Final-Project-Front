import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import CardPageDetails from "./CardPageDetails";

const store = configureStore();
// jest.mock("../../hooks/useUser");
describe("Given a HeaderHike component", () => {
  describe("When it render", () => {
    test("It should render h1 with name 'hiking' and one image", () => {
      const title = "Details Hike";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardPageDetails />
          </BrowserRouter>
        </Provider>
      );
      const titleh3 = screen.getByText(title);

      expect(titleh3).toBeInTheDocument();
    });
  });
});
