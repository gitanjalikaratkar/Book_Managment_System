import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="./" className="navbar-brand" >
                        <img src="book-logo.png" alt="Logo" />
                        <h1 className='heading'>Book Management System</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link to="./" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">About Us</a> */}
                                <Link to="./AboutUs" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Contact</a> */}
                                <Link to="./Contact" className="nav-link">Contact</Link>

                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Supplier</a> */}
                                <Link to="./Supplier" className="nav-link">Supplier</Link>

                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Categories</a> */}
                                <Link to="./Categories" className="nav-link">Categories</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar