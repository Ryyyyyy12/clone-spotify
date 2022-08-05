import {
    AccessTime,
    Favorite,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    MoreHoriz,
    MoreHorizOutlined,
    PlayCircle,
} from "@mui/icons-material";
import { Stack, Box } from "@mui/material";
import React from "react";

function PlaylistPage() {
    return (
        <div
            style={{
                height: "100vh",
                background: "linear-gradient(#97bcb3, black)",
            }}
        >
            <Stack>
                <Box sx={{ height: "5rem" }}></Box>
                <Stack direction="row">
                    <Box sx={{ width: "2rem" }}></Box>
                    <img
                        src="/assets/the alblum.png"
                        style={{ width: "230px" }}
                        className="drop-shadow-xl"
                    ></img>
                    <Box sx={{ width: "2rem" }}></Box>
                    <Stack sx={{ color: "whitesmoke" }}>
                        <p>PLAYLIST</p>
                        <h1>The Album</h1>
                        <p> Lorem ipsum dolor sit amet,consectetur adiouscing elit. Rhoncus</p>
                        <p>
                            {" "}
                            <b>Spotify .</b> 860,123 likes . 100 songs, 5 hr 5 min
                        </p>
                    </Stack>
                </Stack>
                <Box sx={{ height: "2rem" }}></Box>
                <Box
                    sx={{
                        height: "100vh",
                        backgroundColor: "rgba(33, 33, 33, 0.247)",
                    }}
                >
                    <Box sx={{ height: "1rem" }}></Box>
                    <Stack direction="row">
                        <Box sx={{ width: "2rem" }}></Box>
                        <PlayCircle fontSize="large" sx={{ width: "50px", color: "lightgreen" }} />
                        <FavoriteBorderOutlined
                            fontSize="large"
                            sx={{ width: "50px", color: "lightgray" }}
                        ></FavoriteBorderOutlined>
                        <MoreHorizOutlined
                            fontSize="large"
                            sx={{ width: "50px", color: "lightgray" }}
                        ></MoreHorizOutlined>
                    </Stack>
                    <table
                        className="table-auto"
                        style={{ width: "100vw", margin: "40px", color: "white" }}
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>TITLE</th>
                                <th>ALBUM</th>
                                <th>DATE ADDED</th>
                                <th>
                                    <AccessTime></AccessTime>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <Stack direction="row">
                                    <img
                                        src="/assets/bell.jpg"
                                        style={{ width: "50px", height: "50px" }}
                                    ></img>
                                    <Box sx={{ width: "1rem" }}></Box>
                                    <Stack>
                                        <b>Hello</b>
                                        <p>asdfsadf</p>
                                    </Stack>
                                </Stack>
                            </td>
                            <td>
                                <p>asdff asdfsdfsdf</p>
                            </td>
                            <td>
                                <p>12/12/12</p>
                            </td>
                            <td>
                                <p>2:25</p>
                                <MoreHoriz></MoreHoriz>
                            </td>
                        </tbody>
                    </table>
                </Box>
            </Stack>
        </div>
    );
}

export default PlaylistPage;
