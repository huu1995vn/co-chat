import React, { Component } from "react"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import { useStyles } from "../../../utils/use-styles"
import { commonAttr } from "../../../core/variables"
import ChonDiaChiDialog from "../../Dialog/chon-dia-chi-dialog"
import { InputPassword } from "../../Controllers"
import CommonMethods from "../../../core/common-methods"
import { postThanhVienByAnonymous } from "../../../utils/thanh-vien/thanh-vien"
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class Test3 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleUpdateNgaySinh = this.handleUpdateNgaySinh.bind(this)

    this.handleSave = this.handleSave.bind(this)
    this.state = {
      data: {
        DienThoai: this.props.DienThoai,
        Email: this.props.Email,
        DaXacThucEmail: !!this.props.Email,
        DaXacNhanDienThoai: !!this.props.DienThoai,
        DaXacThucCmnd: false,
        DaXacThucPassport: false,
        IdTinhThanh: 31,
        TenTinhThanh: "TP.HCM",
        IdQuanHuyen: -1,
        TenQuanHuyen: "",
        DiaChi: "",
        FullDiaChi: "",
        MatKhau: "",
        MatKhauNhapLai: "",
        HoDem: "",
        Ten: "",
        NgaySinh: new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
        GioiTinh: true

      },
      dangTinContact: {
        IdTinhThanh: 31,
        TenTinhThanh: "TP.HCM",
        IdQuanHuyen: -1,
        TenQuanHuyen: "",
        DiaChi: ""
      },
      open: false
    }
  }

  handleUpdate(event) {
    
    let data = this.state.data;
    var value = event.target.value;
    switch (event.target.name) {
      case commonAttr.GioiTinh:
        value = value === 'true';
        break;       
      default:
        break;
    }
    data[event.target.name] = value;

    this.setState({
      data: data
    })
  }

  handleUpdateNgaySinh(date) {
    
    let data = this.state.data;
    data[commonAttr.NgaySinh] = date;
    this.setState({
      data: data
    })
  }

  async handleSubmit(event) {
    try {
      event.preventDefault()
      let user = CommonMethods.cloneObject(this.state.data);
      user[commonAttr.HoTen] = `${user.HoDem} ${user.Ten}`;
      user[commonAttr.MatKhau] = CommonMethods.convertMd5(user[commonAttr.MatKhau]);
      user[commonAttr.TenDangNhap] = user.DienThoai ?? user.Email;
      await postThanhVienByAnonymous(user);
      alert("Tạo Thành Công");

    } catch (error) {
      alert(error);
    }

  }
  handleClickOpen(event) {
    event.preventDefault()
    this.setState({
      open: true
    })
  };
  handleSave(value) {
    let data = this.state.data;
    data.IdTinhThanh = value.IdTinhThanh;
    data.TenTinhThanh = value.TenTinhThanh;
    data.IdQuanHuyen = value.IdQuanHuyen;
    data.TenQuanHuyen = value.TenQuanHuyen;
    data.DiaChi = value.DiaChi
    if (value.DiaChi && value.TenQuanHuyen && value.TenTinhThanh) {
      data.FullDiaChi = `${value.DiaChi}, ${value.TenQuanHuyen}, ${value.TenTinhThanh}`

    }
    this.setState({
      data: data
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputPassword name="MatKhau" required label="Mật khẩu" value={this.state.data.MatKhau}
                  onChange={this.handleUpdate}></InputPassword>

              </Grid>
              <Grid item xs={12}>
                <InputPassword name="MatKhauNhapLai" required label="Mật khẩu nhập lại" value={this.state.data.MatKhau}
                  onChange={this.handleUpdate}></InputPassword>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="HoDem"
                  name="HoDem"
                  variant="outlined"
                  required
                  fullWidth
                  id="HoDem"
                  label="Họ đệm"
                  value={this.state.data.HoDem}

                  onChange={this.handleUpdate}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="Ten"
                  label="Tên"
                  name="Ten"
                  autoComplete="Ten"
                  value={this.state.data.Ten}
                  onChange={this.handleUpdate}

                />
              </Grid>
              <Grid item xs={12}>
                <div className="d-flex justify-content-end">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.handleClickOpen}
                  >
                    Chọn
                </Button>
                </div>
                <TextField
                  disabled={true}
                  variant="outlined"
                  required
                  fullWidth
                  id="FullDiaChi"
                  label="Địa chỉ"
                  name="FullDiaChi"
                  value={this.state.data.FullDiaChi}
                  autoComplete="FullDiaChi"
                />

              </Grid>
              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    fullWidth
                    variant="outlined"
                    format="MM/dd/yyyy"
                    name="NgaySinh"
                    id="NgaySinh"
                    label="Ngày sinh"
                    value={this.state.data.NgaySinh}
                    onChange={this.handleUpdateNgaySinh}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>

              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Giới tính</FormLabel>
                  {/* //value={value} onChange={handleChange} */}
                  <RadioGroup row aria-label="gender" name="GioiTinh" value={this.state.data.GioiTinh} onChange={this.handleUpdate}>
                    <FormControlLabel value={true} control={<Radio />} label="Nam" />
                    <FormControlLabel value={false} control={<Radio />} label="Nữ" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng ký
            </Button>
          </form>
        </div>
        <ChonDiaChiDialog data={this.state.dangTinContact} open={this.state.open} onClose={() => { this.setState({ open: false }) }} onSave={this.handleSave} ></ChonDiaChiDialog>
      </Container>
    )
  }
}

export default withStyles(useStyles)(Test3);
