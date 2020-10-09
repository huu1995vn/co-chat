import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/UI/layout"
import GuardUI from "../components/UI/guard-ui"
import UIHelp from "../components/UI/ui-help"
import UIHelpDetail from "../components/UI/ui-help-detail"


export default () => (
  <Layout>
    <UIHelp></UIHelp>
    <Router>
      <GuardUI path="/help/:namefile" component={UIHelpDetail} />
    </Router>
  </Layout>
)

