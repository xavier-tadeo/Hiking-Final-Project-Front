import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import CreateHikePage from "./CreateHikePage";

const store = configureStore();
describe("Given a CreateHikePage component", () => {
  describe("When it render", () => {
    test("It should renderer one title 'Create your own hike' and FormNewHike", () => {
      const title = "Create your own hike";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateHikePage />
          </BrowserRouter>
        </Provider>
      );

      const expectTitlePage = screen.getByRole("heading", {
        name: title,
      });
      const expectTitle = screen.getByRole("heading", {
        name: "Create your Route",
      });
      expect(expectTitle).toBeInTheDocument();
      expect(expectTitlePage).toBeInTheDocument();
    });
  });
});
