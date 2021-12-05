import actionTypes from "../actions/actionTypes";
import currentHikeReducer from "./currentHikeReducer";

describe("Given a currentHikeReducer", () => {
  describe("When it receives id and action currentHike", () => {
    test("Then it should return a hike equal id", () => {
      const initial = {
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
        id: "12345",
      };

      const userTest = {
        hike: {
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
          id: "12345",
        },
      };

      const action = {
        type: actionTypes.currentHike,
        hike: userTest,
      };

      const result = currentHikeReducer(initial, action);

      expect(result).toEqual(userTest);
    });
  });

  describe("When it receives a hike object and action postHike", () => {
    test("Then it should return a new hike", () => {
      const initial = {
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

      const userTest = {
        hike: {
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
      };

      const action = {
        type: actionTypes.postHike,
        hike: userTest,
      };

      const result = currentHikeReducer(initial, action);

      expect(result).toEqual(userTest);
    });
  });

  describe("When it receives a id with hike object and action updateHike", () => {
    test("Then it should return a new hike", () => {
      const initial = {
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
        id: "1234",
      };

      const userTest = {
        hike: {
          title: "Modificate",
          images: ["imagen1", "imagen2", "imagen3"],
          stadistics: {
            distance: "10km",
            time: "5h",
            dificulty: 1,
            elevation: "1100m",
          },
          user: {
            name: "arlet",
          },
          id: "1234",
        },
      };

      const action = {
        type: actionTypes.updateHike,
        hike: userTest,
      };

      const result = currentHikeReducer(initial, action);

      expect(result).toEqual(userTest);
    });
  });
});
