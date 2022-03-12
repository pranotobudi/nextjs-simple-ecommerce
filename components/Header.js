import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {useSelector, useDispatch } from "react-redux";
import {selectItems, updateProducts } from "../redux/basketSlice"
import { userService } from 'services/user.service';
import { useRouter } from 'next/router';
import { useState } from "react";

function Header(){
    const items = useSelector(selectItems);
    const router = useRouter();
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    console.log("query: ", query)

    function searchOnChange(e){
        setQuery(e.target.value)
    }

    function searchOnKeyPress(e){
        if(e.key === 'Enter'){
            console.log('enter press here! ')
            searchQuery(query)       
        }
    }

    function searchIconOnClick(e){
        searchQuery(query)       
    }

    async function searchQuery(query){
        console.log("query: ", query)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              search_term: query,
            })
          };
        
        var products
        // const response = await fetch(`${process.env.EXTERNAL_HOST}/api/v1/search`, requestOptions)
        const response = await fetch(`/api/v1/search`, requestOptions)
        .then(res=>res.json())
        .then((responseJson)=>{
          products = responseJson["data"]
          dispatch(updateProducts(products))
          console.log("SEARCH BAR PRODUCT: ", products)
        })
        .catch((error)=>{
          products=[]
          console.log(error)      
        });
      
    }

    function signIn(){
        router.push('login');
    }

    function signOut(){
        userService.setUserSignOut();
        router.push('/');
    }

    return (
        <div>
            {/* Logo */}
            <div className="flex items-center bg-blue-300 p-1 py-2 flex-grow">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                    onClick={() => router.push("/")}
                    src="/logo-gophers-art-640-205.png"
                    alt=""
                    width={150}
                    height={40}
                    objectFit="contain"
                    className='cursor-pointer'
                />
                </div>
            
                {/*search*/}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input onChange={(e) => searchOnChange(e)} onKeyPress={(e) => searchOnKeyPress(e)} className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                <SearchIcon onClick={ searchIconOnClick } className='h-12 p-4'/>
                </div>
            
                {/*Account & basket*/}
                <div className="text-white flex item-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    {/* <div>
                        <p>
                            Hello, Buddy
                        </p>
                        <p className="font-extrabold md:text-sm">Account</p>
                    </div> */}
                    
                    <div onClick={userService.isSessionActive() ?  signOut : signIn} className="link">
                        <p>
                            {userService.isSessionActive() ? `Sign Out`:`Sign In`}
                        </p>
                        <p>
                            {userService.isSessionActive() ? `Hello, ${userService.userData.username}`:`Hello`}
                        </p>
                        {/* <p className="font-extrabold md:text-sm">Account</p> */}
                    </div>
                
                    <div onClick={()=>router.push("/checkout")} className="relative link flex items-center">
                    {/* <div className="relative link flex items-center"> */}
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            {items.length}
                            {/* 0 */}
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