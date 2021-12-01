import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import CardHike from "./CardHike";

const store = configureStore();

describe("Given a CardHike component", () => {
  describe("When it renderer", () => {
    test("It should render five <p> tags with a names Distance, Time, Dificulty", () => {
      const hikeTest = {
        title: "Guinardo",
        images: ["imagen1", "imagen2", "imagen3"],
        stadistics: {
          distance: "2km",
          time: "3h",
          dificulty: 3,
          elevation: "200m",
        },
        user: {
          name: "arlet",
        },
      };

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardHike hike={hikeTest} />
          </BrowserRouter>
        </Provider>
      );
      const expectTitle = screen.getByText(hikeTest.title);
      const expectDistance = screen.getByText(hikeTest.stadistics.distance);
      const expectTime = screen.getByText(hikeTest.stadistics.time);
      const expectElevation = screen.getByText(hikeTest.stadistics.elevation);
      const expectDificulty = screen.getByText(hikeTest.stadistics.dificulty);

      expect(expectTitle).toBeInTheDocument();
      expect(expectDistance).toBeInTheDocument();
      expect(expectTime).toBeInTheDocument();
      expect(expectElevation).toBeInTheDocument();
      expect(expectDificulty).toBeInTheDocument();
    });
  });
});
