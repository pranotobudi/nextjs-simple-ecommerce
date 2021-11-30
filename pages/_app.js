import { Provider } from 'react-redux'
import { store } from '../redux/store'
import '../styles/globals.css'
import Head from 'next/head';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const MyApp = ({ Component, pageProps }) => {
  return (
        <PayPalScriptProvider options= {{"client-id": process.env.paypal_client_id }}>  
        <Provider store={store}>
            <Head>
                <title>Gophers Art Shop</title>
                
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
          <Component {...pageProps} />
        </Provider>
        </PayPalScriptProvider>
  )
}

export default MyApp