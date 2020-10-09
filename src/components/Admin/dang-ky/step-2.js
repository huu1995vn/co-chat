import React, { Component } from "react"
import View from "../../View"
import { useStyles } from "../../../utils/use-styles"
import { verifyOTPSMS } from "../../../utils/firebase"
import { withStyles } from '@material-ui/styles';
import ReactCodeInput from 'react-verification-code-input';
import Button from '@material-ui/core/Button';

class Step2 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onXacThuc = this.onXacThuc.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state={}
  }
  componentDidMount() {
  }
  async loadData() {

  }
  async handleSubmit(event) {
    event.preventDefault();
    await this.onXacThuc();
  }
  async onChange(val) {
    this.setState({
      input: val
    })
  }
  async onXacThuc() {
    try {
      if (this.state.input != null && this.state.input.length > 0) {
        await verifyOTPSMS(this.state.input)
        this.props.nextStep()
      }
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const { classes } = this.props;
    return <View title="Nhập mã xác thực">
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <div className="d-flex justify-content-center" >
          <ReactCodeInput fields={6} onChange={this.onChange} onComplete={this.onXacThuc} />
        </div>
        <Button
          disabled={!(this.state.input != null && this.state.input.length > 0)}
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
          color="primary">Xác thực</Button>
      </form>


    </View>
  }

}


export default withStyles(useStyles)(Step2);
