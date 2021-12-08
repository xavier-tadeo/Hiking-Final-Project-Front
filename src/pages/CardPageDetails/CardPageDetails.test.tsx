import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { useParams } from "react-router";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import { server } from "../../mocks/server";
import configureStore from "../../redux/store";
import CardPageDetails from "./CardPageDetails";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: jest.fn(),
}));

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

describe("Given a CardPageDetails component", () => {
  describe("When it render", () => {
    test("It should render h3 with name 'hiking' and one image", () => {
      const title = "Details Hike";
      (useParams as jest.Mock).mockReturnValue({
        id: "61afd910499c7f1bd9abfabe",
      });

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardPageDetails />
          </BrowserRouter>
        </Provider>
      );
      const titleh3 = screen.getByText(title);

      expect(titleh3).toBeInTheDocument();
    });
  });
  describe("When it receives a currentHike", () => {
    test("When it should render a info about the hike", async () => {
      (useParams as jest.Mock).mockReturnValue({
        id: "61afd910499c7f1bd9abfabe",
      });

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardPageDetails />
          </BrowserRouter>
        </Provider>
      );
      const title = await waitFor(() =>
        screen.getByText("Montaña Rusa de emotions!")
      );
      const distance = await waitFor(() => screen.getByText("Distance: 2km"));
      const time = await waitFor(() => screen.getByText("Time: 3h"));
      const dificulty = await waitFor(() => screen.getByText("Dificulty: 3"));
      const elevation = await waitFor(() =>
        screen.getByText("Elevation: 200m")
      );
      const description = await waitFor(() =>
        screen.getByText("Super montaña")
      );

      expect(title).toBeInTheDocument();
      expect(distance).toBeInTheDocument();
      expect(time).toBeInTheDocument();
      expect(dificulty).toBeInTheDocument();
      expect(elevation).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
