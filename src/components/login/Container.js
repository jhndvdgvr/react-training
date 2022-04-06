import React, { Fragment, useState, useEffect } from "react";
import {
    Card, Container, CardContent, Button, Typography, Box, TextField,
    FormControl, InputLabel, OutlinedInput, Grid
} from '@mui/material';


function LoginPage(props) {
    const { history,
        match: {
            url, params: { site_code }
        }
    } = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const goToDashboard = () => {
        history.push("/dashboard")
    }

    return (

        <Container fixed>
            <Grid container style={{ marginTop: "20%" }}>
                <Grid item md={4}></Grid>
                <Grid item md={4}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom component="div">
                                Login
                            </Typography>
                            <FormControl>
                                <InputLabel htmlFor="component-outlined">Username</InputLabel>
                                <OutlinedInput
                                    value={username}
                                    //   onChange={handleChange}
                                    label="Username"
                                />
                            </FormControl>
                            <br /><br />
                            <FormControl>
                                <InputLabel htmlFor="component-outlined">Password</InputLabel>
                                <OutlinedInput
                                    value={password}
                                    //   onChange={handleChange}
                                    label="Password"
                                    type="password"
                                />
                            </FormControl>
                            <br /><br />
                            <Button size="small" variant="contained" onClick={goToDashboard}>Login</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={4}></Grid>
            </Grid>
        </Container>


    )
}

export default LoginPage;