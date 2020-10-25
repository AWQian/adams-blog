import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";

const MainStyle = styled.div`
    .navigation-main-bar {
        background-color: white;
    }

    .title {
        margin-right: 20px;
        color: maroon;
    }

    .navigation-buttons-container {
        margin-left: auto;
    }

    .navigation-button {
        border: 2px solid white;
        color: maroon;
        margin-left: 10px;
    }

    .contact-button {
        border: 2px solid maroon;
        color: maroon;
        margin-left: 10px;
    }
`

export class Navigation extends React.Component {
    render() {
        return(
            <MainStyle>
                <AppBar position="static" style={{"boxShadow":"none"}}>
                    <Toolbar className="navigation-main-bar">
                        <Typography variant="h6" className="title">Adam Qian</Typography>
                        <Grid className="navigation-buttons-container">
                            <Grid container>
                                <Grid item><Button className="navigation-button" href="/">Home</Button></Grid>
                                <Grid item><Button className="navigation-button" href="/content">Content</Button></Grid>
                                <Grid item><Button className="contact-button" href="/contact">Contact Me</Button></Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </MainStyle>
        );
    }
}