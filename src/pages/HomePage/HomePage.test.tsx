import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { server } from "../../mocks/server";
import configureStore from "../../redux/store";
import HomePage from "./HomePage";

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

describe("Given a HomePage component", () => {
  describe("When it render", () => {
    test("It should rendered a one placeholder inside 'Name''", () => {
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
      const expectedTitle = screen.getByRole("heading", {
        name: "The best routes",
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
