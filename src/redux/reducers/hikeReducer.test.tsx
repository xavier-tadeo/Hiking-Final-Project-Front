import actionTypes from "../actions/actionTypes";
import hikeReducer from "./hikeReducer";

describe("Given a hikeReducer", () => {
  describe("When it receives a list of hiking", () => {
    test("Then it should new list of hiking to equal the list receives", () => {
      const hikeTest = [
        {
          title: "Plaça catalunya",
          images: ["imagen1", "imagen2", "imagen3"],
          stadistics: {
            distance: "4km",
            time: "3h",
            dificulty: 5,
            elevation: "200m",
          },
          user: {
            name: "arlet",
          },
        },
        {
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
        },
      ];
      const initialList: any = [];
      const action = {
        type: actionTypes.getHikes,
        hikes: hikeTest,
      };

      const result = hikeReducer(initialList, action);

      expect(result).toEqual(hikeTest);
    });
  });
});
