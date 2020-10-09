import React from "react"
import { withStyles } from '@material-ui/styles';
import { useStyles } from "../../../utils/use-styles"
import Step1 from "./step-1"
import Step2 from "./step-2"
import Step3 from "./step-3"

class CMSDangKy extends React.Component {
  state = {
    step: 3,
  }
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return <Step1 nextStep={this.nextStep.bind(this)}></Step1>
      case 2:
        return <Step2 nextStep={this.nextStep.bind(this)}></Step2>
      default: return <Step3 DienThoai="0379787899"/>

    }

  }
}

export default withStyles(useStyles)(CMSDangKy);
