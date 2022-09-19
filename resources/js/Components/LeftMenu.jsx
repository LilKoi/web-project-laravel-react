import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import MenuItem from "@mui/material/MenuItem"
import React from "react"

export default class LeftMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SwipeableDrawer
            width={200}
            open={this.props.open}
            onClose={() => this.props.setDrawerOpen(false)}
            >
                <MenuItem onClick={() => this.props.toggleDrawer()}>Лк</MenuItem>
                <MenuItem onClick={() => this.props.toggleDrawer()}>Беседы</MenuItem>
            </SwipeableDrawer>
        )
    }
}
