import Head from "next/head";
import Header from "../components/Header";
import ProductContainer from "../components/ProductContainer";
import {myDummyProducts} from "/public/dummyData"
export default function Home({products}) {
  // console.log(products)
  return (
    <div className="bg-blue-100">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gophers Art Shop</title>
      </Head>
        <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Product List */}
        <ProductContainer productLists={products} />
      </main>
    </div>
  )
}


export async function getServerSideProps(context){
  // const products = await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json()); 
  const products = myDummyProducts
  // console.log(products)
  return {
    props: {
      products,
    },
  };
}