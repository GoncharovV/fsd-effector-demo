import React, { FC } from 'react';

import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { Row } from "@/shared/ui";

const pages = [
    { link: '/todos', label: 'Todo' },
    { link: '/users', label: 'Users' },
]

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Row gap={20}>
                {
                    pages.map(page => (
                        <Link key={page.link} to={page.link}>{page.label}</Link>
                    ))
                }
                </Row>
            </nav>
        </header>
    );
};
