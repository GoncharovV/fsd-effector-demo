import { createEffect, createEvent, sample } from "effector";
import { Todo } from "@/shared/api";
import { todosApi } from '@/shared/api'
import { todoModel } from '@/entities/todo'

export const toggleTodo = createEvent<Todo['id']>();

const updateTodoFx = createEffect(async (todo: Todo) => {
    return todosApi.updateTodo(todo!)
})

sample({
    clock: toggleTodo,
    source: todoModel.$todos,
    fn: (todos, todoId) => {
        const todo = todos.find(todo => todo.id === todoId)!

        return {
            ...todo,
            completed: !todo.completed,
        }
    },
    target: updateTodoFx,
})

updateTodoFx.done.watch(() => todoModel.getTodosListFx())
