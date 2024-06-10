import { Elysia, t } from "elysia";
import { db } from "../database/connection";
import { todo } from "../database/schema/index";
import swagger from "@elysiajs/swagger";

export const createTodo = new Elysia().use(swagger()).post(
  "/",
  async ({ body, set }) => {
    if (body.title.trim()) {
      await db.insert(todo).values({
        title: body.title,
        description: body.content,
      });
    } else {
      set.status = 400;
      return {
        code: "VALIDATION",
        message: "Title não pode ser vazio",
      };
    }
  },
  {
    body: t.Object(
      {
        title: t.String({
          minLength: 1,
        }),
        content: t.String(),
      },
      {
        description: "Espera-se um title e content",
      }
    ),
    detail: {
      summary: "Criar uma task",
    },
  }
);
