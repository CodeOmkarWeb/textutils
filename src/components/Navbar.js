import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom";
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">{props.cname}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                        </div>
                    </div>
                <div className={`container`} >
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark' ? 'Light' : 'Dark'} Mode</label>
                    </div>
                </div>
                </div>

            </nav>

        </>
    )
}


Navbar.propTypes = { cname: PropTypes.string, }
Navbar.defaultProps = {
    cname: "Company Name",
}