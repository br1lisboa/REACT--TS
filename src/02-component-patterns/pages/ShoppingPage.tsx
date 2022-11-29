import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"
import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from "../data/product";
import '../styles/custom-styles.css'


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

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
                    Object.values(shoppingCart).map(p => (
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
