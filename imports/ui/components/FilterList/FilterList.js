import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Selector from '../../containers/Selector/index';
import './styles.css';

const FilterList = ({ dispatch, filterValues, handleChange }) => {
  const interests = ['Sports', 'Music', 'Politics', 'Travel', 'Pop Culture'];
  const cuisine = ['Italian', 'Chinese', 'Japanese', 'Thai', 'Burgers & Fries'];
  const budget = ['Under $10', '$10 to $20', '$20 and higher'];

  return (
    <div className="filterList">
      <Selector arr={interests} />
      <Selector arr={cuisine} />
      <Selector arr={budget} />
    </div>
  );
}

export default FilterList;

