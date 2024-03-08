import {
    ProductType,
    SingleProductPageProps
} from "@/common/types/products";
import Container from "@/components/container";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/store";
import ProductDetailsComponent from "@/components/products/single-product/product-details";

const SingleProductPage = ({ params }: { params: SingleProductPageProps }) => {
    const param = useParams();
    const { products } = useAppSelector(state => state.products);
    const product: ProductType =
        products.find(
            (element: ProductType): boolean => element.id === param.productId
        ) || ({} as ProductType);

    return (
        <div className="p-8">
            <Container>
                <ProductDetailsComponent product={product} />
            </Container>
        </div>
    );
};

export default SingleProductPage;
