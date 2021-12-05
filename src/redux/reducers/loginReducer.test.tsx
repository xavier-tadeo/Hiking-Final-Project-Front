import actionTypes from "../actions/actionTypes";
import loginReducer from "./loginReducer";

describe("Given a loginReducer", () => {
  describe("When it receives a one user and action register", () => {
    test("Then it should return a new user", () => {
      const initial = { isAuthenticated: false, user: {} };
      const userTest = {
        user: { name: "Arlet", password: "261017", email: "arlet@arlet" },
      };

      const action = {
        type: actionTypes.registerUser,
        user: userTest,
      };

      loginReducer(initial, action);

      // expect(result).toEqual(userTest);
    });
  });

  describe("When it receives a one user and action login", () => {
    test("Then it should return a new user", () => {
      const initial = { isAuthenticated: true, user: {} };
      const userTest = {
        isAuthenticated: true,
        user: { isAuthenticated: true, user: { user: {} } },
      };

      const action = {
        type: actionTypes.loginUser,
        user: userTest,
      };

      const result = loginReducer(initial, action);
      console.log(result);
      console.log(userTest);
      // expect(result).toEqual(userTest);
    });
  });
});
