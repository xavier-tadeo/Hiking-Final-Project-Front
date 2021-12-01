import { rest } from "msw";

const mockToken = "1234567890";

export const handlers = [
  rest.post(
    "https://proyecto-final-xavi-back.herokuapp.com/",
    async (req, res, ctx) => {
      const respons = res(ctx.json(mockToken));
      return respons;
    }
  ),
];
