import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const MainStyle = styled.div`
    .main-content-wrapper {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }

    .icons-wrapper {
        margin-top: 20%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-grow: 0;
    }

    .icons-border {
        display: flex;
        flex-direction: row;
        justify-content: center;
        border: 3px solid maroon;
        border-radius: 10px;
        padding: 20px 50px 20px 50px;
    }

    .back-to-home-button {
        margin-top: 50px;
        border: 2px solid maroon;
        color: maroon;
    }
`

export class Contact extends React.Component {
    render() {
        return(
            <MainStyle>
                <Container>
                    <div className="main-content-wrapper">
                        <div className="icons-wrapper">
                            <div className="icons-border">
                                <div>
                                    <IconButton>
                                        <GitHubIcon style={{"fontSize":"100", "color":"maroon"}} />
                                    </IconButton>
                                </div>
                                <div>
                                    <IconButton>
                                        <LinkedInIcon href="https://www.linkedin.com/in/adamqian/" style={{"fontSize":"100", "color":"maroon"}} />
                                    </IconButton>
                                </div>
                                <div>
                                    <IconButton>
                                        <MailOutlineIcon href="mailto:adamwqian@gmail.com" style={{"fontSize":"100", "color":"maroon"}} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Box textAlign="center">
                                <Button className="back-to-home-button" href="/">Back to Home</Button>
                            </Box>
                            
                        </div>
                    </div>
                </Container>
            </MainStyle>
        );
    }
}