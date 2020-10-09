
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { useStyles } from '../../utils/use-styles'
import { AsyncAutocomplete } from '../Controllers'

class ChonDiaChiDialog extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.onChangeData = this.onChangeData.bind(this)
        this.onSave = this.onSave.bind(this)
        this.state = {
            data: this.props.data ?? {}
        }
    }
    handleChange(e) {
        e.preventDefault()

    }
    onChangeTinhThanh(item)
    {
        this.onChangeData(item["Id"], "IdTinhThanh")
        this.onChangeData(item["TenTinhThanh"], "TenTinhThanh")

    }
    onChangeQuanhuyen(item)
    {
        this.onChangeData(item["Id"], "IdQuanHuyen")
        this.onChangeData(item["TenQuanHuyen"], "TenQuanHuyen")
    }
    onChangeData(val, prod) {
        let data = this.state.data;
        data[prod] = val;
        this.setState({
            data: data
        })
    }
    onSave(e) {
        e.preventDefault()
        if(this.props.onSave)
        {
            this.props.onSave(this.state.data);
            this.props.onClose();
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <Dialog fullScreen onClose={this.props.onClose} open={this.props.open}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={this.props.onClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Chọn địa chỉ
                    </Typography>
                        <Button color="inherit" onClick={this.onSave}>
                            Lưu
                    </Button>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <Container component="main" maxWidth="xs">
                        <form className={classes.form} >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <AsyncAutocomplete typeMatter="TinhThanh" value={this.state.data.IdTinhThanh} onSelected={(item) => this.onChangeTinhThanh(item)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <AsyncAutocomplete typeMatter="QuanHuyen" value={this.state.data.IdQuanHuyen} onSelected={(item) => this.onChangeQuanhuyen(item)} disabled={!this.state.data.IdTinhThanh || this.state.data.IdTinhThanh < 0} params={{ "idTinhThanh": this.state.data.IdTinhThanh ?? -1 }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="DiaChi"
                                        name="DiaChi"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="DiaChi"
                                        label="Số nhà"
                                        defaultValue={this.state.data.DiaChi}
                                        onChange={(e) => this.onChangeData(e.target.value, "DiaChi")}
                                    />
                                </Grid>
                            </Grid>

                        </form>
                    </Container>

                </DialogContent>

            </Dialog>
        )
    }
}

ChonDiaChiDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};
export default withStyles(useStyles)(ChonDiaChiDialog);
