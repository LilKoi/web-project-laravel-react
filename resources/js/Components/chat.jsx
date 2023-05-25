import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"

export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: props.message,
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
                justifyContent={this.state.message.user_id == JSON.parse(localStorage.getItem("user"))?.id ? "flex-end" : ""}
                container
                alignItems="center"
                style={{
                    "align-self": this.state.message.user_id != JSON.parse(localStorage.getItem("user"))?.id ? "flex-start" : "flex-end"
                }}> {
                    this.state.avatar !== "" && this.state.message.user_id != JSON.parse(localStorage.getItem("user"))?.id &&
                    <Avatar src={this.state.avatar}></Avatar>
                }
                <Typography
                    component="p"
                    sx={{
                        py: 0.5,
                        px: 1,
                        bgcolor: this.state.message.user_id != JSON.parse(localStorage.getItem("user"))?.id ? "#f5f5f5" : 'red'
                    }}
                    style={{
                        borderRadius: this.state.message.user_id != JSON.parse(localStorage.getItem("user"))?.id ? "5px 5px 5px 0" : "5px 5px 0 5px",
                    }}
                >{this.props.message.text}</Typography>
            </Grid>
        )
    }
}