import React from 'react'
import HeaderComponent from './HeaderComponent'
import NavbarComponent from './navbar/NavbarComponent'

const Layout = ({children}) => {
  return (
    <div>
        <HeaderComponent/>
        <main>
            {children}
        </main>
        <NavbarComponent/>
    </div>
  )
}

export default Layout