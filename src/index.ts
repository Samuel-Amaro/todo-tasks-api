import { getAllTodos } from "./routes/get-todos";
import { createTodo } from "./routes/create-todo";
import { deleteTodo } from "./routes/delete-todo";
import { updateTodo } from "./routes/update-todo";
import { getTodoDetails } from "./routes/get-todo-details";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { toggleTodo } from "./routes/toggle-todo";

const app = new Elysia({ prefix: "/api/v1/tasks" })
    .use(
      cors({
        credentials: true,
        allowedHeaders: ['content-type'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
        origin: (request): boolean => {
          const origin = request.headers.get('origin')

          if (!origin) {
            return false
          }

          return true
        },
      }),
    )
  .use(getAllTodos)
  .use(createTodo)
  .use(deleteTodo)
  .use(updateTodo)
  .use(getTodoDetails)
  .use(toggleTodo)
  .onError(({ code, error, set }) => {
    switch(code) {
      case 'VALIDATION': {
        set.status = error.status

        return error.toResponse()
      }
      case 'NOT_FOUND': {
        return "Route not found :(";
      }
      default: {
        console.log(error)

        return new Response(null, {status: 500})
      }
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
