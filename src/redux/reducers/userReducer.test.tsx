import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given a userReducer", () => {
  describe("When it receives id and action getUser", () => {
    test("Then it should return a user equal id", () => {
      const initial = {
        name: "Arlet",
        password: "261017",
        email: "arlet@arlet",
        id: "1234",
      };
      const userTest = {
        user: {
          name: "Arlet",
          password: "261017",
          email: "arlet@arlet",
          id: "1234",
        },
      };

      const action = {
        type: actionTypes.getUser,
        user: userTest,
      };

      const result = userReducer(initial, action);

      expect(result).toEqual(userTest);
    });
  });
});
