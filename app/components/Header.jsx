import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='headerContainer'>
    <div className='headerLogoContainer'><Link href="/" className="headerLogo"></Link></div>
    <div className='headerNavLinks'><nav className="headerNav"><Link href="/Biography">Biografía</Link><Link href="/Courses">Cursos</Link><Link href="/Shop">Tienda</Link></nav><Link href="/Cart"><div className="headerCart"></div></Link></div>
    </div>
  )
}

export default Header