import { Elysia, t } from "elysia";

//TODO: IMPLEMENTAR HANDLER
export const deleteTodo = new Elysia().delete(
  "/:id",
  ({ params: { id } }) => `delete todo id: ${id}`,
  {
    params: t.Object({
        id: t.Numeric()
    })   
  }
);
