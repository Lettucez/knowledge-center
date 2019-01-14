import React from 'react';

import KnowledgeCenterItem from './KnowledgeCenterItem/KnowledgeCenterItem';

const KnowledgeCenterItems = (props) => {

    return (
        <div className="columns is-multiline">
            {props.items.map((item) => {
                if (item.type !== 'category') {
                    return <KnowledgeCenterItem key={item.id} item={item}/>
                } else {
                    return <KnowledgeCenterItem key={item.id} item={item} click={props.categoryClick}/>
                }
            })
            }
        </div>
    );

};

export default KnowledgeCenterItems;