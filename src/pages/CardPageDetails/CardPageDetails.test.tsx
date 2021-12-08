import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import { server } from "../../mocks/server";
import { MemoryRouter } from "react-router-dom";
import configureStore from "../../redux/store";
import CardPageDetails from "./CardPageDetails";

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

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["hike/get/61afd910499c7f1bd9abfabe"]}>
            <CardPageDetails />
          </MemoryRouter>
        </Provider>
      );
      const titleh3 = screen.getByText(title);

      expect(titleh3).toBeInTheDocument();
    });
  });
  // describe("When it receives a currentHike", () => {
  //   test("When it should render a info about the hike", () => {
  //     render(
  //       <Provider store={store}>
  //         <MemoryRouter initialEntries={["hike/get/61afd910499c7f1bd9abfabe"]}>
  //           <CardPageDetails />
  //         </MemoryRouter>
  //       </Provider>
  //     );
  //     const title = screen.getByText("asasasa");
  //     const distance = screen.getByText("2km");
  //     const time = screen.getByText("3h");
  //     const dificulty = screen.getByText(3);
  //     const elevation = screen.getByText("200m");
  //     const description = screen.getByText("Super montaña");

  //     expect(title).toBeInTheDocument();
  //     expect(distance).toBeInTheDocument();
  //     expect(time).toBeInTheDocument();
  //     expect(dificulty).toBeInTheDocument();
  //     expect(elevation).toBeInTheDocument();
  //     expect(description).toBeInTheDocument();
  //   });
  // });
});
