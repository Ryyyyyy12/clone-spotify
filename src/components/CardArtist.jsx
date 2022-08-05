import React from 'react'
import '../App.css'
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { CardFooter } from 'reactstrap'
import './Card.css'
function CardArtist({id,artist,img}) {
  return (
    <div>
      <div>
      <Card className='cardlist' key={id} sx={{
        width:"205px",
        height:"280px",
        background:"#212121"
      }}>
        <CardContent>
            <img src={img} style={{width:"100%" , borderRadius:"50%"}}></img>
        </CardContent>
        <CardFooter>
            <h6 className='kanit-font'>{artist}</h6>
            <Typography sx={{color:"#B3B3B3"}}>Artist</Typography>
        </CardFooter>
      </Card>
    </div>
    </div>
  )
}

export default CardArtist
