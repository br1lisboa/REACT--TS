import { ReactElement } from 'react';

export interface ProductCardProps {
    children?: ReactElement | ReactElement[]
    product: Product
}

export interface Product {
    id: string,
    img?: string
    title: string,
}

export interface ProductContextxProps {
    counter: number
    maxCount?: number
    product: Product
    increaseBy: (value: number) => void
}

export interface onChangeArgs {
    count: number
    product: Product,
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?: number
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number
    isMaxCountReached: boolean
    maxCount?: number
    product: Product

    increaseBy: (value: number) => void
    reset: () => void
}