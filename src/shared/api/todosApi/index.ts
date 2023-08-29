import axios from "axios";
import { Todo } from "@/shared/api";

let todos: Todo[] | null = null;

export const getTodos = async () => {
    console.log('FETCH ALL TODOS')

    if (!todos) {
        const fetched = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');

        todos = fetched.data;
    }

    return todos;
}

export const updateTodo = async (todo: Todo) => {
    console.log(`UPDATE TODO ${todo.id}`)

    const inx = todos?.findIndex(t => t.id === todo.id);

    if (todos && inx) {
        todos[inx] = todo;
    }
}
