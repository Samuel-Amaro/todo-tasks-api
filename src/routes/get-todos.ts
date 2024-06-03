import { Elysia, t } from "elysia";

//TODO: IMPLEMENTAR HANDLER
export const getAllTodos = new Elysia().get("/", () => "Get all todos");
