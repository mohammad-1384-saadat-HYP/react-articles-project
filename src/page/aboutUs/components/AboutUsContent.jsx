import React from 'react';
import styles from './AboutUsContent.module.css';

const AboutUsContent = () => {
    return (
        <div className={styles.container}>
            <span className={styles.container_title}>درباره ما</span>
            <p className={styles.container_text}>
                Lorem ipsum dolor sit amet consecrate disciplining elit sed diam noname usermod temper indent ut labor
                et color magna aliquot erat, sed diam voluptuous. At vero eos et accused et justo duo dolores et ea reb
                Stet client wasd gubernatorial sea stigmata sanctus est Lorem ipsum dolor sit ametDis auteur vel eum in
                Hendri in amputate veldt esse molest consequent, vel illumos color eu fugitive nulla at vero eros et et
                Justo Podio dissimilar qui bandit present ultimatum Azriel event argue dues color te facility
            </p>
            <div className={styles.container_img}>
                <span className={styles.container_img_text}>فعالیت ما در کدام شهر هاست؟</span>
                <img src="/images/javascript-loops.png" alt="javascript-loops"/>
            </div>
        </div>
    );
};

export default AboutUsContent;