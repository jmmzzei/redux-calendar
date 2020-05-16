import React from "react"
import { CalendarStyled } from "../components/CalendarStyled"
import { connect } from "react-redux"
import { MonthItem } from "../components/MonthItem"

const Calendar = ({ months }) => (
  <CalendarStyled items={months.length}>
    {months &&
      months.map((e, i) => <MonthItem id={"id" + (i + 1)} key={i} month={e} />)}
  </CalendarStyled>
)

const mapStateToProps = state => {
  return { months: [...Object.keys(state)] }
}

export default connect(mapStateToProps)(Calendar)
