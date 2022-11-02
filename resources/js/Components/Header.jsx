import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
export default class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
            modalStyle: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                backgroundColor: 'white',
                border: '2px solid #000',
                boxShadow: 24,
                padding: 20,
            }
        }
        this.toggleModal = () => {
            // console.log(pstate.openModal)
            this.setState((pstate) => ({ openModal: !pstate.openModal }))
        }
        this.setModal = (setModal) => {
            this.setState({
                openModal: setModal
            })
        }
    }



    render() {
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
                        <Button onClick={() => this.toggleModal()} color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Dialog
                    open={this.state.openModal}
                    onClose={() => this.setModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <DialogTitle
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        align="center"
                    >
                        Авторизируйтесь
                    </DialogTitle>
                    <Box sx={{padding:2}}>
                        <TextField id="standard-basic" label="Login" variant="standard" />
                        <TextField id="standard-basic" label="Password" variant="standard" />
                    </Box>
                    <DialogActions>
                        <Button onClick={() => this.setModal(false)}>Cancel</Button>
                        <Button onClick={() => this.setModal(false)}>Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        )
    }
}