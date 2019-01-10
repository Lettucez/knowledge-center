import React from 'react';

import KnowledgeCenterItem from './KnowledgeCenterItem/KnowledgeCenterItem';

const KnowledgeCenterItems = (props) => {

    return (
        <div className="columns is-multiline">

            {props.items.map((item) => {
                return <KnowledgeCenterItem key={item.id} item={item}/>
            })
            }
        </div>
    );

};

export default KnowledgeCenterItems;