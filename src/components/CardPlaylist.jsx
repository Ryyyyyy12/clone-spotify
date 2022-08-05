import React from "react";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { CardFooter } from "reactstrap";
import "../App.css";
import "./Card.css";
function CardPlaylist({ id, name, artist, img }) {
    return (
        <div>
            <Card
                className="cardlist"
                key={id}
                sx={{
                    width: "205px",
                    height: "280px",
                    background: "#212121",
                }}
            >
                <CardContent>
                    <img src={img} style={{ width: "100%" }}></img>
                </CardContent>
                <CardFooter>
                    <h6 className="kanit-font">{name}</h6>
                    <Typography sx={{ color: "#B3B3B3" }}>{artist}</Typography>
                </CardFooter>
            </Card>
        </div>
    );
}

export default CardPlaylist;
