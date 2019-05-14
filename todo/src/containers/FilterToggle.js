import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Toggle from '../components/Toggle';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};

const FilterToggle = connect(mapStateToProps, mapDispatchToProps)(Toggle);

export default FilterToggle;