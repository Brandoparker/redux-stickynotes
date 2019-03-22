import { combineReducers, } from 'redux';
import blogs from './blogs';
import nextId from './nextId';
import 'semantic-ui-css/semantic.min.css';

const rootReducer = combineReducers({
  blogs,
  nextId
});

export default rootReducer;
