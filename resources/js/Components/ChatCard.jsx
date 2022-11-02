import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default class ChatCard extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid item xs={6} sm={4} md={2}>
                <Card>
                    <CardContent sx={{}}>
                        <Typography sx={{ fontSize: 18, textAlign: 'left' }} variant="h2" color="text.secondary" gutterBottom>
                            Название чата
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

}