import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Playbar from './components/Playbar';
import Sidebar from './components/Sidebar';
import Grid from '@mui/material/Grid'
import PlaylistPage from './pages/PlaylistPage';



function App() {
  return(
    <div>
      <body>
        <Grid container spacing={0}>
            <Grid item xs={6} md={2}>
              <Sidebar/>
            </Grid>
            <Grid item xs={6} md={10}>
              <Main/>
              <PlaylistPage/>
            </Grid>
        </Grid>
      </body>
      <footer><Playbar/></footer>
    </div>
    
    
  )
}

export default App;
