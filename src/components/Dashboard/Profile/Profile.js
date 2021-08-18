import React, { useContext} from "react";
import { Button, Card, Container } from "react-bootstrap";
// import toast from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import { UserContext } from "../../../App";
// import {
//   handleSignOut,
//   initializeLoginFramework,
// } from "../../Authentication/LoginManager";

const Profile = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const history = useHistory()
  const signOut = () => {
    // initializeLoginFramework();
    const userId = localStorage.removeItem('user');
    // toast.error("Logged Out!");
    if (!userId) {
      return swal("Successfully Logout!", "Please Login.", { dangerMode: true })
        .then(lo => history.push('/login'));
    }
  }
  return (
    <Container style={{ maxWidth: "30rem" }}>
      <Card className="border-0 shadow">
        <Card.Header as={"h3"} className="text-center border-0 mt-3 pt-2 pb-2">
          Profile
        </Card.Header>
        <Card.Body className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src={
                loggedInUser.profilePicture ||
                "https://i.ibb.co/7CzR0Dg/users.jpg"
              }
              alt="..."
              className="rounded-circle"
              width="150"
              style={{ boxShadow: "0 8px 20px -4px #95abbb" }}
            />
            <div className="mt-4">
              <h4>{loggedInUser.username}</h4>
              <p className="text-secondary mb-3">{loggedInUser.email}</p>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <Button
                as={Link}
                to="/dashboard/update-profile"
                variant="secondary"
                className="main-button me-4"
              >
                Profile Update
              </Button>
              <Button
                onClick={signOut}
                variant="secondary"
                className="main-button"
              >
                Log Out
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
