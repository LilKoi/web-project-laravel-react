import React from "react"
import Avatar from "@mui/material/Avatar"
import {Link} from "react-router-dom"
export default class HeaderAuthAvatar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Avatar
            to="/profile"
            component={Link}
            style={{textDecoration: 'none'}}
            >Test</Avatar>
        )
    }
}