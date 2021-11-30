import Image from "next/image";

function PaymentProduct({id, title, price, description, image}) {

    return (
        <div className='grid grid-cols-3'>
            {/* Left */}
            <Image src={image} height={200} width={200} objectFit="contain" />
            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <p className="text-xs my-2 line-clamp-3">
                    {description}
                </p>
                {`$` + price}
                
            </div>
        </div>
    )
}

export default PaymentProduct
