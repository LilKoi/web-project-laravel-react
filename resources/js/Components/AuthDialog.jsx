import React from "react"
import Dialog from '@mui/material/Dialog'
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"
import DialogActions from "@mui/material/DialogActions"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

export default class AuthDialog extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
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
        this.Loging = () => {
            localStorage.setItem("Auth",true)
            this.props.setModal(false)
        }
    }
    render() {
        return (
            <Dialog
                open={this.props.openModal}
                onClose={() => this.props.setModal(false)}
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
                <Box sx={{ padding: 2 }}>
                    <TextField id="standard-basic" label="Login" variant="standard" />
                    <TextField id="standard-basic" label="Password" variant="standard" />
                </Box>
                <DialogActions>
                    <Button onClick={() => this.props.setModal(false)}>Cancel</Button>
                    <Button onClick={() => this.Loging()}>Subscribe</Button>
                </DialogActions>
            </Dialog >
        )
    }
}