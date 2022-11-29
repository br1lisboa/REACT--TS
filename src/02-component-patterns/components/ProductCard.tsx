import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextxProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextxProps)

const { Provider } = ProductContext

export interface Props {
    /* children?: ReactElement | ReactElement[] */
    className?: string
    initialValues?: InitialValues
    style?: React.CSSProperties
    product: Product
    value?: number

    children: (args: ProductCardHandlers) => JSX.Element
    onChange?: (args: onChangeArgs) => void
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues })

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>

                {children({
                    count: counter,
                    isMaxCountReached: isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product: product,

                    increaseBy: increaseBy,
                    reset: reset
                })}

            </div>
        </Provider>
    )
}
