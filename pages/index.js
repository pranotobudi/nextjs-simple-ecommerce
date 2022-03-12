import Head from "next/head";
import Header from "../components/Header";
import ProductContainer from "../components/ProductContainer";
import { fetchWrapper } from 'helpers/fetch-wrappers';
import { useDispatch } from "react-redux"
import { updateProducts } from "redux/basketSlice";

// import {myDummyProducts} from "/public/dummyData"
export default function Home({products}) {
    //Push item into redux
    const dispatch = useDispatch();
    dispatch(updateProducts(products))

    return (
    <div className="bg-blue-100">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gophers Art Shop</title>
      </Head>
        <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Product List */}
        {/* <ProductContainer productLists={products} /> */}
        <ProductContainer />
      </main>
    </div>
  )
}


export async function getServerSideProps(context){
// this is one of the three unique Next.js functions you can use to fetch data for pre-rendering
//   const response = fetchWrapper.get(`http://localhost:8080/api/v1/products`)
//    .then((response) => {
//   }).catch();
// then(res=>res.json()); 
  var products
  const response = await fetch(`${process.env.EXTERNAL_HOST}/api/v1/products`)
  .then(res=>res.json())
  .then((responseJson)=>{
    products = responseJson["data"]
  })
  .catch((error)=>{
    products=[]
    console.log(error)

  });

  console.log("PRODUCTS: ", products)
  

  // const products = myDummyProducts
  return {
    props: {
      products,
    },
  };
}