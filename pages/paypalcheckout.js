import { PayPalButtons } from "@paypal/react-paypal-js";
import PaymentProduct from "/components/PaymentProduct"
import { useState } from "react";
import {useRouter} from "next/router";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "/redux/basketSlice"


function PaypalCheckout() {
    const [succeeded, setSucceeded] = useState(false);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [billingDetails, setBillingDetails] = useState("");
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const router = useRouter();
    // creates a paypal order
    const createOrder = (data, actions) => {
    return actions.order
        .create({
        purchase_units: [
            {
            amount: {
                // charge users $499 per order
                value: total,
            },
            },
        ],
        // remove the applicaiton_context object if you need your users to add a shipping address
        application_context: {
            shipping_preference: "NO_SHIPPING",
        },
        })
        .then((orderID) => {
        setOrderID(orderID);
        return orderID;
        });
    };
    
    // handles when a payment is confirmed for paypal
    const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
        const {payer} = details;
        setBillingDetails(payer);
        setSucceeded(true);
        console.log("payer detail: "+payer)
        router.push("/thankyou","/thankyou");
    }).catch(err=> setPaypalErrorMessage("Something went wrong."));
    };


    return (
        <div className="lg:grid grid-cols-5 max-w-screen-2xl mx-auto">
            <div className="col-span-3 p-5 space-y-10 bg-white">
            {items.map((item, i)=>(
                <PaymentProduct 
                    key = {i}
                    id = {item.id}
                    title = {item.title}
                    price = {item.price}
                    description = {item.description}
                    image = {item.image}
                />
            ))}
            </div>
            <div className="col-span-2 bg-white p-10 shadow-md">
                <PayPalButtons
                    style={{
                    color: "blue",
                    shape: "pill",
                    label: "pay",
                    tagline: false,
                    layout: "horizontal",
                    }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />

            </div>
        </div>
    )
}

export default PaypalCheckout
