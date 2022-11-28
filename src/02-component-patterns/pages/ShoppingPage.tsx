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
                <ProductCard product={product} className="bg-dark text-white text-center">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={'Cafe Marron'} className="text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} className="bg-dark text-white text-center" >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} style={{ backgroundColor: "#61DAFB" }} >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'enf'
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}
