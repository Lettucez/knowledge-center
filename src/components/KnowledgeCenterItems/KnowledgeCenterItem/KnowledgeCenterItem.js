import React from 'react';
import styles from './KnowledgeCenterItem.module.css';

const images = {
    type: {
        category: 'fa-area-chart',
        gitbook: 'fa-book ',
        link: 'fa-link',
        video: 'fa-video-camera'
    }
};

const KnowledgeCenterItem = (props) => {

    //will either filter list if a category was selected or take you to the knowledge center item entity
    let functionAction = null;

    if (props.item.type === 'category') {
        functionAction = () => {
            props.click(props.item.id);
        }
    } else {
        functionAction = () => {
            window.location.href = `/kcenter/${props.item.id}`;
        }
    }

    return (
        <div className="column is-one-third">
            <div style={{height: 100, cursor: 'pointer'}} className={'card ' + styles["Scale-up-center"]} onClick={() => { functionAction() }}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div style={{width: 100, height: 100, minWidth: 100, display:"flex", justifyContent: "center", alignItems: "center", backgroundColor: props.item.type === 'category' ? '#122956' : props.item.type === 'gitbook' ? 'dodgerblue' : props.item.type === 'link' ? 'darkgreen' : 'darkred' }}>
                        <span className="icon is-large has-text-white">
                            <i className={"fa " + images.type[props.item.type] + " fa-3x"} aria-hidden="true"></i>
                    </span>
                    </div>
                    <div style={{height: 100, display: "flex", alignItems: "center"}}>
                        <div style={{margin: "0 20px", color: "#122956"}} className="title is-5">
                            {props.item.title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default KnowledgeCenterItem;