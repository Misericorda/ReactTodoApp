import {SET_SEARCH_TEXT} from "./actionTypes"

export let setSearchText = (searchText) => {
  return {
    type: SET_SEARCH_TEXT,
    searchText: searchText
  }
};