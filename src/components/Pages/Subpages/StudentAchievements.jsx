import React from 'react';

const StudentAchievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Science Fair Winner",
      description: "John Doe won first place in the regional science fair with his innovative project on renewable energy.",
    },
    {
      id: 2,
      title: "Math Olympiad Champion",
      description: "Jane Smith secured the top position in the national math olympiad, showcasing her exceptional problem-solving skills.",
    },
    {
      id: 3,
      title: "Art Exhibition",
      description: "Emily Johnson's artwork was featured in a prestigious art exhibition, highlighting her creativity and talent.",
    },
    // Add more achievements as needed
  ];

  const brilliantBrains = [
    {
      id: 1,
      name: "Alice Brown",
      achievement: "Published a research paper on quantum physics at the age of 16.",
    },
    {
      id: 2,
      name: "Michael Green",
      achievement: "Developed an award-winning mobile app that promotes mental health awareness.",
    },
    {
      id: 3,
      name: "Sophia White",
      achievement: "Received a full scholarship to a top university for her academic excellence.",
    },
    // Add more brilliant brains as needed
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-6 fw-bold">Student Achievements</h1>
        <p className="lead text-muted">Celebrating the accomplishments and brilliance of our students.</p>
      </div>

      <div className="row mb-5">
        <div className="col">
          <h2 className="fw-bold mb-4">Recent Achievements</h2>
          {achievements.map((achievement) => (
            <div key={achievement.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{achievement.title}</h5>
                <p className="card-text">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="fw-bold mb-4">Brilliant Brains of Our School</h2>
          {brilliantBrains.map((brain) => (
            <div key={brain.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{brain.name}</h5>
                <p className="card-text">{brain.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentAchievements;