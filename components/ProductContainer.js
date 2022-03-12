import Product from "./Product"
import {selectProducts} from "../redux/basketSlice"
import {useSelector} from "react-redux";

// function ProductContainer({ productLists }){
function ProductContainer(){
    const productLists = useSelector(selectProducts);

    return(
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
            { productLists && productLists.slice(0,productLists.length).map(({id, title, price, description, category, image})=>(
                <Product 
                    key = {id}
                    id = {id}
                    title = {title}
                    price = {price}
                    description = {description}
                    category = {category}
                    image = {image}
                    rating = {5}
                />
            ))}
            
        </div>
    );
}

export default ProductContainer;