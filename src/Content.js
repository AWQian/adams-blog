import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const MainStyle = styled.div`
    .under-construction {
        text-align: center;
        color: white;
        background-color: maroon;
        height: 300px;
        padding-top: 150px;
    }

    .back-to-home-button {
        border: 2px solid white;
        color: white;
    }
`

export class Content extends React.Component {
    render() {
        return(
            <MainStyle>
                <div className="under-construction">
                    <h1>Under Construction</h1>
                    <Button className="back-to-home-button" href="/">Back to Home</Button>
                </div>
            </MainStyle>
        );
    }
}