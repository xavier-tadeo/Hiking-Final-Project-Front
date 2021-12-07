import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import ProfilePage from "./ProfilePage";

const store = configureStore();

describe("Given a ProfilePage component", () => {
  describe("When render a component", () => {
    test("It should rendered a user Id", () => {
      jest.spyOn(window.localStorage.__proto__, "getItem");
      window.localStorage.__proto__.getItem = jest.fn().mockReturnValue(
        JSON.stringify({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXJsZXQiLCJpZCI6IjYxYTYzODE3NDExZmFmMzgzYjYxMTg3MyIsImlhdCI6MTYzODg3ODkzNH0.NhcwccOXVdatMp80PrahrlCyVQCVU5d5fSGBXvZnx1Y",
        })
      );

      render(
        <Provider store={store}>
          <ProfilePage />
        </Provider>
      );

      const expectTitle = screen.getByRole("heading", {
        name: "Your Profile",
      });
      expect(expectTitle).toBeInTheDocument();
    });
  });
});
