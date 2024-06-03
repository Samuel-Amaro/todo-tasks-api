import { Elysia, t } from "elysia";

//TODO: IMPLEMENTAR HANDLER
export const updateTodo = new Elysia().put(
  "/:id",
  ({ params: { id }, body }) => `update todo id: ${id}`,
  {
    params: t.Object({ id: t.Numeric() }),
    body: t.Object({
      title: t.Optional(t.String()),
      content: t.Optional(t.String()),
    }),
  }
);
