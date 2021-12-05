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
});
