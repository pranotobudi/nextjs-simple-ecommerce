import Header from "components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "redux/basketSlice"
import CheckoutProduct from "components/CheckoutProduct"
import {useRouter} from "next/router";
import { userService } from 'pages/services/user.service';

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const router = useRouter();

    return (
        <div className="bg-gray-100">
            <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.paypal_client_id}`}></script>
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* Left */}  
                <div>

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length==0 ? `Your amazon basket is empty.`: `Shopping Basket`}
                        </h1>

                        {items.map((item, i)=>(
                            <CheckoutProduct 
                                key = {i}
                                id = {item.id}
                                title = {item.title}
                                price = {item.price}
                                rating = {item.rating}
                                description = {item.description}
                                category = {item.category}
                                image = {item.image}
                            />
                        ))}

                    </div>
                </div>
                {/* Right */}  
                <div className="flex flex-col flex-grow bg-white p-10 shadow-md">
                    { (items.length > 0) &&  
                    <div>
                        <h2 className="whitespace-nowrap">
                            Subtotal ({items.length} items): {" "}
                            <span className="font-bold">
                            {`$` + total}
                            </span>                       
                        </h2>

                        <button 
                            role="link"
                            onClick={()=>router.push("/paypalcheckout","/payment")}
                            disabled={!userService.isSessionActive()}
                            className={`button mt-2 ${!userService.isSessionActive() && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                        
                        >

                            {!userService.isSessionActive() ? "Sign in to Checkout": "Proceed To Checkout"}
                        </button>
                    </div>
                    }
                </div>
                </main>

        </div>
    )
}

export default Checkout