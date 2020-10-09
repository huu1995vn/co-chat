import React, { Component } from "react"
import View from "../../View"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from "../../../utils/use-styles"
import { createRecaptchaVerifier, sendOTPSMS } from "../../../utils/firebase"
import { withStyles } from '@material-ui/styles';
import { appVerificationDisabledForTesting } from "../../../core/variables"

class Step1 extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      input: ``,
      idRecaptcha: "recaptcha-container",
      isCheckRecaptcha: appVerificationDisabledForTesting
    }
  }
  componentDidMount() {
    this.loadData()
  }
  async loadData() {
    createRecaptchaVerifier(this.state.idRecaptcha, (e) => this.handleRecaptchaVerifier(e))

  }

  handleRecaptchaVerifier(event) {
    this.setState({
      isCheckRecaptcha: true,
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    try {
      if (this.state.input != null && this.state.input.length > 0 && this.state.isCheckRecaptcha) {
        await sendOTPSMS("+16505553434")
        this.props.nextStep()
      }
    } catch (error) {
      console.log(error);

    }


  }

  render() {
    const { classes } = this.props;
    return <View title="Nhập số điện thoại/email đăng ký">
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="input"
          label="Điện thoại/Email"
          id="input"
          autoComplete="input"
          defaultValue={this.state.input}
          onChange={this.handleChange}
        />
        <div className="d-flex justify-content-center" id={this.state.idRecaptcha}></div>
        <Button
          disabled={!(this.state.input != null && this.state.input.length > 0 && this.state.isCheckRecaptcha)}
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
          color="primary">Gửi mã</Button>
      </form>
    </View>
  }

}


export default withStyles(useStyles)(Step1);
