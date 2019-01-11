import React from 'react';

const Breadcrumbs = (props) => {

    let homeIcon = (
        <li>
            <span className="icon">
                <i className="fa fa-home" aria-hidden="true"></i>
            </span>
        </li>
    );

    return (
        <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
            <ul>
                {props.showHome && homeIcon}
                <li>{props.title}</li>
            </ul>
        </nav>
    );
};

export default Breadcrumbs;