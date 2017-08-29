import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Selector from '../../components/Selector/index';
import { filterByBudget, filterByInterests, filterByCuisine} from '../../../../client/redux/modules/filters';
import { Tags } from '../../../api/tags/';
import { createContainer } from 'meteor/react-meteor-data';
import Loader from '../../components/Loader/'
import './styles.css';


class FilterList extends Component {

  render() {
    if(this.props.budget && this.props.cuisine && this.props.interests) {
      return (
        <div className="filterList">
          <Selector
            arr={this.props.interests}
            selectValues={this.props.interestsFilters}
            onChangeAction={filterByInterests}
            hint="Filter for Interests"
          />
          <Selector
            arr={this.props.cuisine}
            selectValues={this.props.cuisineFilters}
            onChangeAction={filterByCuisine}
            hint="Filter for Cuisines"
          />
          <Selector
            arr={this.props.budget}
            selectValues={this.props.budgetFilters}
            onChangeAction={filterByBudget}
            hint="Filter for Budget"
          />
        </div>
      )
    } else {
      return <Loader />
    }
  }
}

const FilterWrap = createContainer(function() {
  if(Meteor.subscribe('tags').ready()) {
    const tags =  Tags.find({}, { fields: {interests: 1, cuisine: 1, budget: 1} }).fetch();
      return {
        interests: tags[0].interests,
        budget: tags[0].budget,
        cuisine: tags[0].cuisine
    }; 
  } else {
    return {}
  }
}, FilterList);

function mapStateToProps(state) {
    return {
          interestsFilters: state.filters.interestsFilters,
          cuisineFilters: state.filters.cuisineFilters,
          budgetFilters: state.filters.budgetFilters
    }
}
export default connect(mapStateToProps)(FilterWrap);

