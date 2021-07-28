import React, { useContext } from 'react';
import { Button, Image, Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserContext } from '../../App';
import avatar from '../../image/avatar.svg';
import { handleSignOut, initializeLoginFramework } from '../Authentication/LoginManager';


const ProfilePopper = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const { name, email, photo } = loggedInUser

    const signOut = () => {
        initializeLoginFramework();
        handleSignOut()
            .then(res => {
                setLoggedInUser(res)
                toast.error('Logged Out!');
            })
    }

    return (
        <OverlayTrigger trigger="click" rootClose key="bottom" placement="bottom"
            overlay={
                <Popover id="popover-positioned-bottom">
                    {/* <div className="d-flex justify-content-center">
                        <Image style={{ maxWidth: "60px", border:'1px solid #17a2b8' }} src={photo || avatar} roundedCircle />
                    </div> */}
                    <Popover.Content>
                        <strong  className="text-center d-block"> <a style={{textDecoration:"none"}} href="/userProfile">View Profile</a> </strong>
                        <strong className="text-center d-block">{name || 'name'}</strong>
                        <strong className="text-center d-block">{email || 'email'}</strong>
                        <div className="d-flex justify-content-center mt-1">
                            <Button onClick={signOut} variant="outline-info" className="py-0 px-1" size="sm">Logout</Button>
                        </div>
                    </Popover.Content>
                </Popover>
            }
        >
            <Nav.Link className="p-0 ">
                <Image style={{ border: '1px solid #17a2b8' }} src={photo || avatar} width="40" height="40" roundedCircle className="d-inline-block align-top" alt="..." />
            </Nav.Link>
        </OverlayTrigger>
    );
};

export default ProfilePopper;