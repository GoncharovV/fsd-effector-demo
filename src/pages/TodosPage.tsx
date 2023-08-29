import React, { useEffect, useState } from 'react';
import { todoModel } from '@/entities/todo'
import { useStore } from "effector-react";
import { TodoCard } from "@/entities/todo";
import { toggleTodoModel } from "@/features/toggle-todo";

const TodosPage = () => {

    useEffect(() => {
        todoModel.getTodosListFx();
    }, [])

    const todos = useStore(todoModel.$todos);

    return (
        <div>
            <button onClick={() => toggleTodoModel.toggleTodo(1)} >AAA</button>
            {
                todos.map(todo => (
                    <TodoCard key={todo.id} todo={todo} />
                ))
            }
        </div>
    );
};

export default TodosPage;
