import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Calendar from "./containers/Calendar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DayCalendar from './containers/DayCalendar'

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/:month'
                    component={DayCalendar} />
                <Route path='/'>
                    <Navbar />
                    <Calendar />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
