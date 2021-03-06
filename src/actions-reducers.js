// ===========================================================================
// State
import { combineReducers } from 'redux';
import initialCards from './base.json';
// console.log(initialState);

const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT = 'uncaught';

const initialState = {
    ...initialCards,  // This spreads the "cards": [...] into this spot in initialState
    visibilityFilter: VISIBILITY_ALL
};

console.log(initialState);

// the state is an object
// with a cards property
// which is an array of objects
// { cards: [ {}, {}, {}, {} ] }


// ================================================================================
// Actions + Action Creators
const ACTION_CATCH = 'catch';

export function catchCard(id) {
    return {
        type: ACTION_CATCH,
        payload: {
            id,
        }
    }
}
window.catchCard = catchCard;

const ACTION_VISIBILITY_ALL = VISIBILITY_ALL;
const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT;
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT;

export function setVisibilityAll() {
    return {
        type: ACTION_VISIBILITY_ALL
    };
}

export function setVisibilityCaught() {
    return {
        type: ACTION_VISIBILITY_CAUGHT
    };
}

export function setVisibilityUncaught() {
    return {
        type: ACTION_VISIBILITY_UNCAUGHT
    };
}
window.setVisibilityAll = setVisibilityAll;
window.setVisibilityCaught = setVisibilityCaught;
window.setVisibilityUncaught = setVisibilityUncaught;
// ================================================================================
// Reducer

function cards(state=initialState.cards, action={type: ''}) {
    // console.log(`cards got called with ${action.payload}`);

    switch(action.type) {
        case ACTION_CATCH:
            console.log(`cards got called with ${action.payload.id}`);
            const newState = state.map(card => {
                    if (card.id === action.payload.id) {
                        return {
                            ...card,
                            isCaught: true
                        }
                    } else {
                        return card;
                    }
                })
            ;
            // Whatever is returned by the reducer is automatically
            // used by the store as the new version of state.
            return newState;
            // find the card, set it to 'caught'
        break;
            default:
            return state;
            break;
        }
}

// visibility reducer manages a string
function visibility(state=initialState.visibilityFilter, action={type: ''}) {
    // console.log(action.type)
    switch(action.type) {
        case ACTION_VISIBILITY_ALL:
            // console.log(`visibility got called with ${action.payload.id}`)
            return VISIBILITY_ALL
        break;
        case ACTION_VISIBILITY_CAUGHT:
            // set visability to caught
            return VISIBILITY_CAUGHT
        break;
        case ACTION_VISIBILITY_UNCAUGHT:
            // set visibility to uncaught
            return VISIBILITY_UNCAUGHT
            break;
        default:
            return state;
        break;
    }
}

// This is where you are assigning responsibility of one piece
// of state to one reducer.
export const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility
});