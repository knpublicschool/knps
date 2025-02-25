import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Students extends Component {
  colors = {
    primary: {
      light: '#4A90E2', // Soft blue
    },
    neutral: {
      medium: '#A0AEC0', // Medium gray
    },
  };

  render() {
    return (
      <div className="container-fluid py-2">
        <div className="card shadow-sm rounded-lg">
          <div className="card-body">
            <section id="students">
              <div className="text-center mb-5">
                <h1 className="display-5 fw-bold text-primary">Welcome Students!</h1>
                <p className="lead text-muted">Explore resources and opportunities to enhance your learning experience.</p>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <h3 className="fw-bold text-primary">Student Resources</h3>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <Link to="/students/resource" className="text-decoration-none text-primary">Academic Resources</Link>
                      <img src="openlink.svg" alt="Open Link" className="ml-2" />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <Link to="/students/library" className="text-decoration-none text-primary">Library Access</Link>
                      <img src="openlink.svg" alt="Open Link" className="ml-2" />
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 mb-4">
                  <h3 className="fw-bold">Extracurricular Activities</h3>
                  <ul className="list-group">
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                      <Link to="#clubs" className="text-decoration-none text-primary">Clubs and Organizations</Link>
                      <img src="openlink.svg" alt="Open Link" className="ml-2" />
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <Link to="/students/events" className="text-decoration-none text-primary">Upcoming Events</Link>
                      <img src="openlink.svg" alt="Open Link" className="ml-2" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <h3 className="fw-bold">Counseling and Support</h3>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <Link to="/students/guidelinesandcounseling" className="text-decoration-none text-primary">Guidance Counseling</Link>
                      <img src="openlink.svg" alt="Open Link" className="ml-2" />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <Link to="/students/support" className="text-decoration-none text-primary">Support Services</Link>
                      <img src="openlink.svg" alt="Open Link" className="ml-2" />
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 mb-4">
                  <h3 className="fw-bold">Important Announcements</h3>
                  <ul className="list-group">
                    <li className="list-group-item">Check out the latest updates on exams and events!</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <h3 className="fw-bold">Student Achievements</h3>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <Link to="/students/achievements" className='text-decoration-none'>Check our Brilliant Brains</Link>
                      <img src="openlink.svg" alt="Open Link" className="ml-2" />
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 mb-4">
                  <h3 className="fw-bold">Policies and Guidelines</h3>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <Link to="/students/policies" className='text-decoration-none'>Understand our school policies to ensure a positive learning environment.</Link>
                      <img src="openlink.svg" alt="Open Link" className="ml-2" />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
