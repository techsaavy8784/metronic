import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }: AppProps) {
  console.log('This is my App')
  return (
    <Layout title="Metronic"> 
          <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
