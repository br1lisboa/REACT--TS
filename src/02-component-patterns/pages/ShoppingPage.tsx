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
                console.log({ toDelete })

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
                            onChange={onProductCountChange}
                            key={product.id}
                            product={product}
                            className="bg-dark text-white text-center" >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

            </div>

            <div className="shopping-cart">
                <ProductCard
                    product={product2}
                    className="bg-dark text-white text-center"
                    style={{ width: '150px' }}
                /* onChange={() => onProductCountChange()} */
                >
                    <ProductImage className="custom-image" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                    className="bg-dark text-white text-center"
                    style={{ width: '150px' }}
                >
                    <ProductImage className="custom-image" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
            </div>

            <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div>
        </div>
    )
}
