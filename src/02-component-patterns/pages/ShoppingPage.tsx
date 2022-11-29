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
                    count: 4,
                    maxCount: 10
                }}
            >
                <ProductImage className="custom-image" />
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>

        </div>
    )
}
