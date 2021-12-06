import { render, screen } from "@testing-library/react";
import MapPage from "./MapPage";

describe("Given a MapPage component", () => {
  describe("When render a component", () => {
    test("It should rendered a <h3> with title 'Construyendo MAPA'", () => {
      const title = "MAP";

      render(<MapPage />);
      const expectTitle = screen.getByRole("heading", {
        name: title,
      });

      expect(expectTitle).toBeInTheDocument();
    });
  });
});
