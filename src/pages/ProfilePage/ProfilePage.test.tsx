import { render, screen } from "@testing-library/react";
import ProfilePage from "./ProfilePage";

describe("Given a ProfilePage component", () => {
  describe("When render a component", () => {
    test("It should rendered a <h3> with title 'Construyendo MAPA'", () => {
      render(<ProfilePage />);
      const expectTitle = screen.getByRole("heading", {
        name: "Your Profile",
      });

      expect(expectTitle).toBeInTheDocument();
    });
  });
});
