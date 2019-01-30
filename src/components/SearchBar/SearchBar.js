import React from 'react';
import styles from './SearchBar.module.css';


const SearchBar = (props) => {

    return (
        <input onChange={props.onSearch} value={props.searchTerm} className={"input " + styles.SearchBar} type="text" placeholder="Search for help"/>
    );
};

export default SearchBar;