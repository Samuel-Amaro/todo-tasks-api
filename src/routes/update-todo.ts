import { Elysia, t } from "elysia";
import { db } from "../database/connection";
import { todo, statusEnum } from "../database/schema";
import { eq } from "drizzle-orm";

const status = [...statusEnum.enumValues] as const;

enum Status {
  pending = "pending",
  in_progress = "in_progress",
  completed = "completed",
}

export const updateTodo = new Elysia().put(
  "/:id",
  async ({ params: { id }, body, set }) => {
    const updatedTodo = await db
      .update(todo)
      .set({
        title: body.title,
        description: body.content,
        status: body.status,
        updated_at: new Date(),
      })
      .where(eq(todo.id, id)).returning();
    if(updatedTodo.length === 0) {
      set.status = 404
      return {
        code: "NOT_FOUND",
        message: "Todo não encontrado"
      }
    }
    set.status = 200
  },
  {
    params: t.Object({ id: t.Numeric() }),
    body: t.Object({
      title: t.String({
        minLength: 1,
      }),
      content: t.Optional(t.String()),
      status: t.Optional(t.Enum(Status)),
    }),
  }
);
