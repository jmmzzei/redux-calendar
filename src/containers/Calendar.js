import React from "react";
import { CalendarStyled } from "../components/CalendarStyled";
import { connect } from "react-redux";
import { MonthItem } from "../components/MonthItem";

const Calendar = (props) => {
  return (
    <CalendarStyled>
      {props.data &&
        props.data.map((e) => <MonthItem key={e.month}>{e.month}</MonthItem>)}
    </CalendarStyled>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return { ...state };
};

export default connect(mapStateToProps)(Calendar);
