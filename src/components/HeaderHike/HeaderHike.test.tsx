import { render, screen } from "@testing-library/react";
import HeaderHike from "./HeaderHike";

describe("Given a HeaderHike component", () => {
  describe("When it render", () => {
    test("It should render h1 with name 'hiking' and one image", () => {
      const title = "hiKing";
      const image = "logo hiking";

      render(<HeaderHike />);
      const titleh1 = screen.getByText(title);
      const logoHiking = screen.getByAltText(image);

      expect(titleh1).toBeInTheDocument();
      expect(logoHiking).toBeInTheDocument();
    });
  });
});
