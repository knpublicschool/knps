import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-6 fw-bold">Student Support Services</h1>
        <p className="lead text-muted">We are here to support you in every step of your academic journey.</p>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Counseling Services</h5>
              <p className="card-text">Our counselors are available to provide emotional support and guidance on personal and academic issues.</p>
              <Link to="/support/counseling" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Academic Support</h5>
              <p className="card-text">Get help with study skills, time management, and academic planning to succeed in your courses.</p>
              <Link to="/support/academic" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Health Services</h5>
              <p className="card-text">Access healthcare services, including medical consultations and mental health support.</p>
              <Link to="/support/health" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Financial Aid</h5>
              <p className="card-text">Learn about financial aid options and scholarships available to support your education.</p>
              <Link to="/support/financial-aid" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Career Services</h5>
              <p className="card-text">Get assistance with career planning, job searches, and internship opportunities.</p>
              <Link to="/support/career" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Disability Support</h5>
              <p className="card-text">We provide accommodations and support services for students with disabilities.</p>
              <Link to="/support/disability" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Technical Support</h5>
              <p className="card-text">Get help with technical issues related to school software, hardware, and online learning platforms.</p>
              <Link to="/support/technical" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">International Student Support</h5>
              <p className="card-text">Support services tailored for international students to help them adjust and thrive in a new environment.</p>
              <Link to="/support/international" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Student Life</h5>
              <p className="card-text">Engage in extracurricular activities, clubs, and events to enrich your student experience.</p>
              <Link to="/support/student-life" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
