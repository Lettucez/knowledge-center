import React, {useState, useEffect} from 'react';

import './App.css';

import KnowledgeCenterItems from './components/KnowledgeCenterItems/KnowledgeCenterItems';
import TitleText from './components/TitleText/TitleText';
import SearchBar from './components/SearchBar/SearchBar';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Spinner from './components/Spinner/Spinner';
import Fuse from 'fuse.js';

import allKCItems from './testState';


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

const App = (props) => {

    //set up app state using hooks
    //all kc items
    const [initialKCItems, setInitialKCItems] = useState([]);
    //items that are shown, filtered by either top level categories, clicked category, or search term
    const [filteredKCItems, setFilteredKCItems] = useState([]);
    //items that are top level categories only
    const [topLevelKCItems, setTopLevelKCItems] = useState([]);
    //breadcrumb name to show
    const [breadcrumbCategoryName, setBreadcrumbCategoryName] = useState(null);
    //hold search term
    const [searchTerm, setSearchTerm] = useState('');

    const fuse = new Fuse(initialKCItems, options);

    //populate initial Knowledge Center items
    //TODO change function to use axios and get items from drupal
    useEffect(() => {
        //TODO remove settimeout, only used to mock ajax call for spinner and setting state
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

    //filter items based on category selected and set breadcrumbCategoryName state
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

    //set filtered items to initial items with no parentRef field
    const handleHomeBreadcrumbClick = () => {
        setFilteredKCItems(topLevelKCItems);
        setBreadcrumbCategoryName(null);
        setSearchTerm('');
    };

    //handle search
    const handleSearchTerm = (event) => {
        setSearchTerm(event.target.value);
        setFilteredKCItems(fuse.search(event.target.value));
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