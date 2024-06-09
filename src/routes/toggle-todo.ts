import { eq, param } from "drizzle-orm";
import Elysia, { t } from "elysia";
import { db } from "../database/connection";
import { todo } from "../database/schema";

enum Status {
    pending = "pending",
    in_progress = "in_progress",
    completed = "completed",
}
  
export const toggleTodo = new Elysia().put(
  "/toggle/:id",
  async ({ params: { id }, set, body }) => {
    const todoToggle = await db
      .update(todo)
      .set({
        status: body.status,
      })
      .where(eq(todo.id, id))
      .returning();
    if(todoToggle.length === 0) {
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
      id: t.Numeric(),
    }),
    body: t.Object({
        status: t.Enum(Status)
    })
  }
);
