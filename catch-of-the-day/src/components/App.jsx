import React, { useReducer } from "react"

import { AppContext } from "AppContext"
import { Header } from "components/Header"
import { Inventory } from "components/Inventory"
import { Order } from "components/Order"

// TODO: replace this home baked helper witht the official @reduxjs/toolkit createSlice
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    return Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state
  }
}

const appReducer = createReducer({
  addFish: (state, { payload }) => ({
    ...state,
    fishCollection: [...state.fishCollection, payload],
  }),
  sleep: (state, action) => {},
})

export const App = () => {
  const initialState = {
    fishCollection: {},
    order: {},
  }

  const [state, dispatch] = useReducer(appReducer, initialState)
  console.log(state)
  dispatch({ type: "sleep", payload: { name: "sleepy head" } })
  console.log(state)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh food" />
        </div>
        <Order />
        <Inventory />
      </div>
    </AppContext.Provider>
  )
}
