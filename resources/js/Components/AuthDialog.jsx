import React from "react"
import Dialog from '@mui/material/Dialog'
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"
import DialogActions from "@mui/material/DialogActions"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Api } from "../api.js"
import { useState } from "react"
import { red } from "@mui/material/colors"
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
            },
            login: "",
            password: "",
            error: ""
        }
        this.handleInputChange = (event) => {
            this.setState((pstate) => ({ [event.target.name]: event.target.value }));
        }
        this.Loging = async () => {
            try {
                const response = await Api.login(this.state.login, this.state.password)
                this.setState((pstate) => ({ error: "" }))
                this.setState((pstate) => ({ login: "" }))
                this.setState((pstate) => ({ password: "" }))
                localStorage.setItem("user", JSON.stringify(response.data.user))
                localStorage.setItem("jwt", JSON.stringify(response.data.authorisation))
                this.props.setModal(false)
                console.log(await response)
            } catch (error) {
                this.setState((pstate) => ({ error: error.response.data.message }))
            }
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
                    <TextField name="login" value={this.state.login} onChange={this.handleInputChange} id="standard-basic" label="Login" variant="standard" />
                    <TextField name="password" value={this.state.password} onChange={this.handleInputChange} type="password" id="standard-basic" label="Password" variant="standard" />
                </Box>
                <Typography
                    variant="h6"
                    align='center'
                    style={{ color: red[500] }}
                >
                    {this.state.error}
                </Typography>

                <DialogActions>
                    <Button onClick={() => this.props.setModal(false)}>Cancel</Button>
                    <Button onClick={() => this.Loging()}>Subscribe</Button>
                </DialogActions>
            </Dialog >
        )
    }
}