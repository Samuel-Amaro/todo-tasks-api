import { Elysia, t } from "elysia";

//TODO: IMPLEMENTAR HANDLER
export const createTodo = new Elysia().post(
  "/",
  ({ body }) =>
    `created todo with title: ${body.title} and content: ${body.content}`,
  {
    body: t.Object({ title: t.String(), content: t.String() }),
  }
);
