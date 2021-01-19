import { combineReducers } from 'redux';
import RepositoriesReducer from './RepositoriesReducer';

const reducer = combineReducers({
  repositories: RepositoriesReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
