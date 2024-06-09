import { Elysia, t } from "elysia";
import { db } from "../database/connection";
import { todo } from "../database/schema";
import { eq } from "drizzle-orm";

export const deleteTodo = new Elysia().delete(
  "/:id",
  async ({ params: { id }, set }) => {
    const todoDeleted = await db.delete(todo).where(eq(todo.id, id)).returning()
    if(todoDeleted.length === 0) {
      set.status = 404
      return {
        code: "NOT_FOUND",
        message: "Todo não encontrado"
      }
    }
    set.status = 200
  },
  {
    params: t.Object({
        id: t.Numeric()
    })   
  }
);
