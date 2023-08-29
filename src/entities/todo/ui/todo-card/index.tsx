import React, { FC } from 'react';
import { Todo } from "@/shared/api";

import styles from './styles.module.css'

interface Props {
    todo: Todo;
}

export const TodoCard: FC<Props> = ({ todo }) => {
    return (
        <div className={styles.todo}>
            <p>{ todo.title }</p>
        </div>
    );
};
