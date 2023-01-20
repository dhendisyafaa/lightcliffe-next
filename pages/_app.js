import '@/styles/globals.css'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  console.log(Component)
  return (
    <Component {...pageProps} />
  )
}