import React from "react"
import View from "../View"
import { getFileMarkdown } from "../../utils/firebase"
import CommonMethods from "../../core/common-methods"

export default class UIFilesDetail extends React.Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = { namefile: props.namefile, html: "" }
    this.loadData = this.loadData.bind(this)
  }
  componentDidMount() {
    this.loadData()
  }
  async loadData() {
    try {
      let match = this.state.namefile.match(/.*-(\d)+md/)
      if (match === null || match.length === 0) return
      let res = await getFileMarkdown(match[1])
      this.setState({
        markdown: res,
      })
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <View title="">
        <div>
          <h1> {this.state.name} </h1>{" "}
          {
            <div
              dangerouslySetInnerHTML={{
                __html: CommonMethods.rawMarkup(this.state.markdown),
              }}
            />
          }{" "}
        </div>
      </View>
    )
  }
}
