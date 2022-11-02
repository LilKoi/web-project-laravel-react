import React from "react";
import Grid from "@mui/material/Unstable_Grid2"
import ChatCard from "./ChatCard"
export default class ChatsList extends React.Component {
    constructor(props) {
        super(props)
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    }

    render() {
        return (
            <Grid sx={{ mt: 2 }} container spacing={4} rowSpacing={4}>
                {this.numbers.map(val => <ChatCard />)}
            </Grid>
        )
    }
}