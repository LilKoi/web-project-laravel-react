import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"

export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: props.position,
            avatar: props.avatar ?? "path"
        }
        console.log(this.state.position)
    }

    render() {
        return (
            <Grid
                item
                xs={6}
                sm={6}
                justifyContent={this.state.position == 'right' ? "flex-end" : ""}
                container
                alignItems="center"
                style={{
                    "align-self": this.state.position == "left" ? "flex-start" : "flex-end"
                }}> {
                    this.state.avatar !== "" && this.state.position != "right" &&
                    <Avatar src={this.state.avatar}></Avatar>
                }
                <Typography
                    component="p"
                    sx={{
                        py: 0.5,
                        px:1,
                        bgcolor: this.state.position == 'left' ? "#f5f5f5" : 'red'
                    }}
                    style={{
                        borderRadius: this.state.position == 'left' ? "5px 5px 5px 0" : "5px 5px 0 5px",
                    }}
                >123</Typography>
            </Grid>
        )
    }
}