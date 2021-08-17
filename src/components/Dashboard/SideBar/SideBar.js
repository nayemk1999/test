import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import { UserContext } from "../../../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersCog,
  faEdit,
  faHome,
  faTasks,
  faPlus,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./SideBar.css";
import { IconContext } from "react-icons";
const SideBar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [isAdmin, setAdmin] = useState(false);
  let { url } = useRouteMatch();

  useEffect(() => {
    fetch("https://toprakserver.herokuapp.com/admin/is-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAdmin(true));
  }, [loggedInUser.email]);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* Previous sidebar data */}

      {/* <ul className={styles.sideBarUl}>
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
            </ul> */}

      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidebar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "side-menu active" : "side-menu"}>
          <ul className="side-menu-items" onClick={showSidebar}>
            <li className="sidebar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            <li className="side-text">
              <Link to={`${url}/profile`}>
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
              </Link>
            </li>
            <li className="side-text">
              <Link to={`${url}/purchased-property`}>
                <FontAwesomeIcon icon={faUser} />

                <span>Purchased</span>
              </Link>
            </li>
            <li className="side-text">
              <Link to={`${url}/add-post`}>
                <FontAwesomeIcon icon={faPlus} />

                <span>Add Post</span>
              </Link>
            </li>
            {isAdmin ? (
              <>
                <li className="side-text">
                  <Link to={`${url}/manage-post`}>
                    <FontAwesomeIcon icon={faCog} />

                    <span>Manage Post</span>
                  </Link>
                </li>
                <li className="side-text">
                  <Link to={`${url}/add-admin`}>
                    <FontAwesomeIcon icon={faUsersCog} />

                    <span>Add Admin</span>
                  </Link>
                </li>
              </>
            ) : (
              <li className="side-text">
                <Link to={`${url}/review`}>
                  <FontAwesomeIcon icon={faUsersCog} />

                  <span>Review</span>
                </Link>
              </li>
            )}

            <li className="side-text">
              <Link to="/">
                <FontAwesomeIcon icon={faUsersCog} />

                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
