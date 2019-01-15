import React from 'react';

const Breadcrumbs = (props) => {

    let homeIcon = (
        <li onClick={props.homeClick}>
            <a href="#">
                <span className="icon is-small">
                    <i className="fa fa-home" aria-hidden="true"></i>
                </span>
                <span>Home</span>
            </a>
        </li>
    );

    return (
        <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
            <ul>
                {props.categoryName && homeIcon}
                <li className="is-active"><a href="#">{props.categoryName}</a></li>
            </ul>
        </nav>
    );
};

export default Breadcrumbs;