import React from "react";
import PropTypes from "prop-types";


export const Footer = (props) => {
	return (
		<div className="text-center">
      <div className="container-fluid">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href={props.logoHref} target="_blank" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <img src={props.logoURL} alt="Logo" width="35" height="35" className="d-inline-block align-text-top"/>
            </a>
            <span className="mb-3 mb-md-0 text-muted">© 2022 {props.logoTitle}</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" target="_blank" href={props.githubURL}><i className="fab fa-2x fa-github"></i></a></li>
            <li className="ms-3"><a className="text-muted" target="_blank" href={props.linkedinURL}><i className="fab fa-2x fa-linkedin"></i></a></li>
            <li className="ms-3"><a className="text-muted" target="_blank" href={props.stackoverflowURL}><i className="fab fa-2x fa-stack-overflow"></i></a></li>
          </ul>
        </footer>
      </div>
		</div>
	);
};


Footer.propTypes = {
  logoHref: PropTypes.string, 
  logoURL: PropTypes.string,
  logAlt: PropTypes.string,
  logoTitle: PropTypes.string,
  githubURL: PropTypes.string,
  linkedinURL: PropTypes.string,
  stackoverflowURL: PropTypes.string,
};


Footer.defaultProps = {
  logoHref: "https://chocobar.net/",
  logoURL: "https://chocobar.net/hcht",
  logAlt: "Hector Chocobar-Torrejon",
  logoTitle: "Hector Chocobar-Torrejon",
  githubURL: "https://github.com/hchocobar/",
  linkedinURL: "https://www.linkedin.com/in/hector-chocobar/",
  stackoverflowURL: "https://stackoverflow.com/users/18981955/hector-chocobar-torrejon",
};
