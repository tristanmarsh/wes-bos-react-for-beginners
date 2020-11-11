import "css/style.css"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import { App } from "components/App"
import React from "react"
import { StorePicker } from "components/StorePicker"
import { render } from "react-dom"

const Root = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/:storeId">
          <App />
        </Route>
        <Route path="/">
          <StorePicker />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
)

render(<Root />, document.querySelector("#main"))
