import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import MenuItem from "@mui/material/MenuItem"
import React from "react"
import { Link } from "react-router-dom"
export default class LeftMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return localStorage.getItem("user") ? (
            <SwipeableDrawer
                width={200}
                open={this.props.open}
                onClose={() => this.props.setDrawerOpen(false)}
            >
                <MenuItem to="/profile" component={Link} onClick={() => this.props.toggleDrawer()}>Личный кабинет</MenuItem>
                <MenuItem to="/" component={Link} onClick={() => this.props.toggleDrawer()}>Беседы</MenuItem>
                <MenuItem to="/" component={Link} onClick={() => this.props.toggleDrawer()}>выход</MenuItem>
            </SwipeableDrawer>
        ) : (
            <SwipeableDrawer
                width={200}
                open={this.props.open}
                onClose={() => this.props.setDrawerOpen(false)}
            >
                <MenuItem to="/" component={Link} onClick={() => this.props.toggleDrawer()}>Беседы</MenuItem>
                <MenuItem to="/" component={Link} onClick={() => this.props.toggleDrawer()}>выход</MenuItem>
            </SwipeableDrawer>
        )
    }
}
