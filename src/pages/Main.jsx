import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container } from "reactstrap";
import Playbar from "../components/Playbar";
import Sidebar from "../components/Sidebar";
import "../App.css";
import { Box } from "@mui/system";
import RcmPlaylist from "../components/RcmPlaylist";
import { PLAYLISTS } from "../shared/playlists";
import CardPlaylist from "../components/CardPlaylist";
import CardArtist from "../components/CardArtist";

function Main() {
    const [playlist, setPlaylist] = useState(PLAYLISTS);
    function renderRecommend() {
        const printRec = playlist.filter((el) => el.id <= 7);
        return (
            <Grid container spacing={2}>
                {printRec.map((el) => {
                    return (
                        <Grid item xs={6} md={3}>
                            <RcmPlaylist key={el.id} artist={el.artist} img={el.img} />
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
    function renderCardPlaylist() {
        const printCard = playlist.filter((el) => el.id <= 2);
        const printCardA = playlist.filter((el) => el.id >= 6);
        return (
            <Stack direction="row" spacing={2}>
                {printCard.map((el) => {
                    return (
                        <CardPlaylist
                            id={el.id}
                            name={el.name}
                            artist={el.artist}
                            img={el.img}
                        ></CardPlaylist>
                    );
                })}
                {printCardA.map((el) => {
                    return <CardArtist id={el.id} artist={el.artist} img={el.img}></CardArtist>;
                })}
            </Stack>
        );
    }
    function renderCardHit() {
        const printCard = playlist.filter((el) => el.id % 2 == 0 && el.id >= 3);
        const printCardA = playlist.filter((el) => el.id % 2 == 0 && el.id <= 5);
        return (
            <Stack direction="row" spacing={2}>
                {printCard.map((el) => {
                    return (
                        <CardPlaylist
                            id={el.id}
                            name={el.name}
                            artist={el.artist}
                            img={el.img}
                        ></CardPlaylist>
                    );
                })}
                {printCardA.map((el) => {
                    return <CardArtist id={el.id} artist={el.artist} img={el.img}></CardArtist>;
                })}
            </Stack>
        );
    }
    return (
        <div style={{ height: "100%", background: "linear-gradient(#535353, black)" }}>
            <Stack sx={{ ml: "40px", mr: "40px" }}>
                <Box sx={{ height: "50px" }}></Box>
                <h3 className="kanit-font">Good afternoon</h3>
                <Box sx={{ height: "20px" }}></Box>
                <div>{renderRecommend()}</div>
                <Box sx={{ height: "40px" }}></Box>
                <h4 className="kanit-font">Recently played</h4>
                <Box sx={{ height: "20px" }}></Box>
                <div>{renderCardPlaylist()}</div>
                <Box sx={{ height: "40px" }}></Box>
                <h4 className="kanit-font">Just the Hits</h4>
                <Box sx={{ height: "20px" }}></Box>
                <div>{renderCardHit()}</div>
                <Box sx={{ height: "120px" }}></Box>
            </Stack>
        </div>
    );
}

export default Main;
