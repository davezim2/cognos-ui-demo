import React, { useContext, useState } from 'react';
import { Context } from '../store/Store';
import '../styles/searchbar.scss';
import { Search, IconButton } from '@carbon/react';
import { Add, ArrowsVertical } from '@carbon/icons-react'


const SearchBar = () => {
    const [state, dispatch] = useContext(Context)
    const [searchStr, setSearchStr] = useState('')

    // const sortTenants = () => {
    //     const oList = state.tenants
    //     if()
        
    //     const sortedList = oList.sort((a,b) => {
            
    //     })


    // }
    
    const searchTenants = () => {
        
        const originalList = state.tenants

        const updatedList = originalList.filter(ten => ten.defaultName.toLowerCase().includes(searchStr.toLowerCase()))

        dispatch({type: 'SET_FILTEREDLIST', payload: updatedList})
        
    }

    return (
        <div className="searchBar--container">
            {/* <IconButton label="Add Tenant"> */}
                <Add 
                    aria-label="Add"
                    label="Add Tenant"
                    size="24"
                    onClick={() => dispatch({type:'SET_ADDTENANTMODALTOGGLE', payload: true})}
                />
            {/* </IconButton> */}
            {/* <IconButton label="Filter"> */}
                <ArrowsVertical 
                    aria-label="Sort" 
                    size="24"
                />
            {/* </IconButton> */}
            <Search
                size="lg"
                value={searchStr}
                placeholder="Search"
                labelText="Search"
                className="searchBar--search"
                onChange={(e) => setSearchStr(e.target.value)}
                onKeyUp={searchTenants}

            />
        </div>
    );
  }
  
  export default SearchBar;