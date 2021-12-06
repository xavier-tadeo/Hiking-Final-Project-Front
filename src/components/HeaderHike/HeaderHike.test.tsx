import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import HeaderHike from "./HeaderHike";

const store = configureStore();
describe("Given a HeaderHike component", () => {
  describe("When it render", () => {
    test("It should render h1 with name 'hiking' and one image", () => {
      const title = "hiKing";
      const image = "logo hiking";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <HeaderHike />
          </BrowserRouter>
        </Provider>
      );
      const titleh1 = screen.getByText(title);
      const logoHiking = screen.getByAltText(image);

      expect(titleh1).toBeInTheDocument();
      expect(logoHiking).toBeInTheDocument();
    });
  });
});
