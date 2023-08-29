import { createEffect, createStore } from "effector";
import { Todo, todosApi } from '@/shared/api'
import { useStore } from "effector-react";

export const getTodosListFx = createEffect(() => {
    return todosApi.getTodos();
})


export const $todos = createStore<Todo[]>([])
    .on(getTodosListFx.doneData, (_, fetchedTodos) => fetchedTodos)

export const useTodo = (id: Todo['id']) => {
    const todos = useStore($todos);

    return todos.find(todo => todo.id === id);
}
