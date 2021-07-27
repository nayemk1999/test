import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../Shared/Header/Header/Header';
import DashboardContent from '../DashboardContent/DashboardContent';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    return (
        <main>
            <Header />
            <Container className="mt-5 pt-5">
                <Row>
                    <SideBar />
                    <DashboardContent />
                </Row>
            </Container>
        </main>
    );
};

export default Dashboard;