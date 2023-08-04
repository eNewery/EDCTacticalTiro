import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='headerContainer'>
    <div className='headerLogoContainer'><div className="headerLogo"></div></div>
    <div className='headerNavLinks'><nav className="headerNav"><Link href="/">Biografía</Link><Link href="/">Cursos</Link><Link href="/">Tienda</Link></nav><div className="headerCart"></div></div>
    </div>
  )
}

export default Header