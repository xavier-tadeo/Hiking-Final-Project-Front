import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { server } from "../../mocks/server";
import configureStore from "../../redux/store";
import RegisterPage from "./RegisterPage";
import { BrowserRouter } from "react-router-dom";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
const store = configureStore();

describe("Given a RegisterPage component", () => {
  describe("When it render", () => {
    test("It should rendered a one tag <h3> with name 'Register'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterPage />
          </BrowserRouter>
        </Provider>
      );
      const expectedTitle = screen.getByRole("heading", { name: "Register" });
      const expectedText = screen.getByRole("textbox", { name: "Name" });

      expect(expectedTitle).toBeInTheDocument();
      expect(expectedText).toBeInTheDocument();
    });
  });
});
