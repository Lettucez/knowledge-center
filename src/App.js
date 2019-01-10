import React, {useState} from 'react';

import './App.css';

import KnowledgeCenterItems from './components/KnowledgeCenterItems/KnowledgeCenterItems';
import TitleText from './components/TitleText/TitleText';
import SearchBar from './components/SearchBar/SearchBar';

import initialState from './testState';

const App = (props) => {

    const [unfilteredKCItems, setUnfilteredKCItems] = useState(initialState);


    return (
        <>

            <div className="section">
                <div className="container">
                    <TitleText/>
                    <SearchBar/>
                    <hr style={{backgroundColor: "#dbdbdb"}}/>
                    <KnowledgeCenterItems items={unfilteredKCItems}/>
                </div>
            </div>
        </>
    );

};

export default App;
