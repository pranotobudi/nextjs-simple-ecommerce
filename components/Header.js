import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
// import {signIn, signOut, useSession } from "next-auth/client";
// import {useRouter} from "next/router";
// import {useSelector} from "react-redux";
// import {selectItems} from "../slices/basketSlice"

function Header(){
    // const [session] = useSession()
    // const router = useRouter()
    // const items = useSelector(selectItems);

    return (
        <div>
            {/* Logo */}
            <div className="flex items-center bg-blue-300 p-1 py-2 flex-grow">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                    // onClick={()=>    router.push("/")}
                    src="/logo-gophers-art-640-205.png"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className='cursor-pointer'
                />
                </div>
            
                {/*search*/}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"/>
                <SearchIcon className='h-12 p-4'/>
                </div>
            
                {/*Account & basket*/}
                <div className="text-white flex item-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div>
                    <p>
                        {/* {session ? `Hello, ${session.user.name}`:`Sign In`} */}
                        Hello, Buddy
                    </p>
                    <p className="font-extrabold md:text-sm">Account</p>
                </div>
            
                {/* <div onClick={()=>router.push("/checkout")} className="relative link flex items-center"> */}
                <div className="relative link flex items-center">
                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                        {/* {items.length} */}
                        0
                    </span>
                    <ShoppingCartIcon className="h-10"/>
                    <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
                </div>
            
                </div>
            
            </div>    

        </div>
    )
}

export default Header