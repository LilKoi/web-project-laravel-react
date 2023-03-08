import React from 'react';
import { createRoot } from 'react-dom/client'
import Header from "./Components/Header"
import LeftMenu from './Components/LeftMenu'
import ChatsList from './Components/ChatsList';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Profile from './Components/Profile';
import ChatPage from './Components/ChatPage';
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
            <BrowserRouter>
                    <Header
                        toggleDrawer={this.toggleDrawer}
                    />
                    <LeftMenu
                        setDrawerOpen={this.setDrawerOpen}
                        open={this.state.drawerOpen}
                        toggleDrawer={this.toggleDrawer}
                    />

                    <Routes>
                        <Route path="/" element={<ChatsList />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/chat" element={<ChatPage/>}/>
                    </Routes>
            </BrowserRouter>

        )
    }

}
createRoot(document.getElementById('root')).render(<App />)
