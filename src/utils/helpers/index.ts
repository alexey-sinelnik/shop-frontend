export function calculateDiscountPrice(price: number, discount: number) {
    return (price - (discount / 100) * price).toFixed(2);
}
