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
export default class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
        }
        this.toggleModal = () => {
            this.setState((pstate) => ({ openModal: !pstate.openModal }))
        }
        this.setModal = (setModal) => {
            this.setState({
                openModal: setModal
            })
        }
    }



    render() {
        const inAuth = localStorage.getItem("Auth")
        let modal
        if (inAuth) {
            modal = <HeaderAuthAvatar/>
        } else {
            modal =
                <Button onClick={() => this.toggleModal()} color="inherit">Login</Button>
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
                        {modal}
                    </Toolbar>
                </AppBar>
                <AuthDialog
                        openModal={this.state.openModal}
                        setModal={this.setModal}
                        toggleModal={this.toggleModal}
                    />
            </Box>
        )
    }
}