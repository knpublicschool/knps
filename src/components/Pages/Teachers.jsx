import React, { Component } from 'react';
import Card from './Profile/Card';
import "./Teacher.css";

export default class Teachers extends Component {
  render() {
    const teachers = [
      {
        id: 1,
        name: 'Ms. Smith',
        job: 'Mathematics Teacher',
        description: 'Mathematics Teacher with over 10 years of experience.'
      },
      {
        id: 2,
        name: 'Mr. Johnson',
        job: 'Science Teacher',
        description: 'Science Teacher with a passion for physics.'
      },
      {
        id: 3,
        name: 'Dr. Lee',
        job: 'History Teacher',
        description: 'History Teacher specializing in ancient civilizations.'
      },
      {
        id: 4,
        name: 'Mrs. Brown',
        job: 'English Teacher',
        description: 'English Teacher with a focus on literature and creative writing.'
      },
      {
        id: 5,
        name: 'Mr. Davis',
        job: 'Physical Education Teacher',
        description: 'Physical Education Teacher promoting health and fitness.'
      },
      {
        id: 6,
        name: 'Ms. Wilson',
        job: 'Art Teacher',
        description: 'Art Teacher inspiring creativity and self-expression.'
      }
    ];

    return (
      <div className='container my-3 mb-3'>
        <h1 className='display-3 text-center text-warning rounded fw-bold'>Our Teachers</h1>
        <p className='lead text-center mt-3'>
          KN Public School boasts a team of teachers who are not only highly qualified but also extensively trained, positioning them as particularly suitable for academic environments.
        </p>
        <div className='d-flex justify-content-center'>

        
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
          {teachers.map((teacher) => (
            <div key={teacher.id} className='col'>
              <div className='card h-100 shadow-sm'>
                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                  <Card name={teacher.name} job={teacher.job} />
                  <p className='card-text mt-3 text-center'>{teacher.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  }
}