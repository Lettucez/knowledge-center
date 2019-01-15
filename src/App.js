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
            const filteredItems = initialKnowledgeCenterItems.filter((item) => {
                return !item.parentReference.length;
            });
            setInitialKCItems(initialKnowledgeCenterItems);
            setFilteredKCItems(filteredItems);
        }, 3000);
    }, []);

    //filter items based on category selected and set breadcrumbCategory state
    const handleCategoryClick = (kcID) => {
        const category = filteredKCItems.find((item) => {
            return item.id === kcID;
        });
        setBreadcrumbCategoryName(category.title);

        //find kc items with parent of clicked category
        const filteredItems = [...initialKCItems].filter((item) => {
            return item.parentReference.some((parentRef) => {
                return parentRef.id === kcID;
            });
        });
        setFilteredKCItems(filteredItems);
    };

    const handleHomeBreadcrumbClick = () => {
        const filteredItems = initialKnowledgeCenterItems.filter((item) => {
            return !item.parentReference.length;
        });
      setFilteredKCItems(filteredItems);
      setBreadcrumbCategoryName(null);
    };


    return (
        <>
            <div className="section">
                <div className="container">
                    <TitleText/>
                    <SearchBar/>
                    <hr style={{backgroundColor: "#dbdbdb"}}/>
                    <Breadcrumbs categoryName={breadcrumbCategoryName} homeClick={handleHomeBreadcrumbClick}/>
                    {initialKCItems.length ? <KnowledgeCenterItems items={filteredKCItems} categoryClick={handleCategoryClick}/> : <Spinner/> }
                </div>
            </div>
        </>
    );

};

export default App;
