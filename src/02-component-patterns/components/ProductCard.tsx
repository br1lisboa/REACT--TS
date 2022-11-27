import { ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css'
import noImage from "../assets/no-image.jpg";

interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
}

interface Product {
    id: string,
    title: string,
    img?: string
}

export const ProductImage = ({ img = '' }) => {
    return (
        <img className={styles.productImg} src={img ? img : noImage} alt="Coffe time" />
    )
}

export const ProductTitle = ({ title }: { title: string }) => {
    return (
        <span className={styles.productDescription}>{title}</span>
    )
}

interface ProductButtonsPros {
    increaseBy: (value: number) => void
    counter: number
}

export const ProductButtons = ({ increaseBy, counter }: ProductButtonsPros) => {

    return (
        <div className={styles.buttonsContainer}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
        </div>
    )
}

export const ProductCard = ({ children, product }: Props) => {

    const { counter, increaseBy } = useProduct()

    return (
        <div className={styles.productCard}>

            {children}

            {/* <ProductImage img={product.img} />

            <ProductTitle title={product.title} />

            <ProductButtons increaseBy={increaseBy} counter={counter} /> */}

        </div>
    )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons