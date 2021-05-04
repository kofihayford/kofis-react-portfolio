import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LandingPage from "./components/landingpage"
import Projects from './components/projects'
import About from './components/about'

export default function Pages() {
    return (
        <Router>
            <Switch>
                {/* <Route path="/">

                    <Redirect to="/home" />

                </Route> */}
                <Route exact path="/">

                    <LandingPage />

                </Route>
                <Route exact path="/projects">

                    <Projects />
                </Route>
                <Route exact path="/about">

                    <About />
                </Route>

            </Switch>
        </Router>
    )
}

