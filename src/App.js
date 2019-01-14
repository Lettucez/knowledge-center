import React, {useState, useEffect} from 'react';

import './App.css';

import KnowledgeCenterItems from './components/KnowledgeCenterItems/KnowledgeCenterItems';
import TitleText from './components/TitleText/TitleText';
import SearchBar from './components/SearchBar/SearchBar';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Spinner from './components/Spinner/Spinner';

import initialKnowledgeCenterItems from './testState';

const App = (props) => {

    //set up app state using hooks
    const [initialKCItems, setInitialKCItems] = useState([]);
    const [filteredKCItems, setFilteredKCItems] = useState([]);
    const [breadcrumbCategoryName, setBreadcrumbCategoryName] = useState(null);

    //populate initial Knowledge Center items
    //TODO change function to use axios and get items from drupal
    useEffect(() => {
        setTimeout(() => {
            setInitialKCItems(initialKnowledgeCenterItems);
            setFilteredKCItems(initialKnowledgeCenterItems);
        }, 3000);
    }, []);

    //filter items based on category selected and set breadcrumbCategory state
    const handleCategoryClick = (kcID) => {
        const category = filteredKCItems.find((item) => {
            return item.id === kcID;
        });
        setBreadcrumbCategoryName(category.title);

        const filteredItems = [...initialKCItems].filter((item) => {
            return item.parentReference.filter((parentRef) => {
                return parentRef.id === kcID;
            });
        });
        setFilteredKCItems(filteredItems);
    };



    return (
        <>
            <div className="section">
                <div className="container">
                    <TitleText/>
                    <SearchBar/>
                    <hr style={{backgroundColor: "#dbdbdb"}}/>
                    <Breadcrumbs categoryName={breadcrumbCategoryName}/>
                    {initialKCItems.length ? <KnowledgeCenterItems items={filteredKCItems} categoryClick={handleCategoryClick}/> : <Spinner/> }
                </div>
            </div>
        </>
    );

};

export default App;
