import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux"
import {addToBasket, removeFromBasket} from "redux/basketSlice";

function CheckoutProduct({id, title, price, rating, description, category, image}) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id, title, price, rating, description, category, image,  
        }
        //Push item into redux
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket = () => {
        //Remove item from redux
        dispatch(removeFromBasket({ id }))
    }
    return (
        <div className='grid grid-cols-5'>
            {/* Left */}
            <Image src={image} height={200} width={200} objectFit="contain" />
            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i)=>(
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
                    
                </div>
                <p className="text-xs my-2 line-clamp-3">
                    {description}
                </p>
                {`$` + price}
                
            </div>

            {/* Right */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button">Add to Basket</button>
                <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
