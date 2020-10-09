import React from "react"
import PropTypes from "prop-types"

const GuardUI = ({ component: Component, location, ...rest }) => {
  return <Component {...rest} />
}

GuardUI.propTypes = {
  component: PropTypes.any.isRequired,
}

export default GuardUI
