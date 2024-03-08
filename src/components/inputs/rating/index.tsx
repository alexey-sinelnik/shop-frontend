import { FC, JSX } from "react";
import { StarsComponentProps } from "@/common/types/inputs/stars";

const RatingComponent: FC<StarsComponentProps> = ({
    productRating,
    setProductRating,
    setHover,
    hover,
    totalStars
}): JSX.Element => {
    return (
        <>
            {[...Array(totalStars)].map((_, index: number) => {
                const currentRating: number = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onChange={() => setProductRating(currentRating)}
                            className="hidden"
                        />
                        <span
                            className="cursor-pointer text-2xl"
                            style={{
                                color:
                                    currentRating <= (hover || productRating)
                                        ? "#ffc107"
                                        : "#e4e5e9"
                            }}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(0)}
                        >
                            &#9733;
                        </span>
                    </label>
                );
            })}
        </>
    );
};

export default RatingComponent;
