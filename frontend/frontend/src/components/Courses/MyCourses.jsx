import React from 'react';
import CourseCard from './CourseCard';

const MyCourses = () => {
  const courses = [
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React.' },
    { id: 2, title: 'Advanced CSS', description: 'Master CSS for modern web development.' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map(course => (
        <CourseCard key={course.id} title={course.title} description={course.description} />
      ))}
    </div>
  );
};

export default MyCourses;
