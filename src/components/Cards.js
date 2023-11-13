import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Cards = ({content,urlImage,heading,url}) => {
  return (
      
      <Box sx={{maxWidth:345, maxHeight:300, margin:'25px'}}>
        <Card sx={{ maxWidth: 345 }}>
          <a href={url} style={{textDecoration:'none'}}>
            <CardMedia
              sx={{ height: 140 }}
              image={urlImage}
            />
          </a>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    
    
  )
}

export default Cards





