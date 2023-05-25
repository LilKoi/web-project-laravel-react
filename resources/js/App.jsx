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
            drawerOpen: false,
            openModalLogin: false,
            openModalRegister: false,
        }
        this.toggleModalLogin = () => {
            this.setState((pstate) => ({ openModalLogin: !pstate.openModal }))
        }
        this.setModalLogin = (setModal) => {
            this.setState({
                openModalLogin: setModal
            })
        }
        this.toggleModalRegister = () => {
            this.setState((pstate) => ({ openModalRegister: !pstate.openModal }))
        }
        this.setModalRegister = (setModal) => {
            this.setState({
                openModalRegister: setModal
            })
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
                    openModalRegister={this.state.openModalRegister}
                    setModalRegister={this.setModalRegister}
                    toggleModalRegister={this.toggleModalRegister}
                    openModalLogin={this.state.openModalLogin}
                    setModalLogin={this.setModalLogin}
                    toggleModalLogin={this.toggleModalLogin}
                    toggleDrawer={this.toggleDrawer}
                />
                <LeftMenu
                    setDrawerOpen={this.setDrawerOpen}
                    open={this.state.drawerOpen}
                    toggleDrawer={this.toggleDrawer}
                />

                <Routes>
                    <Route path="/" element={<ChatsList
                        toggleModalLogin={this.toggleModalLogin}
                    />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/chat/:id" element={<ChatPage />} />
                </Routes>
            </BrowserRouter>

        )
    }

}
createRoot(document.getElementById('root')).render(<App />)
