import React, { useContext }  from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = (props) => {
  const { actions, store} = useContext(Context);

	return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={props.logoURL} alt={props.logoAlt} width="35" height="35" className="d-inline-block align-text-top"/>
            <span className="p-2">{props.logoTitle}</span>
          </Link>
			<div className="ml-auto">
        {store.isLoggedIn ?
          <Link to="/login">
            <button onClick={() => actions.logout()} className="btn btn-outline-primary btn-sm">Logout</button>
          </Link>
        :
          <Link to="/dashboard">
            <button className="btn btn-outline-primary btn-sm">Login</button>
          </Link>
        }
			</div>
        </div>
      </nav>
	);
};


Navbar.propTypes = {
  logoHref: PropTypes.string, 
  logoURL: PropTypes.string,
  logAlt: PropTypes.string,
  logoTitle: PropTypes.string,
  item1URL: PropTypes.string,
  item1Text: PropTypes.string,
  item2URL: PropTypes.string,
  item2Text: PropTypes.string,
  item3URL: PropTypes.string,
  item3Text: PropTypes.string,
};


Navbar.defaultProps = {
  logoHref: "https://chocobar.net/",
  logoURL: "https://chocobar.net/hcht-uk",
  logAlt: "Hector Chocobar-Torrejon",
  logoTitle: "Hector Chocobar-Torrejon",
  item1URL: "#",
  item1Text: "Home",
  item2URL: "#",
  item2Text: "Link",
  item3URL: "#",
  item3Text: "Blog",
};

/* export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
 */