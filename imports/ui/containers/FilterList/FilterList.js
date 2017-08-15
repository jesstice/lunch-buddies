import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Selector from '../../components/Selector/index';
import { filterByBudget, filterByInterests, filterByCuisine} from '../../../../client/redux/modules/filters';
import './styles.css';


const FilterList = ({ interestsFilters, cuisineFilters, budgetFilters, dispatch }) => {
  const interests = ['Sports', 'Music', 'Politics', 'Travel', 'Pop Culture', 'World News', 'Fashion', 'Fishing', 'Books', 'Science Fiction', 'Programming', 'Working Out', 'Conspiracy Theories'];
  const cuisine = ['Italian', 'Chinese', 'Japanese', 'Thai', 'Burgers & Fries', 'Greek', 'Malaysian', 'Vietnamese', 'Indian', 'Mexican', 'Vegan', 'Vegetarian'];
  const budget = ['Under 10', '10 to 20', '20 and higher'];

  return (
    <div className="filterList">
      <Selector arr={interests} selectValues={interestsFilters} onChangeAction={filterByInterests} dispatch={dispatch} hint="Filter for Interests" />
      <Selector arr={cuisine} selectValues={cuisineFilters} onChangeAction={filterByCuisine} dispatch={dispatch} hint="Filter for Cuisines" />
      <Selector arr={budget} selectValues={budgetFilters} onChangeAction={filterByBudget} dispatch={dispatch} hint="Filter for Budget" />
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

