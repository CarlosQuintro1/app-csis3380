import React, { useEffect, useState } from 'react';
import Grid from './Grid'

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=5553426a11b747cc9d71dd5615263132')
      .then(response => response.json())
      .then(data => {
        setNews(data.articles);
      });
  }, []);

  return (
    <div className="container">
      <div className="sidebar-container">
        <div className="sidebar">
          <h2 className="sidebar-title">Financial News</h2>
          {news.slice(0, 7).map(article => (
            <div key={article.title} className="sidebar-article">
              <h3 className="sidebar-article-title">{article.title}</h3>
              <p className="sidebar-article-description">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="main-content">
        <Grid/>
      </div>
    </div>
  );
}

export default News;