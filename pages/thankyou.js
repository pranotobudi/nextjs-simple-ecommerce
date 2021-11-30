import Header from "/components/Header";
import {useRouter} from "next/router";

function ThankYou() {
    const router = useRouter();
    
    return (
        <div>
            <Header />
            <div className="container mx-auto">
                <div className="text-3xl font-bold">
                <h1>Thank You, your order is being processed...</h1>            
                </div>
                <div>
                    <button 
                        role="link"
                        onClick={()=>router.push("/","/")}
                        className={`button mt-2`}
                                
                    >Back to Homepage</button>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;
