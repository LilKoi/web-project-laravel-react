import React from "react";
import Grid from "@mui/material/Unstable_Grid2"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
export default class ChatsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [1, 3, 5, 6]
        }
    }

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {/* {this.state.cards.map((val, index) => { */}
                        <Grid item xs={3}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                <Typography sx={{ fontSize: 14, textAlign: 'left' }} variant="h4" color="text.secondary" gutterBottom>
                                        dasdsdsdsdsdsdasadsdas
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                        dasdsdsdsdsdsdasadsdas
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        
                    {/* })} */}
                </Grid>
            </Box>
        )
    }
}