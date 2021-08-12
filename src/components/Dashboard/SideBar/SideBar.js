import React, { useContext, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import { UserContext } from '../../../App';
import styles from "./SideBar.module.css";

const SideBar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false)
    let { url } = useRouteMatch();

    useEffect(() => {
        fetch('https://toprakserver.herokuapp.com/admin/is-admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(true));
    }, [loggedInUser.email])
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
                {
                    isAdmin ?
                    
                        (<div> <li className={styles.sideBarLi}>
                            <Link to={`${url}/manage-post`} className={styles.sideBarLink} >Manage Post</Link>
                        </li>
                            <li className={styles.sideBarLi}>
                                <Link to={`${url}/add-admin`} className={styles.sideBarLink} >Add Admin</Link>
                            </li>
                        </div>)
                        :
                        (<div>
                            <li className={styles.sideBarLi}>
                                <Link to={`${url}/review`} className={styles.sideBarLink} >Review</Link>
                            </li>
                        </div>)
                }
            </ul>
        </Col>
    );
};

export default SideBar;