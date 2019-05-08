// A "smart" container has three jobs:
// - grab stuff from redux
// -grab a dumb component
// - smash them together

import { connect } from 'react-redux';
import Pokedex from '../components/Pokedex';
import { catchCard } from '../actions-reducers';
import VisibilityButton from '../components/VisibilityButton';



// We have 2 jobs:
// - tell it how to map redux state to react props
// - tell it how to map redux dispatch to react props

// 'translate' from redux state to react props
const mapStateToProps = (state) => {
    console.log(state);
    // return our own custom props object
    return {
        // react: redux
        cards: state.cards,
        visibilityFilter: state.visibilityFilter
    }
};

// "translate" from redux dispatch tp react props
const mapDispatchToProps = (dispatch) => {
    // return our own custom props object
    return {
        // the anonymous function
        // is *just like* our this._helperFunctions
        handleClick: (id) => {
            // behind the scenes, redux
            // is doing the same as our 'setState'
            dispatch(catchCard(id));
        }
    };
};



// connect gives us a function that knows how to 
// translate for a dumb component 
const makeComponentSmart = connect(mapStateToProps, mapDispatchToProps);
const SmartPokedex = makeComponentSmart(Pokedex, VisibilityButton);

export default SmartPokedex;