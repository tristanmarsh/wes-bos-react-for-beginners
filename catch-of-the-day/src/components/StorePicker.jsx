import React, { useRef } from "react"

import { getFunName } from "helpers"
import { useHistory } from "react-router-dom"

export const StorePicker = () => {
  const history = useHistory()
  const ref = useRef()

  const goToStore = (event) => {
    event.preventDefault()
    const storeName = ref.current.value
    history.push(storeName)
  }

  return (
    <form onSubmit={goToStore} className="store-selector">
      <h2>Please enter a store</h2>
      <input
        ref={ref}
        type="text"
        placeholder="Store Name"
        defaultValue={getFunName()}
        required
      />
      <button type="submit">Visit Store 👉</button>
    </form>
  )
}
