import React from 'react';

const images = {
    type: {
        category: 'fa-area-chart',
        gitbook: 'fa-book ',
        link: 'fa-link',
        video: 'fa-video-camera'
    }
};

const KnowledgeCenterItem = (props) => {

    return (
     <div style={{width: 300}} className="column is-one-third">
        <div className="card">
            <i className={"fa " + images.type[props.item.type] + " fa-5x"} aria-hidden="true"></i>
            <div className="card-content">
                {props.item.title}
            </div>
        </div>
     </div>
    );
};

export default KnowledgeCenterItem;