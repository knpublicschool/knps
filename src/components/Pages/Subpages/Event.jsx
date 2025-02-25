import React from 'react';
import { Link } from 'react-router-dom';

const Event = () => {
  // Sample events data (you can replace this with real data)
  const events = [
    {
      title: 'Annual Sports Day',
      date: 'March 10, 2025',
      description: 'Join us for an exciting day of sports and team spirit!',
      link: '/events/sports-day'
    },
    {
      title: 'Science Fair',
      date: 'March 20, 2025',
      description: 'Explore amazing science projects and experiments created by students.',
      link: '/events/science-fair'
    },
    {
      title: 'Art Exhibition',
      date: 'April 5, 2025',
      description: 'Come and view the fantastic artwork by our talented students.',
      link: '/events/art-exhibition'
    },
    {
      title: 'School Talent Show',
      date: 'April 15, 2025',
      description: 'A showcase of the best talent in our school community.',
      link: '/events/talent-show'
    },
  ];

  return (
    <div className="container py-5">
      <div className="card shadow-sm rounded-lg">
        <div className="card-body">
          <h1 className="display-5 fw-bold text-primary text-center mb-4">Upcoming Events</h1>
          
          <p className="lead text-muted text-center mb-5">
            Stay updated with the latest events and activities happening at our school.
          </p>

          {/* Loop through events */}
          <div className="row">
            {events.map((event, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h3 className="fw-bold">{event.title}</h3>
                    <p className="text-muted">{event.date}</p>
                    <p>{event.description}</p>
                    <Link to={event.link} className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
          <Link to="/" className="mt-4"><Button display={"Go to Home"}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
