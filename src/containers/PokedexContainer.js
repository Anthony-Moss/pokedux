// A "smart" container has three jobs:
// - grab stuff from redux
// -grab a dumb component
// - smash them together

import { connect } from 'react-redux';
import Pokedex from '../components/Pokedex';

// We have 2 jobs:
// - tell it how to map redux state to react props
// - tell it how to map redux dispatch to react props

// 'translate' from redux state to react props
const mapStateToProps = (state) => {
    // return our own custom props object
    return {
        // react: redux
        cards: state.cards
    }
};

// connect gives us a function that knows how to 
// translate for a dumb component 
const makeComponentSmart = connect(mapStateToProps);
const SmartPokedex = makeComponentSmart(Pokedex);

export default SmartPokedex;