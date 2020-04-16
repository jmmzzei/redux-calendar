import React from 'react'
import {DayItemStyled} from './DayItemStyled'

export const DayItem = ({activities, day}) => {

  return (
    <DayItemStyled>
      <h3>{day}</h3>
      {JSON.stringify(activities)}
    </DayItemStyled>
  )
}
