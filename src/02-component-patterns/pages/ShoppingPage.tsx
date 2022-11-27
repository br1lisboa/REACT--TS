import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

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
                    <ProductCard.Title title={''} />
                    <ProductCard.Buttons increaseBy={function (value: number): void { }} counter={0} />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle title={''} />
                    <ProductButtons increaseBy={function (value: number): void { }} counter={0} />
                </ProductCard>
            </div>
        </div>
    )
}
