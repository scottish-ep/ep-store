import '../styles/globals.css'
import '../styles/magazine.scss'
import '../styles/detail.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
