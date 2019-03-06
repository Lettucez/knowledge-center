/**
 * @file Defines the main app component.
 * @author Chris Leo
 */

import React, {useState, useEffect} from 'react';

import './App.css';

/**
 * Custom React Components
 */
import KnowledgeCenterItems from './components/KnowledgeCenterItems/KnowledgeCenterItems';
import TitleText from './components/TitleText/TitleText';
import SearchBar from './components/SearchBar/SearchBar';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Spinner from './components/Spinner/Spinner';

import Fuse from 'fuse.js';
import axios from 'axios';

/**
 * Test State
 */
import allKCItems from './testState';

/**
 * Fuse search options.
 *
 * @type {{distance: number, minMatchCharLength: number, keys: string[], maxPatternLength: number, threshold: number, location: number, shouldSort: boolean}}
 */
const options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "title",
        "searchData"
    ]
};

/**
 * Main app component. Created as a functional component for use with react hooks. See
 * {@link https://reactjs.org/docs/hooks-intro.html}.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const App = (props) => {

    /**
     * Set up application state using hooks.
     */

    /**
     * All knowledge center items.
     */
    const [initialKCItems, setInitialKCItems] = useState([]);

    /**
     * Filtered knowledge center items that is passed to child components for display.
     */
    const [filteredKCItems, setFilteredKCItems] = useState([]);

    /**
     * Knowledge center items that do not have a parent category. This is the initial state when the app is loaded.
     */
    const [topLevelKCItems, setTopLevelKCItems] = useState([]);

    /**
     * Breadcrumb name to show when a category is clicked for the breadcrumb component.
     */
    const [breadcrumbCategoryName, setBreadcrumbCategoryName] = useState(null);

    /**
     * Search item to pass to filter function.
     */
    const [searchTerm, setSearchTerm] = useState('');

    /**
     * Will be Fuse instance containing knowledge center items as the search data when the axios call succeeds.
     *
     * @type {Fuse}
     */
    const fuse = new Fuse(initialKCItems, options);

    /**
     * React hook that populates initial knowledge center items when application is loaded. Same/very similar as the componentDidMount
     * lifecycle hook attached to react classes.
     *
     * Calls the an endpoint for all knowledge center entities. Filters through the entities to find the ones without a parent reference.
     * The ones returned are then considered the top level categories that are shown when app first loads.
     *
     * First: set the initial knowledge center items with setInitialKCItems() inside of the .then() method
     * (this will be all of the knowledge center entities).
     *
     * Second: set the top level knowledge center items (should just be categories with no parent category) with setTopLevelKCItems().
     *
     * Finally, we set the filtered knowledge center items, (which on app load should be same as the top level knowledge center items)
     * with setFilteredKCItems().
     *
     * We pass in an empty array as the second argument to useEffect() so it only gets called once, on app load.
     */
    useEffect(() => {

        // use in production
        // this assumes you are getting back a dataset array that is wrapped in an object with the property of "entities"
        // axios.get('api/endpoint/data').then((items) => {
        //     const filteredItems = items.data.entities.filter((item) => {
        //         return !item.parentReference.length;
        //     });
        //
        //     setInitialKCItems(items.data.entities);
        //     setTopLevelKCItems(filteredItems);
        //     setFilteredKCItems(filteredItems);
        //
        // }).catch((error) => {
        //     console.error(error);
        // });

        //mock timeout for ajax call to show spinner before items get returned
        setTimeout(() => {
            //get KC items with no parentReference field
            const filteredItems = allKCItems.filter((item) => {
                return !item.parentReference.length;
            });
            setInitialKCItems(allKCItems);
            setTopLevelKCItems(filteredItems);
            setFilteredKCItems(filteredItems);
        }, 3000);

    }, []);

    /**
     * Filter items based on category and set breadcrumbCategoryName state.
     *
     * @param {number} kcID The knowledge center item id that was clicked on.
     */
    const handleCategoryClick = (kcID) => {
        const category = filteredKCItems.find((item) => {
            return item.id === kcID;
        });

        const filteredItems = initialKCItems.filter((item) => {
            return item.parentReference.some((parentRef) => {
                return parentRef.id === kcID;
            });
        });
        setFilteredKCItems(filteredItems);
        setBreadcrumbCategoryName(category.title);
        setSearchTerm('');
    };

    /**
     * Set filtered items to knowledge center items with no parent reference field (uses state variable
     * topLevelKCItems).
     */
    const handleHomeBreadcrumbClick = () => {
        setFilteredKCItems(topLevelKCItems);
        setBreadcrumbCategoryName(null);
        setSearchTerm('');
    };

    /**
     * Set filtered state based on search term. Resets state to initial state when search is blank.
     *
     * @param {Object} event Html input event object.
     */
    const handleSearchTerm = (event) => {
        setSearchTerm(event.target.value);
        setFilteredKCItems(fuse.search(event.target.value));
        setBreadcrumbCategoryName(null);
        if (event.target.value === '') {
            setFilteredKCItems(topLevelKCItems);
        }
    };

    return (
        <>
            <div className="section">
                <div className="container">
                    <TitleText/>
                    <SearchBar onSearch={handleSearchTerm} searchTerm={searchTerm}/>
                    <hr style={{backgroundColor: "#dbdbdb"}}/>
                    <Breadcrumbs categoryName={breadcrumbCategoryName} homeClick={handleHomeBreadcrumbClick}/>
                    {initialKCItems.length ?
                        <KnowledgeCenterItems items={filteredKCItems} categoryClick={handleCategoryClick}/> :
                        <Spinner/>}
                </div>
            </div>
        </>
    );

};

export default App;