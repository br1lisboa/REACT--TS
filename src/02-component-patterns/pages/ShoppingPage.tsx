import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"

import { products } from "../data/product";
import '../styles/custom-styles.css'

const product = products[0]


export const ShoppingPage = () => {

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <ProductCard
                /* key={product.id} */
                className="bg-dark text-white text-center"
                product={product}
                initialValues={{
                    count: 2,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, increaseBy, count, isMaxCountReached }) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>

                            {
                                (!isMaxCountReached) && <button onClick={() => increaseBy(+2)}>+2</button>
                            }

                            <span>{count}</span>
                        </>
                    )
                }
            </ProductCard>

        </div>
    )
}
