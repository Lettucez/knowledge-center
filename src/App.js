import React, { useState } from 'react';

import './App.css';

import KnowledgeCenterItems from './components/KnowledgeCenterItems/KnowledgeCenterItems';
import initialState from './testState';

const App = (props) => {

    const [unfilteredKCItems, setUnfilteredKCItems] = useState(initialState);


    return (
        <div className="section">
            <div className="container">
                <KnowledgeCenterItems items={unfilteredKCItems}/>
            </div>
        </div>


    );

};

export default App;
