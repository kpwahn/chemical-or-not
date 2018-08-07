import { combineReducers } from 'redux';
import searchBarReducer from './components/SearchBar/reducer';
import {reducer} from 'redux-form';

const rootReducer = combineReducers({
    searchBar: searchBarReducer,
    form: reducer
});

export default rootReducer;
