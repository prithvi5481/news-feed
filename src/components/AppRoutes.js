import React from 'react'
import {Routes,Route} from 'react-router-dom'
import News from './News'
import Movies from './Movies'
import Layout from '../Layout'

const AppRoutes = () => {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<News />}/>
            <Route path='/movies' element={<Movies />}/>
        </Routes>
    </Layout>
  )
}

export default AppRoutes