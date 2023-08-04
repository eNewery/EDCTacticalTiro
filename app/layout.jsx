import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'


export const metadata = {
  title: 'EDC Tactical',
  description: 'Escuela de Tiro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='container'><Header/>{children}<Footer/></body>
    </html>
  )
}
