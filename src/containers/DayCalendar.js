import React from 'react'
import { connect } from 'react-redux'

const DayCalendar = (props) => {

    return (
        <div>
            in /day path
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return (
        { ...state }
    )
}

export default connect(mapStateToProps)(DayCalendar)
