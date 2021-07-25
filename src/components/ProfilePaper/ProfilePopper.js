import React, { useContext } from 'react';
import { Button, Image, Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserContext } from '../../App';

    

const ProfilePopper = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    // 
    return (
          <OverlayTrigger trigger="click" rootClose key="bottom" placement="bottom"
            overlay={
                <Popover id="popover-positioned-bottom">
                    <div className="d-flex justify-content-center">
                        <Image style={{ maxWidth: "60px", border:'1px solid #17a2b8' }} src='https://internetserviceauth.web.app/static/media/avatar.deb822fe.svg' roundedCircle />
                    </div>
                    <Popover.Content>
                        <strong className="text-center d-block">Avatar</strong>
                        <strong className="text-center d-block">Email</strong>
                        <div className="d-flex justify-content-center mt-1">
                            <Button  variant="outline-info" className="py-0 px-1"  size="sm">Logout</Button>
                        </div>
                    </Popover.Content>
                </Popover>
            }
        >
            <Nav.Link className="p-0 ">
                <Image style={{border:'1px solid #17a2b8' }}   src='https://internetserviceauth.web.app/static/media/avatar.deb822fe.svg' width="40" height="40" roundedCircle className="d-inline-block align-top" alt="..."  />
            </Nav.Link>
        </OverlayTrigger>
    );
};

export default ProfilePopper;