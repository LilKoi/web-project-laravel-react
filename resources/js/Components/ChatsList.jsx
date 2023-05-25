import React from "react";
import Grid from "@mui/material/Unstable_Grid2"
import ChatCard from "./ChatCard"
import Container from "@mui/material/Container"
import { Soket } from "../chat"
import { useLayoutEffect } from "react"
import { Button } from "@mui/material"
import CreateRoomDialog from "./CreateRoomDialog"
import { Api } from "../api.js"
export default class ChatsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openModalCreateRoom: false,
            "rooms": []
        }
        this.createRooms = () => {
            if (localStorage.getItem("user")) {

            } else {

            }
        }
        this.clickButton = () => {
            if (localStorage.getItem("user")) {
                console.log("da")
                this.toggleModalCreateRoom()
            } else {
                this.props.toggleModalLogin()
            }
        }
        this.toggleModalCreateRoom = () => {
            this.setState((pstate) => ({ openModalCreateRoom: !pstate.openModal }))
        }
        this.setModalCreateRoom = (setModal) => {
            this.setState({
                openModalCreateRoom: setModal
            })
        }
    }
    componentDidMount() {
        this.fetchData();

    }

    fetchData = async () => {
        try {
            const response = await Api.getRooms()
            // console.log(await response.data)
            this.setState({ rooms: response.data.rooms });
        } catch (error) {
            console.log(error)
        }
    }

    render() {

        return (
            <Container maxWidth="false">
                <Grid sx={{ mt: 2 }} container spacing={4} rowSpacing={4}>
                    {this.state.rooms.map(room => <ChatCard room={room} />)}
                </Grid>
                <Button variant="contained" onClick={this.clickButton} sx={{ mt: 2 }}>Создать комнату</Button>
                <CreateRoomDialog
                    openModal={this.state.openModalCreateRoom}
                    setModal={this.setModalCreateRoom}
                    fetchData={this.fetchData}
                    toggleModal={this.toggleModalCreateRoom}
                />
            </Container>
        )
    }
}