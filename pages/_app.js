import Navar from '../components/Navar'
import '../styles/globals.css'
import Footer from '../components/Footer'
import { AuthContextProvider } from '../Context/AuthContext'
export default function App({ Component, pageProps }) {
  return (
  <>

<AuthContextProvider>
<Navar/>
  <Component {...pageProps} />
  <Footer/>
</AuthContextProvider>


  
  </>)
}
