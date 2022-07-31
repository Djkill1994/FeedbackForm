import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:3000/feedback", (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(req.body.email === "test1@gmail.com" ? 500 : 200)
    );
  }),
];
