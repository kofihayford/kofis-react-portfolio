import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import LandingPage from "./components/landingpage"
import Projects from './components/projects'

export default function Pages() {
    return (
        <Router>
            <Switch>
                <Route path="/">

                    <Redirect to="/home" />

                </Route>
                <Route path="/home">

                    <LandingPage />

                </Route>
                <Route path="/projects">

                    <Projects />
                </Route>

            </Switch>
        </Router>
    )
}

