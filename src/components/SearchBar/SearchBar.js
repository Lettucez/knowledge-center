import React from 'react';
import styles from './SearchBar.module.css';
import Fuse from 'fuse.js';


const options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "title",
        "author.firstName"
    ]
};

const SearchBar = (props) => {

    //const fuse = new Fuse(props.initialKC);

    const handleSearch = (event) => {

    };

    return (
        <input onChange={handleSearch} className={"input " + styles.SearchBar} type="text" placeholder="Search for help"/>
    );
};

export default SearchBar;