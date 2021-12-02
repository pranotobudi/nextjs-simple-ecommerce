import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";

function Product({id, title, price, description, category, image, rating}){
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id, title, price, rating, description, category, image,
        };
     
        dispatch(addToBasket(product))
    }

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <Image src={image} alt="alt-img" height={200} width={200} objectFit="contain"/>
            <h4 className="my-3 self-center">{title}</h4>
            <div className="flex self-center">
                {Array(rating).fill().map((_, i)=>(
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-2 self-center">{description}</p>
            <div className="inline-block self-center">
                {`$` + price}
            </div>
            <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>

        </div>
    );
}

export default Product;