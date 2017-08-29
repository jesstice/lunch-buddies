import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { selectBudget, selectCuisine } from '../../../../client/redux/modules/lunch';
import Selector from '../../components/Selector/';
import Loader from '../../components/Loader/';
import { Tags } from '../../../api/tags/';


class NewLunchSelectors extends Component {
//= ({budget_selection, cuisine_selection, dispatch }) => {
  componentDidMount() {
    cuisine = this.props.cuisine
    budget = this.props.budget
  }
  render() {
    if(this.props.cuisine && this.props.budget){
      return (
        <div className="lunch-selectors">
          <Selector arr={this.props.cuisine} selectValues={this.props.cuisine_selection} onChangeAction={selectCuisine} hint="Filter for Cuisines" />
          <Selector arr={this.props.budget} selectValues={this.props.budget_selection} onChangeAction={selectBudget} hint="Filter for Budget" />
        </div>
      )
    } else {
      return <Loader />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    budget_selection: state.lunch.budget_selection,
    cuisine_selection: state.lunch.cuisine_selection
  }
}
const NLSwrap = createContainer(function() {
if(Meteor.subscribe('tags').ready()){
  const tags = Tags.find({}, {fields: {cuisine: 1, budget: 1}}).fetch();
  return {
    budget : tags[0].budget,
    cuisine : tags[0].cuisine
  }
} else {
  return {}
}
}, NewLunchSelectors)

export default connect(mapStateToProps)(NLSwrap);

