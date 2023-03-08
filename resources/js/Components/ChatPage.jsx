import React from "react"
import Container from "@mui/material/Container"
import Chat from "./Chat"
import Grid from "@mui/material/Unstable_Grid2"
import FormControl from "@mui/material/FormControl"
import Input from "@mui/material/Input"
import Send from '@mui/icons-material/Send'
import Button from "@mui/material/Button"

export default class ChatPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Container style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '80vh',
                    justifyContent: 'space-between',
                }}
                sx={{mt: 5}}
                maxWidth="sm">
                    <Grid container direction="column">
                        <Chat position="right" />
                        <Chat position="left" />
                    </Grid>
                    <FormControl
                        style={{ flexDirection: "row" }}
                        sx={{ width: '100%' }}>
                        <Input
                            sx={{ width: '75%' }}
                        />
                        <Button sx={{ width: "25%" }} variant="contained"><Send /></Button>
                    </FormControl>
                </Container>
            </div>
        )
    }
}