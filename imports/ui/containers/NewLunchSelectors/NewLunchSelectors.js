import React from 'react';
import { connect } from 'react-redux';
import { selectBudget, selectCuisine } from '../../../../client/redux/modules/lunch';
import Selector from '../../components/Selector/';

const NewLunchSelectors = ({budget_selection, cuisine_selection, dispatch }) => {
  const cuisine = ['Italian', 'Chinese', 'Japanese', 'Thai', 'Burgers & Fries', 'Greek', 'Malaysian', 'Vietnamese', 'Indian', 'Mexican', 'Vegan', 'Vegetarian'];
  const budget = ['Under 10', '10 to 20', '20 and higher'];
  return (
    <div className="lunch-selectors">
      <Selector arr={cuisine} selectValues={cuisine_selection} onChangeAction={selectCuisine} dispatch={dispatch} />
      <Selector arr={budget} selectValues={budget_selection} onChangeAction={selectBudget} dispatch={dispatch} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    budget_selection: state.lunch.budget_selection,
    cuisine_selection: state.lunch.cuisine_selection
  }
}

const connectedNLS = connect(mapStateToProps)(NewLunchSelectors);
export default connectedNLS;

