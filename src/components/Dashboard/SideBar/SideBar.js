import React from 'react';
import { Col } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from "./SideBar.module.css";

const SideBar = () => {
    let { url } = useRouteMatch();

    return (
        <Col sm={12} md={5} xl={4} >
            <ul className={styles.sideBarUl}>
                <li className={styles.sideBarLi}>
                    <Link to={`${url}/profile`} className={styles.sideBarLink} >Profile</Link>
                </li>
                <li className={styles.sideBarLi}>
                    <Link to={`${url}/purchased-property`} className={styles.sideBarLink} >Purchased Property</Link>
                </li>
                <li className={styles.sideBarLi}>
                    <Link to={`${url}/add-post`} className={styles.sideBarLink} >Add a post</Link>
                </li>
                <li className={styles.sideBarLi}>
                    <Link to={`${url}/manage-post`} className={styles.sideBarLink} >Manage Post</Link>
                </li>

            </ul>
        </Col>
    );
};

export default SideBar;