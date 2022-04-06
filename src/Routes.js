
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Container";
import LoginPage from "./components/login/Container";

function RouterCollection(props) {
    const {
        location, match: { url }
    } = props;

    return (
        <Router>
            <Switch>
                <Route exact path={url} component={LoginPage} />
                <Route exact path={"/dashboard"} component={Dashboard} />
            </Switch>
        </Router>
    );

}

export default RouterCollection;