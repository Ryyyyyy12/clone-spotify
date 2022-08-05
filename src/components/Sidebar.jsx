import './Sidebar.css';
import { HomeRounded } from '@mui/icons-material'
import { List ,Stack , Box, Typography, ListItemButton, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import { Container } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
function Sidebar() {
    return (
    <div style={{backgroundColor:"black" , width:"285px",height:"100%",position:"fixed"}}>
      
        <Stack spacing={2} sx={{
            ml:"5px",
            mr:"5px"
        }}>
            <div> 
                <Box sx={{height:"20px"}}></Box>
                <Container>
                    <img src='assets/logo.png' width="131px" height="40px"></img>
                </Container>
            </div>
            <div>
                <div className="sidelist" style={{width:"216" ,height:"40px",color:"#B3B3B3",borderRadius:"3px"}} >
                <Box sx={{height:"8px"}}/>
                    <Stack spacing={2} direction="row" sx={{ml:"15px"}}>
                        <HomeRounded />
                        <Typography>Home</Typography>
                    </Stack>
                </div>

                <div  className="sidelist" style={{width:"216" ,height:"40px",color:"#B3B3B3",borderRadius:"3px"}}>
                <Box sx={{height:"8px"}}/>
                    <Stack spacing={2} direction="row" sx={{ml:"15px"}} >
                        <SearchIcon/>
                        <Typography>Search</Typography>
                    </Stack>
                </div>

                <div  className="sidelist" style={{width:"216" ,height:"40px",color:"#B3B3B3",borderRadius:"3px"}}>
                <Box sx={{height:"8px"}}/>
                    <Stack spacing={2} direction="row" sx={{ml:"15px"}}>
                        <AlignVerticalBottomOutlinedIcon/>
                        <Typography>Your Library</Typography>
                    </Stack>
                </div>
            </div>            
            <div> 
                <Container>
                   <Typography sx={{color:"#B3B3B3", fontWeight:"bold"}}>PLAYLISTS</Typography>
                </Container>
            </div>
            <div>
                <div  className="sidelist"style={{width:"216" ,height:"40px",color:"#B3B3B3",borderRadius:"3px"}} >
                <Box sx={{height:"8px"}}/>
                    <Stack spacing={2} direction="row" sx={{ml:"15px"}}>
                        <AddBoxSharpIcon/>
                        <Typography>Create Playlist</Typography>
                    </Stack>
                </div>

                <div  className="sidelist" style={{width:"216" ,height:"40px",color:"#B3B3B3",borderRadius:"3px"}}>
                <Box sx={{height:"8px"}}/>
                    <Stack spacing={2} direction="row" sx={{ml:"15px"}}>
                        <FavoriteIcon/>
                        <Typography>Liked Songs</Typography>
                    </Stack>
                </div>
            </div>
        </Stack>
        <div style={{bottom:"93px" , position:"fixed"}}>
            <img src='/assets/lilac.jpg' style={{width:"285px"}}></img>
        </div>
    </div>
  )
}

export default Sidebar
