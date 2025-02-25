import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Utils/Button';

const Policies = () => {
  return (
    <div className="container py-3">
      <div className="card shadow-sm rounded-lg">
        <div className="card-body">
          <h1 className="display-5 fw-bold text-primary text-center mb-4">Policies and Guidelines</h1>
          
          <p className="lead text-muted text-center mb-5">Understand our school policies to ensure a positive and productive learning environment.</p>

          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 className="fw-bold text-info">General Rules</h3>
              <ul className="list-group">
                <li className="list-group-item">Respect for teachers and staff members is a core value.</li>
                <li className="list-group-item">Students should arrive on time and be prepared for class.</li>
                <li className="list-group-item">Disruptive behavior in class is not allowed.</li>
                <li className="list-group-item">Cell phones must be turned off or in silent mode during class hours.</li>
              </ul>
            </div>

            <div className="col-md-6 mb-4">
              <h3 className="fw-bold text-warning">Behavior Guidelines</h3>
              <ul className="list-group">
                <li className="list-group-item">Maintain a positive attitude and foster a respectful environment.</li>
                <li className="list-group-item">No bullying or harassment of any kind will be tolerated.</li>
                <li className="list-group-item">Follow school dress code and personal grooming standards.</li>
                <li className="list-group-item">Use appropriate language and show respect for others at all times.</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 className="fw-bold text-success">Academic Integrity</h3>
              <ul className="list-group">
                <li className="list-group-item">Cheating, plagiarism, or dishonesty in any form will result in disciplinary action.</li>
                <li className="list-group-item">Students must complete assignments independently unless stated otherwise by the teacher.</li>
              </ul>
            </div>

            <div className="col-md-6 mb-4">
              <h3 className="fw-bold text-danger">Attendance Policies</h3>
              <ul className="list-group">
                <li className="list-group-item">Students are expected to attend all classes unless excused by a teacher or administrator.</li>
                <li className="list-group-item">Excessive absences may result in academic penalties or loss of privileges.</li>
                <li className="list-group-item">All absences should be reported to the school office.</li>
              </ul>
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

export default Policies;
