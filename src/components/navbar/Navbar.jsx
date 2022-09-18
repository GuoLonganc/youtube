import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react";
import "./navbar.scss"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
  setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" 
                alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQHaVJMIHAwZZA/profile-displayphoto-shrink_800_800/0/1543646689752?e=1668643200&v=beta&t=YAkAhq4oZU4-DW4ERzIdNrcs3yWnRLEE3ix7LbytPyA" 
                    alt="" 
                />
                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
