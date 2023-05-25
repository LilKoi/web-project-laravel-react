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
export default class CreateRoomDialog extends React.Component {

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
            name: "",
            error: ""
        }
        this.handleInputChange = (event) => {
            this.setState((pstate) => ({ [event.target.name]: event.target.value }));
        }
        this.CreateRoom = async () => {
            try {
                const response = await Api.CreateRoom(this.state.name)
                this.setState((pstate) => ({ error: "" }))
                this.setState((pstate) => ({ name: "" }))
                this.props.setModal(false)
                this.props.fetchData()
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
                    Создать комнату
                </DialogTitle>
                <Box sx={{ padding: 2 }}>
                    <TextField name="name" value={this.state.name} onChange={this.handleInputChange} id="standard-basic" label="Имя" variant="standard" />
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
                    <Button onClick={() => this.CreateRoom()}>Создать</Button>
                </DialogActions>
            </Dialog >
        )
    }
}