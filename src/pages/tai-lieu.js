import React from "react"
import { Router } from "@reach/router"
import UITaiLieu from "../components/UI/ui-tai-lieu"
import UITaiLieuDetail from "../components/UI/ui-tai-lieu-detail"

import Layout from "../components/UI/layout"
import GuardUI from "../components/UI/guard-ui"

export default () => (
  <Layout>
    <Router>
      <GuardUI path="/tai-lieu/" component={UITaiLieu} />
      <GuardUI path="/tai-lieu/:namefile" component={UITaiLieuDetail} />
    </Router>
  </Layout>
)

