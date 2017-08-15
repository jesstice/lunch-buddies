import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
const Selector = ({ selectValues, dispatch, onChangeAction, arr }) => {

return (
      <SelectField
        multiple={true}
        hintText="Select as many as you like"
        value={selectValues}
        onChange={(event, index, values) => dispatch(onChangeAction(values, selectValues))}
      >
        {arr.map((name) => (
          <MenuItem
            key={name}
            insetChildren
            checked={selectValues && selectValues.includes(name)}
            value={name}
            primaryText={name}
          />
        ))}
      </SelectField>
  );
};

Selector.propTypes = {
  arr: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  hint: PropTypes.string,
  onChangeAction: PropTypes.func.isRequired,
  selectValues: PropTypes.array.isRequired
};

export default Selector;
