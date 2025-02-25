import React from 'react'
import { Link } from 'react-router-dom';

function Library() {
    return (
        <>
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="display-6 fw-bold">Library Access</h1>
                    <p className="lead text-muted">Explore our library resources to support your academic journey.</p>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Online Catalog</h5>
                                <p className="card-text">Search our extensive collection of books, e-books, and other resources.</p>
                                <a href="#online-catalog" className="btn btn-primary">Browse Catalog</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">E-Books</h5>
                                <p className="card-text">Access a wide range of e-books available for download or online reading.</p>
                                <a href="#e-books" className="btn btn-primary">Read E-Books</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Research Databases</h5>
                                <p className="card-text">Explore academic databases for research articles, journals, and more.</p>
                                <a href="#research-databases" className="btn btn-primary">Access Databases</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Library Hours</h5>
                                <p className="card-text">Check the library's operating hours and plan your visit accordingly.</p>
                                <Link to="/students/library-hours" className="btn btn-primary">View Hours</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Library Services</h5>
                                <p className="card-text">Learn about the various services offered by the library, including printing and study spaces.</p>
                                <Link to="/students/library-services" className="btn btn-primary">Explore Services</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Contact Us</h5>
                                <p className="card-text">Get in touch with our librarians for assistance with your research or library needs.</p>
                                <Link to="/students/contact-library" className="btn btn-primary">Contact Library</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>)
}

export default Library;