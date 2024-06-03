import { Elysia, t } from "elysia";

//TODO: IMPLEMENTAR HANDLER
export const getTodoDetails = new Elysia().get(
  "/:id",
  ({ params: { id } }) => `get details todo id: ${id}`, 
  {
    params: t.Object({
        id: t.Numeric()
    })   
  }
);
