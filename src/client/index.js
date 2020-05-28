"use strict";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import { Home, Blog, BlogPost, Features, NotFound } from './containers';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/features" component={Features} />
                <Route exact path="/blog/:date" component={BlogPost} />
                <Route component={NotFound} />
            </Switch>
        </Router>
        , document.querySelector("#app")
    );
});
