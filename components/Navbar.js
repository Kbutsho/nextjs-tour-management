import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    return (
        <div style={{ margin: "60px 0" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
                <div className="container">
                    <Link href="/"><span className="nav-item fw-bold text-white text-uppercase nav-link">Next.JS Application</span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link href="/"><span role="button" className="nav-item text-white fw-bold text-uppercase nav-link ms-3">Home</span></Link>
                            <Link href="/tour"><span role="button" className="nav-item text-white  fw-bold text-uppercase nav-link ms-3">Tour</span></Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;