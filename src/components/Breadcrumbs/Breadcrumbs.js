import React from 'react';

const Breadcrumbs = (props) => {

    return (
        <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
            <ul>
                <li onClick={props.homeClick}>
                    <a href="#">
                        <span className="icon is-small">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </span>
                        <span>Home</span>
                    </a>
                </li>
                { props.categoryName &&
                <li className="is-active"><a href="#">{props.categoryName}</a></li>
                }
            </ul>
        </nav>
    );
};

export default Breadcrumbs;