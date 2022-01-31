import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>


                    <div className="form-check form-switch">

                    <button type="button" onClick={props.toggleRed}  class="btn btn-outline-danger btn-sm mx-2">Red</button>
                    <button type="button" onClick={props.toggleGreen}  class="btn btn-outline-success btn-sm mx-2">Green</button>
                    <button type="button" onClick={props.toggleDark}  class="btn btn-outline-dark btn-sm mx-2">Black</button>

                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Set Theme</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
