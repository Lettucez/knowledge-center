import React from 'react';

/**
 * Breadcrumb component.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Breadcrumbs = (props) => {

    return (
        <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
            <ul>
                <li onClick={props.homeClick}>
                    <div style={{alignItems: "center", color: "#3273dc", display: "flex", justifyContent: "center", paddingRight: ".75em", cursor: "pointer"}}>
                        <span className="icon is-small">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </span>
                        <span>Home</span>
                    </div>
                </li>
                { props.categoryName &&
                <li className="is-active"><div style={{alignItems: "center", display: "flex", justifyContent: "center", paddingLeft: ".75em"}}>{props.categoryName}</div></li>
                }
            </ul>
        </nav>
    );
};

export default Breadcrumbs;