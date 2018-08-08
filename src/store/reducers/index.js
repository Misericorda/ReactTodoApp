import {combineReducers} from 'redux'
import {createReducer} from 'redux-create-reducer';
import {
  TOGGLE_SHOW_COMPLETED,
  SET_SEARCH_TEXT,
  ADD_TODO,
  ADD_TODOS,
  UPDATE_TODO,
  LOGIN,
  LOGOUT
} from "../actions/actionTypes"


const searchTextReducer = createReducer('', {
  [SET_SEARCH_TEXT](state, action) {
    return action.searchText;
  },
});

const showCompletedReducer = createReducer(false, {
  [TOGGLE_SHOW_COMPLETED](state, action) {
    return !state;
  },
});

const todoReducer = createReducer([], {
  [UPDATE_TODO](state, action) {
    return state.map((todo) => {
      if (todo.id === action.id) {
        return {
          ...todo,
          ...action.updates
        }
      } else {
        return todo
      }
    });
  },
  [ADD_TODO](state, action) {
    return [...state, action.todo]
  },
  [ADD_TODOS](state, action) {
    return [...state, ...action.todos]
  },
  [LOGOUT](state, action) {
    return []
  }
});

const authReducer = createReducer({}, {
  [LOGIN](state, action) {
    return {
      uid: action.uid,
      email: action.email
    };
  },
  [LOGOUT](state, action) {
    return {}
  }
});

const rootReducer = combineReducers({
  todos: todoReducer,
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  auth: authReducer
});

export default rootReducer;