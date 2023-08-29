import React, { FC } from "react";
import styles from './styles.module.css';


interface Props {
    gap?: number;
    children: React.ReactNode | React.ReactNode[]
}

export const Row: FC<Props> = ({ children, gap }) => {
    return (
        <div className={styles.row} style={{ gap }}>
            {children}
        </div>
    )
}
