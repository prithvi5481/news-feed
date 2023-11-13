import React from 'react'
import News from './components/News'
import AppRoutes from './components/AppRoutes'
import Header from './components/Header'

const Layout = ({children}) => {
  console.log(children)
  return (
    <div>
      <Header />
      <div className='mt-16'>
          {children}
      </div>
    </div>
  )
}

export default Layout