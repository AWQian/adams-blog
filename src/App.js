import React from "react";
import axios from "axios";
import { Navigation } from "./Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { Home } from "./Home";
import { Content } from "./Content";
import { Contact } from "./Contact";

export class App extends React.Component {
    componentDidMount() {
        axios.get("/users").then(res => {
            console.log("Server Status: " + res.status);
        })
    }

    render() {
        return(
            <React.Fragment>
                <Navigation />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/content" component={Content} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}