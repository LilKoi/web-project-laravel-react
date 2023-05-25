import React, { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <Container sx={{ mt: 2 }} alignItems="center" justifyContent="center">
            <Grid
                sx={{}}
                justifyContent="center"
                alignItems="center"
                container
                spacing={4}
                rowSpacing={4}
            >
                <Grid>
                    <Avatar sx={{ width: 100, height: 100 }}>Test</Avatar>
                </Grid>
                <Grid>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                            Данные профиля
                        </FormLabel>
                        <TextField
                            sx={{ my: 0.5 }}
                            id="outlined-basic"
                            label="Логин"
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            sx={{ my: 0.5 }}
                            id="outlined-basic"
                            label="Имя"
                            size="small"
                            variant="outlined"
                        />
                        <Button variant="outlined">Сохранить</Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Profile;
