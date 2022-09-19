import React from 'react';
import { createRoot } from 'react-dom/client'
import Header from "./Components/Header"
import LeftMenu from './Components/LeftMenu'
class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            drawerOpen: false
        }
    }

    toggleDrawer = () => {
        this.setState((pstate) => ({ drawerOpen: !pstate.drawerOpen }))
    }

    setDrawerOpen = (isDrawerOpen) => {
        this.setState({
            drawerOpen: isDrawerOpen
        })
    }


    render() {
        return (
            <div>
                <Header
                toggleDrawer={this.toggleDrawer}
                />
                <LeftMenu
                setDrawerOpen={this.setDrawerOpen}
                open={this.state.drawerOpen}
                toggleDrawer={this.toggleDrawer}
                />
            </div>

        )
    }

}
createRoot(document.getElementById('root')).render(<App />)
