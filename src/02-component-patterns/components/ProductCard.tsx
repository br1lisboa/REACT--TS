import styles from '../styles/styles.module.css'
import noImage from "../assets/no-image.jpg";
import { useState } from 'react';

export const ProductCard = () => {

    const [counter, setCounter] = useState(0)

    const increaseBy = (value: number) => {
        setCounter(previus => Math.max(previus + value, 0))
    }

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src="./coffee-mug.png" alt="Cofee" />
            {/* <img className={styles.productImg} src={noImage} alt="Err" /> */}

            <span className={styles.productDescription}>Cofee Mug</span>

            <div className={styles.buttonsContainer}>
                <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
                <div className={styles.countLabel}>{counter}</div>
                <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
            </div>

        </div>
    )
}
