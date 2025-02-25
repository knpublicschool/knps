import React from 'react';
import { Link } from 'react-router-dom';

const GuidelineAndCounseling = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-sm rounded-lg">
        <div className="card-body">
          <h1 className="display-5 fw-bold text-primary text-center mb-4">Guidelines and Counseling Services</h1>
          
          <p className="lead text-muted text-center mb-5">
            Explore various counseling services and guidelines available to students. We're here to help you succeed both academically and personally.
          </p>

          {/* Guidance Counseling Section */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 className="fw-bold">Guidance Counseling</h3>
              <p className="text-muted">
                Our professional counselors are here to assist students in planning their academic paths, selecting courses, and exploring future career opportunities.
              </p>
              <ul className="list-group">
                <li className="list-group-item">Help with academic planning and course selection</li>
                <li className="list-group-item">Guidance on post-graduation pathways (college, career, etc.)</li>
                <li className="list-group-item">Counseling for academic difficulties and personal challenges</li>
              </ul>
              <Link to="/students/guidance-counseling" className="btn btn-primary mt-3">Learn More</Link>
            </div>

            {/* Career Counseling Section */}
            <div className="col-md-6 mb-4">
              <h3 className="fw-bold">Career Counseling</h3>
              <p className="text-muted">
                Our career counselors assist students in exploring various career paths, internships, and job opportunities. They help in building resumes, preparing for interviews, and setting career goals.
              </p>
              <ul className="list-group">
                <li className="list-group-item">Career path exploration</li>
                <li className="list-group-item">Internship and job opportunity guidance</li>
                <li className="list-group-item">Resume building and interview preparation</li>
              </ul>
              <Link to="/students/career-counseling" className="btn btn-primary mt-3">Learn More</Link>
            </div>
          </div>

          {/* Personal Support Section */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 className="fw-bold">Personal Support</h3>
              <p className="text-muted">
                Personal counseling services are available for students dealing with personal issues, stress, anxiety, or mental health challenges. Our counselors are ready to listen and offer support.
              </p>
              <ul className="list-group">
                <li className="list-group-item">Mental health support and stress management</li>
                <li className="list-group-item">Coping strategies for anxiety, depression, and personal challenges</li>
                <li className="list-group-item">Confidential and compassionate counseling services</li>
              </ul>
              <Link to="/students/personal-counseling" className="btn btn-primary mt-3">Learn More</Link>
            </div>

            {/* Peer Support and Resources Section */}
            <div className="col-md-6 mb-4">
              <h3 className="fw-bold">Peer Support and Resources</h3>
              <p className="text-muted">
                Join student-led support groups and access resources that can help you connect with peers and get involved in the school community.
              </p>
              <ul className="list-group">
                <li className="list-group-item">Peer counseling programs and student clubs</li>
                <li className="list-group-item">Workshops on mental health, stress relief, and personal development</li>
                <li className="list-group-item">Access to various school resources like wellness programs</li>
              </ul>
              <Link to="/students/peer-support" className="btn btn-primary mt-3">Learn More</Link>
            </div>
          </div>

          <div className="text-center">
          <Link to="/" className="mt-4"><Button display={"Go to Home"}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelineAndCounseling;
