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


export default class RegisterDialog extends React.Component {

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
            name: "",
            password: "",
            error: ""
        }
        this.Register = async () => {
            try {
                const response = await Api.register(this.state.name ,this.state.login, this.state.password)
                this.setState((pstate) => ({ error: "" }))
                this.setState((pstate) => ({ name: "" }))
                this.setState((pstate) => ({ login: "" }))
                this.setState((pstate) => ({ password: "" }))
                // console.log()
                localStorage.setItem("user", JSON.stringify(response.data.user))
                localStorage.setItem("jwt", JSON.stringify(response.data.authorisation))
                this.props.setModal(false)
            } catch (error) {
                console.log(error.response)
                this.setState((pstate) => ({ error: error.response.data.message }))
            }
        }
        this.handleInputChange = (event) => {
            this.setState((pstate) => ({ [event.target.name]: event.target.value }));
        };

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
                    Регистрация
                </DialogTitle>
                <Box sx={{ padding: 2 }}>
                <TextField name="name" value={this.state.name} onChange={this.handleInputChange} id="standard-basic" label="Name" variant="standard" />
                <TextField name="login" value={this.state.login} onChange={this.handleInputChange} id="standard-basic" label="Login" variant="standard" />
                <TextField name="password" value={this.state.password} onChange={this.handleInputChange} id="standard-basic" label="Password" variant="standard" type="password" />
                </Box>
                <Typography
                    variant="h6"
                    align='center'
                    style={{ color: red[500] }}
                >
                    {this.state.error}
                </Typography>
                <DialogActions>
                    <Button onClick={() => this.props.setModal(false)}>Закрыть</Button>
                    <Button onClick={() => this.Register()}>Зарегистрироваться</Button>
                </DialogActions>
            </Dialog >
        )
    }
}