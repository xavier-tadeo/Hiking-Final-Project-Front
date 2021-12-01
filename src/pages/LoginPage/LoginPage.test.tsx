import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { server } from "../../mocks/server";
import configureStore from "../../redux/store";
import LoginPage from "./LoginPage";

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

describe("Given a LoginPage component", () => {
  describe("When it render", () => {
    test("It should rendered a one tah <h3> with name 'Login'", () => {
      const h3Name = "Name";

      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );
      const expectedTitle = screen.getByRole("heading", { name: "Login" });
      const expectedPlaceholder = screen.getByPlaceholderText(h3Name);

      expect(expectedTitle).toBeInTheDocument();
      expect(expectedPlaceholder).toBeInTheDocument();
    });
  });
});
