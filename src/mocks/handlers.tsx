import { rest } from "msw";

const mockToken = "1234567890";
const mockId = "0987654321";

export const handlers = [
  rest.post(
    "https://proyecto-final-xavi-back.herokuapp.com/user/login",
    async (req, res, ctx) => {
      const respons = res(ctx.json(mockToken));
      return respons;
    }
  ),
  rest.post(
    "https://proyecto-final-xavi-back.herokuapp.com/user/login",
    async (req, res, ctx) => {
      const respons = res(ctx.json(mockId));
      return respons;
    }
  ),
];
