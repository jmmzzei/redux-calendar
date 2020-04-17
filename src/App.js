import React, { useEffect, useRef } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Calendar from "./containers/Calendar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DayCalendar from './containers/DayCalendar'
import { connect } from 'react-redux'
import { saveStateInLocalStorage, loadStateFromLocalStorage } from './helpers/localStorageManager'
import { syncStoreAC } from './actions/syncStoreAC'

function App(props) {
    let { dispatch, ...months } = props

    useEffect(() => {
        if (loadStateFromLocalStorage()) {
            props.dispatch(syncStoreAC(loadStateFromLocalStorage()))
        } else {
            saveStateInLocalStorage(months)
        }
    }, [])

    useEffect(() => {
        saveStateInLocalStorage(months)
    }, [months])

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

const mapStateToProps = (state) => {
    return ({ ...state })
}

export default connect(mapStateToProps)(App)
