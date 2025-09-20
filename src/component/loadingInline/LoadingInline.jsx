import React from 'react';
import {ImSpinner3} from "react-icons/im";

import styles from './LoadingInline.module.css';

const LoadingInline = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_content}>
                <h2>در حال بارگزاری <ImSpinner3 className={styles.container_content_icon}/></h2>
            </div>
        </div>
    );
};

export default LoadingInline;