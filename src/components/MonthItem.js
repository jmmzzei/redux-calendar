import React, { useState } from 'react'
import { MonthItemStyled } from '../components/MonthItemStyled'
import { Link } from 'react-router-dom'

export const MonthItem = (props) => {
    let [x, setX] = useState(0)
    let [y, setY] = useState(0)
    let [prevX, setPrevX] = useState(0)
    let [prevY, setPrevY] = useState(0)

    const mouseOver = (event) => {
        if (prevX > (event.clientX + 90) || prevX < (event.clientX - 90)) {
            setX(interpolate('x', event.clientX))
            setPrevX(event.clientX)
        }
        if (prevY > (event.clientY + 90) || prevY < (event.clientY - 90)) {
            setY(interpolate('y', event.clientY))
            setPrevY(event.clientX)
        }
    }
    const interpolate = (axis, client) => {
        return (client - 0) * (99 - 0) / (axis === 'x'
            ? window.innerWidth
            : window.innerHeight - 0) + 0
    }

    return (
        <Link
            to={`/${props.month}`}>
            <MonthItemStyled onMouseMove={mouseOver} x={Math.trunc(x)} y={Math.trunc(y)} >
                <p>{props.month}</p>
            </MonthItemStyled >
        </Link >
    )
}
