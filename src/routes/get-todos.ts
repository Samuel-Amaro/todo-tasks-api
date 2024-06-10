import { Elysia, t } from "elysia";
import { db } from "../database/connection";
import { todo } from "../database/schema";
import { asc } from "drizzle-orm";
import swagger from "@elysiajs/swagger";

export const getAllTodos = new Elysia().use(swagger()).get(
  "/",
  async () => {
    return await db.select().from(todo).orderBy(asc(todo.created_at));
  },
  {
    detail: {
      summary: "Obter todas as tasks",
    },
  }
);
