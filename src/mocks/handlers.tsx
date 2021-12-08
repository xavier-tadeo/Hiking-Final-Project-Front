import { rest } from "msw";

const mockToken = "1234567890";
const mockId = "0987654321";
const mockHikes = [
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
  {
    title: "Montaña Rusa de emotions!",
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

const currentHike = {
  title: "Montaña Rusa de emotions!",
  images: ["imagen1", "imagen2", "imagen3"],
  stadistics: {
    distance: "2km",
    time: "3h",
    dificulty: 3,
    elevation: "200m",
  },
  description: "Super montaña",
  user: {
    name: "arlet",
  },
};

export const handlers = [
  rest.post(
    "https://proyecto-final-xavi-back.herokuapp.com/user/login",
    async (req, res, ctx) => {
      const respons = res(ctx.json(mockToken));
      return respons;
    }
  ),
  rest.post(
    "https://proyecto-final-xavi-back.herokuapp.com/user/register",
    async (req, res, ctx) => {
      const respons = res(ctx.json(mockId));
      return respons;
    }
  ),
  rest.get(
    "https://proyecto-final-cavi-back.herokuapp.com/hike/get",
    async (req, res, ctx) => {
      const respons = res(ctx.json(mockHikes));
      return respons;
    }
  ),
  rest.get(
    "https://proyecto-final-cavi-back.herokuapp.com/hike/get/",
    async (req, res, ctx) => {
      const query = req.url.searchParams;
      query.append("id", "61afd910499c7f1bd9abfabe");
      const respons = res(ctx.json(currentHike));
      return respons;
    }
  ),
];
