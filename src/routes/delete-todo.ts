import { Elysia, t } from "elysia";
import { db } from "../database/connection";
import { todo } from "../database/schema";
import { eq } from "drizzle-orm";

export const deleteTodo = new Elysia().delete(
  "/:id",
  async ({ params: { id } }) => {
    await db.delete(todo).where(eq(todo.id, id))
  },
  {
    params: t.Object({
        id: t.Numeric()
    })   
  }
);
