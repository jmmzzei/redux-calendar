import React from "react"
import { connect } from "react-redux"
import { CalendarStyled } from "../components/CalendarStyled"
import { Navbar } from "../components/Navbar"
import DayItem from "../components/DayItem"

const DayCalendar = ({ match, months }) => {
  let month = match.params.month
  return (
    <>
      <Navbar month={month} match={match} />
      <CalendarStyled month items={months[month].days}>
        {(() => {
          let arr = []
          for (let i = 1; i <= months[month].days; i++) {
            arr.push(
              <DayItem
                key={i}
                day={i}
                month={month}
                activities={months[month].activities}
              />,
            )
          }
          return arr
        })()}
      </CalendarStyled>
    </>
  )
}

const mapStateToProps = state => ({ months: { ...state } })

export default connect(mapStateToProps)(DayCalendar)
