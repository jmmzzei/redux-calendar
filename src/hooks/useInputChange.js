import {useState} from 'react'

export const useInputChange = (initialState) => {
  let [input, setInput] = useState(initialState)
  let cleanInput = () => setInput('')
  let handleInputChange = (e) => {
    setInput(e.currentTarget.value)
  }
  return [input, handleInputChange, cleanInput]
}
