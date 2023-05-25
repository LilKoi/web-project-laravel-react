import React from "react"
import Avatar from "@mui/material/Avatar"
import {Link} from "react-router-dom"
export default class HeaderAuthAvatar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: JSON.parse(localStorage.getItem("user"))
        }
    }

    render() {
        return (
            <Avatar
            to="/profile"
            component={Link}
            style={{textDecoration: 'none',fontSize:10}}
            >{this.state.user.name}</Avatar>
        )
    }
}