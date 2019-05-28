import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import nanoid from 'nanoid';

import Label from 'Form/Label';

export default class Checkbox extends PureComponent {
  constructor(props) {
    super(props);

    this.id = props.id || `checkbox-${nanoid(8)}`;
  }

  render() {
    const {
      className,
      text,
      name,
      onChange,
      isChecked,
      isDisabled,
      isLoading,
    } = this.props;
    const checkboxComputedAttributes = {
      [onChange ? 'checked' : 'defaultChecked']: isChecked,
    };
    const checkboxClass = cc({
      checkbox: true,
      [className]: className,
      disabled: isDisabled,
      loading: isLoading,
    });

    return (
      <div className={checkboxClass}>
        <input
          id={this.id}
          type="checkbox"
          name={name}
          onChange={onChange}
          {...checkboxComputedAttributes}
          disabled={isDisabled || isLoading}
        />
        {text ? (
          <Label htmlFor={this.id}>
            {text}
          </Label>
        ) : null}
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};
Checkbox.defaultProps = {
  id: null,
  className: null,
  text: 'Checkbox',
  name: '',
  onChange: null,
  isChecked: false,
  isDisabled: false,
  isLoading: false,
};
