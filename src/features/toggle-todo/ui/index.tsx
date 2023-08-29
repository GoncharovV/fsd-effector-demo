import React, { FC } from 'react';
import { todoModel } from '@/entities/todo'
import { Todo } from "@/shared/api";
import { toggleTodoModel } from '@/features/toggle-todo'


interface Props {
    todoId: Todo['id'];
}

export const TodoToggle: FC<Props> = ({ todoId }) => {
    const todo = todoModel.useTodo(todoId)

    if (!todo) {
        return null;
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onClick={() => toggleTodoModel.toggleTodo(todoId)}
            />
        </div>
    );
};

