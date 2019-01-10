import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {

    return (
        <input className={"input " + styles.SearchBar} type="text" placeholder="Search for help"/>
    );
};

export default SearchBar;