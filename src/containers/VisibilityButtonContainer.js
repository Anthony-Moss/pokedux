import { connect } from 'react-redux';
import VisibilityButton from '../components/VisibilityButton';
import { setVisibilityAll, setVisibilityCaught, setVisibilityUncaught} from '../actions-reducers';

const  mapStateToProps = (state) => {
    // console.log(state);
    return {
        visibilityFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showAll: () => {
            dispatch(setVisibilityAll());
        },
        showCaught: () => {
            dispatch(setVisibilityCaught());
        },
        showUncaught: () => {
            dispatch(setVisibilityUncaught());
        }
    };
};

const makeComponentSmart = connect(
    mapStateToProps, 
    mapDispatchToProps
);
const SmartVisibilityButton = makeComponentSmart(VisibilityButton);

export default SmartVisibilityButton;