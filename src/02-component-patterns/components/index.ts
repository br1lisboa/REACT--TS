import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImg';
import { ProductButtons } from './ProductButtons';
//export { ProductCard } from './ProductCard';
export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImg';
export { ProductTitle } from './ProductTitle';

export const ProductCard = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard