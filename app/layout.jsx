import Footer from './components/Footer'
import Header from './components/Header'
import { MiContextoProvider } from './components/context'
import './globals.css'


export const metadata = {
  title: 'EDC Tactical',
  description: 'Escuela de Tiro',
  icons: {
    icon: "../public/favicon.ico"
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
 <MiContextoProvider>
      <body className='container'><Header/>{children}<Footer/></body>
  </MiContextoProvider>
    </html>
  )
}
