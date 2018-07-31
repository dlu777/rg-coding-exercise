import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SortingIcon.css';

//sortType: 'u' = unsorted, 'a' = ascending, 'd' = descending
//icon: sort, sort-down, sort-up
const SortingIcon = ({sortType}) => {
  let sort, className;
  if(sortType === 'u') sort = "sort";
  if(sortType === 'a') {
    sort = "sort-up";
    className = "sorting-icon__sorted"
  }
  if(sortType === 'd') {
    sort = "sort-down";
    className = "sorting-icon__sorted"
  }
  return (
    <FontAwesomeIcon icon={sort} className={className} />
  )
}

export default SortingIcon;
