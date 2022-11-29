import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"
import { Product } from '../interfaces/interfaces';

import '../styles/custom-styles.css'
import { useState } from 'react';

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffe Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [product, product2]


interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            if (count === 0) {

                const { [product.id]: toDelete, ...rest } = oldShoppingCart
                /* console.log({ toDelete }) */

                return {
                    ...rest
                }
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    }

    let productos = Object.values(shoppingCart)
    /* console.log(productos) */

    return (
        <div>

            <h1>
                ShoppingPage
            </h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCard
                            className="bg-dark text-white text-center"
                            key={product.id}
                            product={product}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

            </div>

            <div className="shopping-cart">
                {
                    productos.map(p => (
                        <ProductCard
                            className="bg-dark text-white text-center"
                            style={{ width: '150px' }}
                            key={p.id}
                            product={p}
                            onChange={onProductCountChange}
                            value={p.count}
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons
                                className="custom-buttons"
                                style={{ display: 'flex', justifyContent: 'center' }} />
                        </ProductCard>
                    ))
                }
            </div>

        </div>
    )
}
