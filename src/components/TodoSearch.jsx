import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setSearchText, toggleShowCompleted} from "../store/actions"

export const TodoSearch = props =>   {
  let {dispatch, showCompleted, searchText} = props;

  let onSearch = (e) => {
    let text = e.target.value.toLowerCase();
    dispatch(setSearchText(text))
  };

  return (
    <div className="container_header">
      <div>
        <input type="search"
               placeholder="Looking for todo starting with..."
               onChange={onSearch}
               value={searchText}/>
      </div>
      <div>
        <label>
          <input type="checkbox"
                 onChange={() => dispatch(toggleShowCompleted())}
                 checked={showCompleted}/>
          Show completed Todos
        </label>
      </div>
    </div>
  )
};

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch)