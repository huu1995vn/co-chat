// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { commonAttr } from '../../core/variables';
import { DaiLyXeBLLInterfaceData } from '../../core/api/dailyxe/dailyxeBLL';


class AsyncAutocomplete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      label: props.label,
      id: props.id ?? "Autocomplete-Id",
      optionValueDefault: props.optionValueDefault ?? -1,
      loading: true,
      value: {},
    }


  }
  componentDidMount() {
    this.loadData()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(JSON.stringify(this.props.params??{})!==JSON.stringify(prevProps.params??{}) || this.props.typeMatter!==prevProps.typeMatter)
    {
      this.loadData()
    }
  }
  async loadDataMater() {
    var data = [];
    try {
      
      let params = Object.assign({}, this.props.params);
      const res = await new DaiLyXeBLLInterfaceData().searchDataMater(this.props.typeMatter, params);
      data = res[commonAttr.DataResult];

    } catch (error) {

    }
    this.setState({
      options: data
    })

  }
  initTypeMatter() {
    let label;
    let optionLabel;
    let optionValue;
    switch (this.props.typeMatter) {
      case "TinhThanh":
        label = this.props.label ?? "Tỉnh thành";
        optionLabel = this.props.optionLabel ?? "TenTinhThanh";
        optionValue = this.props.optionValue ?? "Id";
        break;
      case "QuanHuyen":
        label = this.props.label ?? "Quận huyện";
        optionLabel = this.props.optionLabel ?? "TenQuanHuyen";
        optionValue = this.props.optionValue ?? "Id";
        break;
      default:
        label = this.props.label ?? "Autocomplete";
        optionLabel = this.props.optionLabel ?? "Name";
        optionValue = this.props.optionValue ?? "Id";
        break;

    }
    this.setState({
      label: label,
      optionLabel: optionLabel,
      optionValue: optionValue,
    })
  }
  async loadData() {
    this.initTypeMatter()
    if (this.props.options != null && this.props.options.length > 0) {
      this.setState({
        options: this.props.options
      })
      return
    }
    if (!this.props.typeMatter) {
      this.setState({
        options: []
      })
    }
    await this.loadDataMater()
    let itemSelected = this.state.options.find((e) => e[this.state.optionValue] === this.props.value)
    this.setState({
      value: itemSelected
    })

  }

  setSelected(val) {
    this.setState({
      value: val
    })
    if (this.state.options && this.state.options.length > 0) {
      if (this.props.onSelected) this.props.onSelected(val);
      if (this.props.onChange) this.props.onChange(val[this.state.optionValue]);
    }
  }
  render() {
    return (
      <Autocomplete
        id={this.props.id}
        open={this.state.open}
        onOpen={() => {
          this.setState({ open: true });
        }}
        onClose={() => {
          this.setState({ open: false });
        }}
        disabled={this.props.disabled ?? false}
        getOptionSelected={(option, value) => {
          return option[this.state.optionValue]===value[this.state.optionValue];
        }}
        onChange={(event, newValue) => {
          this.setSelected(newValue)
        }}
        getOptionLabel={(option) => option[this.state.optionLabel] ?? ""}
        value={this.state.value ?? {}}
        options={this.state.options ?? []}
        renderInput={(params) => (
          <TextField
            fullWidth
            {...params}
            label={this.state.label}
            required={this.props.required ?? false}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    )
  }
}

export default AsyncAutocomplete;
