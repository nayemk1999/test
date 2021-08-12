import React, { useContext } from 'react';
import { Button, Image, Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import avatar from '../../image/avatar.svg';
import { handleSignOut, initializeLoginFramework } from '../Authentication/LoginManager';


const ProfilePopper = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const { username, email, profilePicture } = loggedInUser

    const signOut = () => {
        // initializeLoginFramework();
        localStorage.removeItem('user');
        const signout = {
            email: ''
        }
        setLoggedInUser(signout)
        // handleSignOut()
        // .then(res => console.log(res))
            // .then(res => {
            //     console.log(res);
            //     // setLoggedInUser(res)
            //     // toast.error('Logged Out!');
            // })
    }

    return (
        <OverlayTrigger trigger="click" rootClose key="bottom" placement="bottom"
            overlay={
                <Popover id="popover-positioned-bottom">
                    <div className="d-flex justify-content-center">
                        <Button as={Link} to='/dashboard/profile' variant="outline-info" className="py-0 px-1 mt-1 " size="md">View Profile</Button>
                        {/* <Image style={{ maxWidth: "60px", border:'1px solid #17a2b8' }} src={photo || avatar} roundedCircle /> */}
                    </div>

                    <Popover.Content>
                        <strong className="text-center d-block">{username || 'username'}</strong>
                        <strong className="text-center d-block">{email || 'email'}</strong>
                        <div className="d-flex justify-content-center mt-1">
                            <Button onClick={signOut} variant="outline-info" className="py-0 px-1" size="sm">Logout</Button>
                        </div>
                    </Popover.Content>
                </Popover>
            }
        >
            <Nav.Link className="p-0 ">
                <Image style={{ border: '1px solid #17a2b8' }} src={profilePicture || "https://i.ibb.co/7CzR0Dg/users.jpg"} width="40" height="40" roundedCircle className="d-inline-block align-top" alt="..." />
            </Nav.Link>
        </OverlayTrigger>
    );
};

export default ProfilePopper;