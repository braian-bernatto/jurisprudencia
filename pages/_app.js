import '../styles/globals.css'
import '../styles/custom.css'
import AppState from '../context/app/appState'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </ThemeProvider>
  )
}

export default MyApp
