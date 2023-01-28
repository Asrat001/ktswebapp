import Navar from '../components/Navar'
import '../styles/globals.css'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Navar/>
  <Component {...pageProps} />
  <Footer/>
  </>)
}
