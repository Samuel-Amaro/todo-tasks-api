import { Elysia, t } from "elysia";
import { db } from "../database/connection";
import { todo } from "../database/schema";
import { eq } from "drizzle-orm";

export const getTodoDetails = new Elysia().get(
  "/:id",
  async ({ params: { id }, set }) => {
    const result = await db.select().from(todo).where(eq(todo.id, id))
    if(result.length === 0) {
      set.status = 404
      return {
        code: "NOT_FOUND",
        message: "Todo não encontrado"
      }
    }
    return result 
  }, 
  {
    params: t.Object({
        id: t.Numeric()
    })   
  }
);
