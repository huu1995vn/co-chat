import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/UI/layout"
import GuardUI from "../components/UI/guard-ui"
import UIHoTro from "../components/UI/ui-ho-tro"
import UISuDung from "../components/UI/su-dung/ui-su-dung"
import UISuDungDetail from "../components/UI/su-dung/ui-su-dung-detail"

export default ({ ...props }) => {

  return (
    <Layout>
      <Router>
      <GuardUI path="/ho-tro/" component={UIHoTro} />
      <GuardUI path="/ho-tro/su-dung" component={UISuDung} />
      <GuardUI path="/ho-tro/su-dung/:filename" component={UISuDungDetail} />

      </Router>
    </Layout>
  )
}
