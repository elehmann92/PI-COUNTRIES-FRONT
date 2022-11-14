import React from 'react'
import Filters from './Filters'
import SearchBar from './SearchBar'
import Sorting from './Sorting'
import '../styles/sortAndFilters.css'

function SortAndFilters() {
  return (
    <div className='fsMainContainer'>
        <label className='searchLabel'>SEARCH</label>
        <SearchBar/>
        <Sorting/>
        <Filters/>
    </div>
    
  )
}

export default SortAndFilters