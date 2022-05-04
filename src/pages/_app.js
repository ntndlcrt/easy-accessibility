import Head from 'next/head'
import Nav from '../components/Nav'

import accessibility from 'easy-accessibility'
if(typeof window !== 'undefined') {
    accessibility.init()
}

import '../../styles/app.scss'

export default function App({ Component, pageProps, router }) {
    return (
        <> 
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Accesible website example</title>
            </Head>
            <Nav />
            <Component {...pageProps} key={router.route} />
        </>
    )
}