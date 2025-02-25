import React from 'react'
import { Link } from 'react-router-dom';

function AcademicResource(){
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-6 fw-bold">Academic Resources</h1>
        <p className="lead text-muted">Explore a variety of academic resources to support your learning journey.</p>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Study Guides</h5>
              <p className="card-text">Access comprehensive study guides for various subjects to help you prepare for exams.</p>
              <Link to="/students/study-guides" className="btn btn-primary">View Guides</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Research Papers</h5>
              <p className="card-text">Explore a collection of research papers to deepen your understanding of various topics.</p>
              <Link to="/students/research-papers" className="btn btn-primary">Read Papers</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Online Courses</h5>
              <p className="card-text">Enroll in online courses to learn new skills and enhance your knowledge.</p>
              <Link to="/students/online-courses" className="btn btn-primary">Browse Courses</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Academic Calendar</h5>
              <p className="card-text">Stay updated with important academic dates and deadlines.</p>
              <Link to="/students/academic-calendar" className="btn btn-primary">View Calendar</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Library Resources</h5>
              <p className="card-text">Access a wide range of books, journals, and other library resources.</p>
              <Link to="/students/library-resources" className="btn btn-primary">Explore Library</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Tutoring Services</h5>
              <p className="card-text">Get personalized help from tutors in various subjects.</p>
              <Link to="/students/tutoring-services" className="btn btn-primary">Find a Tutor</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicResource;