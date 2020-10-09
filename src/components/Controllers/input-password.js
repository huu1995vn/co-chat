
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class InputPassword extends Component {
    constructor(props) {
        super(props)
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
        this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this)
        this.state = {
            showPassword: false,
            label: props.label ?? "Password Text",
            id: props.id
        }
    }

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    render() {
        return (
            <FormControl fullWidth={this.props.fullWidth??true} variant="outlined">
                {this.state.label && <InputLabel required={this.props.required??false} htmlFor="outlined-adornment-password">{this.state.label}</InputLabel>}

                <OutlinedInput
                    label={this.state.label}
                    id={this.state.id}
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.value}
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    required={this.props.required??false}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                        edge="end"
                        >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
          />
            </FormControl>
        )
    }
}

export default InputPassword;
