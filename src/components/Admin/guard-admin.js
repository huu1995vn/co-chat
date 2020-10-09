import React from "react"
import PropTypes from "prop-types"
import { isLoggedIn } from "../../utils/auth"
import commonMethods from "../../core/common-methods"
import { commonNavigate } from "../../core/variables"

const GuardAdmin = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn()) {
    // If we’re not logged in, redirect to the home page.
    commonMethods.navigateToPage(commonNavigate.cms_dang_nhap)
    return null
  }
  if (location.pathname === commonNavigate.cms_admin || location.pathname === commonNavigate.cms_admin + `/`) {
    commonMethods.navigateToPage(commonNavigate.cms_dashboard)
    return null
  }
  return <Component {...rest} />
}

GuardAdmin.propTypes = {
  component: PropTypes.any.isRequired,
}

export default GuardAdmin
