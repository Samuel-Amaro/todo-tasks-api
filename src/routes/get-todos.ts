import { Elysia, t } from "elysia";
import { db } from "../database/connection";
import { todo } from "../database/schema";
import { asc } from "drizzle-orm";

export const getAllTodos = new Elysia().get("/", async () => {
  return await db.select().from(todo).orderBy(asc(todo.created_at));
});
