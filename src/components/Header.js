import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    // <Box>
    //     <AppBar postion='relative'>
    //       <Toolbar>
    //         <Typography variant='h5'>
    //           News Feed
    //         </Typography>
    //       </Toolbar>
    //     </AppBar>
    //     {/* <Link path='/'>Home</Link> */}
    // </Box>
    <div className='w-full h-16 bg-blue-700 shadow-lg flex items-center'>
      <div className='w-64 p-4 font-bold text-2xl'>
        <h1>News Feed</h1>
      </div>
      <div className='flex justify-around w-full font-medium'>
        <div className='border-2 px-2 py-1 rounded-2xl border-blue-400'><Link to='/'>Home</Link></div>
        <div className='border-2 px-2 py-1 rounded-2xl border-blue-400'><Link to='/movies'>Movies</Link></div>
      </div>
    </div>

  )
}

export default Header