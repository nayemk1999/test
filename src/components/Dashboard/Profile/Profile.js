import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { handleSignOut, initializeLoginFramework } from '../../Authentication/LoginManager';

const Profile = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    console.log(loggedInUser);
    const [profile, setProfile] = useState({})
    
    useEffect(() => {
        const url = 'http://localhost:5000/profile?email=' +loggedInUser.email
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProfile(data)
        })
    }, [])
    const signOut = () => {
        initializeLoginFramework();
        handleSignOut()
            .then(res => {
                setLoggedInUser(res)
                toast.error('Logged Out!');
            })
    }
    return (
        <Container style={{ maxWidth: "30rem" }}>
            <Card className="border-0 shadow">
                <Card.Header as={"h4"} className="text-center border-0 mt-1">Profile</Card.Header>
                <Card.Body className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={profile.photo} alt="..." className="rounded-circle" width="150" style={{ boxShadow: '0 8px 20px -4px #95abbb' }} />
                        <div className="mt-3">
                            <h4>{profile.name}</h4>
                            <p className="text-secondary mb-1">{profile.email}</p>
                        </div>
                        <Button as={Link} to='/dashboard/update-profile' variant='info' className='main-button'>Profile Update</Button>
                        <Button onClick={signOut} variant='info' className='main-button'>Log Out</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;