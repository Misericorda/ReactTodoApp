import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <div onClick={() => dispatch(toggleShowCompleted())} className="search__show_completed">
        <FontAwesomeIcon icon={['far', showCompleted ? 'check-square': 'square']}/>
        Show completed Todos
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