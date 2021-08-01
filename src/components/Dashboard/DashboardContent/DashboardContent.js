import React from 'react';
import { Col } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddAPost from '../AddAPost/AddAPost';
import ManagePost from '../ManagePost/ManagePost';
import Profile from '../Profile/Profile';
import ProfileUpdate from '../Profile/ProfileUpdate';
import PurchasedProperty from '../PurchasedProperty/PurchasedProperty';

const DashboardContent = () => {
    let { path } = useRouteMatch();
    return (
        <Col sm={12} md={7} xl={8} >
            <Switch>
                <Route exact path={path}>
                    <PurchasedProperty/>
                </Route>
                <Route path={`${path}/purchased-property`}>
                    <PurchasedProperty/>
                </Route>
                <Route path={`${path}/add-post`}>
                    <AddAPost />
                </Route>
                <Route path={`${path}/manage-post`}>
                    <ManagePost />
                </Route>
                <Route path={`${path}/profile`}>
                    <Profile />
                </Route>
                <Route path={`/dashboard/update-profile`}>
                    <ProfileUpdate />
                </Route>
            </Switch>
        </Col>
    );
};

export default DashboardContent;