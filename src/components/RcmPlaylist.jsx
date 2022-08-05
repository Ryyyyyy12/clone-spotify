import { Stack ,Card, Box } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
import './Card.css'
function RcmPlaylist({key,artist,img}) {
  return (
    <Card className='cardlist' key={key} sx={{height:"84px" , borderRadius:"5px",background:"#212121"}}>
        <Stack direction="row" alignItems="center">
            <img src={img} style={{width:"84px", borderRadius:"5px 0px 0px 5px"}} ></img>
            <Box sx={{width:"20px"}}></Box>
            <h6 className='kanit-font' style={{color:"white"}}>{artist}</h6>
        </Stack>
    </Card>
  )
}

export default RcmPlaylist
