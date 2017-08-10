import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Selector from '../../containers/Selector/index';
import { filterByBudget, filterByInterests, filterByCuisine} from '../../../../client/redux/modules/filters';
import './styles.css';


const FilterList = ({ interestsFilters, cuisineFilters, budgetFilters, dispatch }) => {
  const interests = ['Sports', 'Music', 'Politics', 'Travel', 'Pop Culture'];
  const cuisine = ['Italian', 'Chinese', 'Japanese', 'Thai', 'Burgers & Fries'];
  const budget = ['Under $10', '$10 to $20', '$20 and higher'];

  return (
    <div className="filterList">
      <Selector arr={interests} selectValues={interestsFilters} onChangeAction={filterByInterests} dispatch={dispatch} />
      <Selector arr={cuisine} selectValues={cuisineFilters} onChangeAction={filterByCuisine} dispatch={dispatch} />
      <Selector arr={budget} selectValues={budgetFilters} onChangeAction={filterByBudget} dispatch={dispatch} />
    </div>
  );
}
function mapStateToProps(state) {
    return {
          interestsFilters: state.filters.interestsFilters,
          cuisineFilters: state.filters.cuisineFilters,
          budgetFilters: state.filters.budgetFilters
    }
}
export default connect(mapStateToProps)(FilterList);

