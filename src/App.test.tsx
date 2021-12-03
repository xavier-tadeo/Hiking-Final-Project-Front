import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from "./redux/store";

const store = configureStore();

describe("Given a App component", () => {
  describe("When render", () => {
    test("It should rendered a HeaderHike component", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const titleHome = screen.getByRole("heading", { name: "hiKing" });

      expect(titleHome).toBeInTheDocument();
    });
  });
});
