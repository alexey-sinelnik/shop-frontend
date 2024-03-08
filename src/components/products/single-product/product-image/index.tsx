import {useState} from "react";
import Image from "next/image";
import { ProductImageProps } from "@/common/types/products";


const ProductImageComponent = ({ images }: ProductImageProps) => {
    const [activeImage, setActiveImage] = useState(images[0].link)
    return (
        <div className='flex flex-col items-start gap-8'>
            <Image
                src={activeImage}
                alt="Product image"
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto', maxHeight: '300px'}}
                unoptimized
            />
            <div className='flex gap-4 flex-wrap'>
                {images.map((image) => (
                    <div key={image.id} className='border-2 border-gray max-w-20 p-2 flex justify-center items-center cursor-pointer' onClick={() => setActiveImage(image.link)}>
                        <Image
                            src={image.link}
                            alt="Product image"
                            width={0}
                            height={0}
                            style={{ width: '100%', height: 'auto' }}
                            unoptimized
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImageComponent;
