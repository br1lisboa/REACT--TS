import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"

import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
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
                {/* COMPOUND COMPONENT PATTERN */}
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title={'Cafe Marron'} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} className="bg-dark" >
                    <ProductImage />
                    <ProductTitle className="text-white" />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
