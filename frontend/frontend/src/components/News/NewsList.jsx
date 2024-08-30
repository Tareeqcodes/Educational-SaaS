import React from 'react';
import NewsArticle from './NewsArticle';

const NewsList = () => {
  const news = [
    { id: 1, title: 'Campus Event', description: 'Event happening this weekend.' },
    { id: 2, title: 'New Course Available', description: 'New programming course now available.' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {news.map(article => (
        <NewsArticle key={article.id} title={article.title} description={article.description} />
      ))}
    </div>
  );
};

export default NewsList;
