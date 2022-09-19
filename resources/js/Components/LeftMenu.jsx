import Drawer from "@mui/material/Drawer"
import MenuItem from "@mui/material/MenuItem"
import React from "react"

export default class LeftMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Drawer width={200} open={this.props.open} >
                <MenuItem onClick={() => this.props.toggleDrawer()}>Menu Item</MenuItem>
                <MenuItem onClick={() => this.props.toggleDrawer()}>Menu Item 2</MenuItem>
            </Drawer>
        )
    }
}
