import React from "react";
import "./../style/header.css";
import Logo from "./../assets/images/logo1.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

function Header() {
  return (
    <div className="header_outer">
      <div className="header_inner">
        <div className="header_left">
          <ul>
            <li>
              <img src={Logo} alt="Netflix Logo" />{" "}
            </li>
            <li> Netflix</li>
            <li> TV Shows</li>
            <li> Movies</li>
            <li> New & Popular</li>
            <li> My List</li>
            <li> Latest</li>
            <li> Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>

            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountCircleIcon />
            </li>
            <li>
              <ArrowDropDownCircleIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
