import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it render", () => {
    test("It should rendered a one tah <h3> with name 'Login'", () => {
      const h3Name = "Login";

      render(<LoginPage />);
      const expectedTitle = screen.getByText(h3Name);

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
