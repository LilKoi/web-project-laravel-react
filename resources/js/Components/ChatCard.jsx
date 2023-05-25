import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from "react-router-dom"
export default class ChatCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            room: this.props.room
        }
    }

    render() {
        return (
            <Grid item xs={6} sm={4} md={2}>
                <Card>
                    <CardContent sx={{}}>
                        <Typography sx={{ fontSize: 18, textAlign: 'left' }} variant="h2" color="text.secondary" gutterBottom>
                            {this.state.room.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button to={`/chat/${this.state.room.id}`} component={Link} size="small">Присоедениться</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

}