import { Stack , Box , styled , Typography} from '@mui/material'
import { Container } from '@mui/system'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import React, { Component } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LoopIcon from '@mui/icons-material/Loop';
import { Progress } from 'reactstrap';
import { Devices, Favorite, FavoriteBorderOutlined, QueueMusicOutlined, Tab, VolumeUpOutlined } from '@mui/icons-material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width: 500,
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "black",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:  "#B3B3B3",
    },
  }));
  
  const VolumnBorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width: 100,
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "black",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:  "#B3B3B3",
    },
  }));
  
function Playbar() {
  return (
    <div style={{backgroundColor:"#181818" , width:"100vw",height:"93px",position:"fixed" , bottom:"0" ,zIndex:"2"}}>
        <div  style={{margin:"5px"}}>  
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <div>
                    <Stack direction="row" alignItems="center">
                        <img src='assets/lilac.jpg' width="70px"/>
                        <Box sx={{width:"10px"}}></Box>
                        <Stack sx={{width:"80px"}}>
                            <Typography color="#FFFFFF">Lilac</Typography>
                            <Typography color="#B3B3B3"> IU </Typography>
                        </Stack>
                        <FavoriteBorderOutlined sx={{width:"40px" ,color:"#B3B3B3"}}></FavoriteBorderOutlined>
                        <Tab sx={{width:"40px" ,color:"#B3B3B3"}}></Tab>
                    </Stack>
                </div>

                <div>
                    <Stack>
                        <Box sx={{height:"10px"}}></Box>
                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{color:"#B3B3B3"}}>
                            <ShuffleIcon />
                            <SkipPreviousIcon/>
                            <PlayCircleIcon fontSize='large' sx={{color:"white"}}/>
                            <SkipNextIcon/>
                            <LoopIcon/>
                        </Stack>
                        <Box sx={{height:"10px"}}></Box>
                        <Stack  direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{color:"#B3B3B3"}}>
                            <Typography> 0:00 </Typography>
                            <BorderLinearProgress variant="determinate" value={50} />
                            <Typography> 3:27 </Typography>
                        </Stack>
                    </Stack>
                </div>

                <div>
                    <Stack direction="row" alignItems="center">
                        <QueueMusicOutlined sx={{width:"40px" ,color:"#B3B3B3"}}></QueueMusicOutlined>
                        <Devices sx={{width:"40px" ,color:"#B3B3B3"}}></Devices>
                        <VolumeUpOutlined sx={{width:"40px" ,color:"#B3B3B3"}}></VolumeUpOutlined>
                        <VolumnBorderLinearProgress variant="determinate" value={80} />
                        <Box sx={{width:"25px"}}></Box>
                    </Stack>
                </div>
            </Stack>
        </div>
    </div>
  )
}

export default Playbar
