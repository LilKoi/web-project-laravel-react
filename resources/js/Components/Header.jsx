import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AuthDialog from './AuthDialog';
import HeaderAuthAvatar from "./HeaderAuthAvatar"
import RegisterDialog from "./RegisterDialog"
export default class Header extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {
        const inAuth = localStorage.getItem("jwt") ?? false
        let modal
        if (inAuth) {
            modal = <HeaderAuthAvatar />
        } else {
            modal = [
                <Button onClick={() => this.props.toggleModalLogin()} color="inherit">Login</Button>,
                <Button onClick={() => this.props.toggleModalRegister()} color="inherit">Register</Button>
            ]
        }
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => this.props.toggleDrawer()}

                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Чат
                        </Typography>
                        {Array.isArray(modal) ? modal.map(button => button) : modal}
                    </Toolbar>
                </AppBar>
                <AuthDialog
                    openModal={this.props.openModalLogin}
                    setModal={this.props.setModalLogin}
                    toggleModal={this.props.toggleModalLogin}
                />
                <RegisterDialog
                    openModal={this.props.openModalRegister}
                    setModal={this.props.setModalRegister}
                    toggleModal={this.props.toggleModalRegister}
                />
            </Box>
        )
    }
}