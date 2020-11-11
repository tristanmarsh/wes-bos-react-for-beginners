import PropTypes from "prop-types"
import React from "react"

export const Header = ({ tagline }) => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">{tagline}</h3>
    </header>
  )
}
console.log(Header)

Header.propTypes = {
  tagline: PropTypes.string,
}
