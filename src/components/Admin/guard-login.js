import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../utils/auth"

const GuardLogin = ({ component: Component, location, ...rest }) => {
  if (isLoggedIn() && location.pathname === `/admin/dang-nhap`) {
    // If we’re not logged in, redirect to the home page.
    if(typeof window === 'object') navigate(`/admin/dasboard`)
    return null
  }
  return <Component {...rest} />
}

GuardLogin.propTypes = {
  component: PropTypes.any.isRequired,
}

export default GuardLogin
