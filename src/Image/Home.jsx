import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ search, page, setPage }) => {
  const [Data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://pixabay.com/api/?key=48545552-fc9a15f1c0e7ed54aeba440c7&q=${search}&page=${page}&per_page=15`)
      .then((res) => {
        setData(res.data.hits);
        setTotalPage(Math.ceil(res.data.totalHits / 15));
      });
  }, [search, page]);

  const Previous = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const Next = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="home-container">
      <div className="image-grid">
        {Data.map((item, index) => (
          <div key={index} className="image-card">
            <Link to={`/Preview/${item.id}`} className="image-link">
              <img src={item.webformatURL} alt="Preview" className="image" height={item.webformatHeight}/>
              <p className="tags">{item.tags.split(',').splice(0, 4).join(', ')}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={Previous} disabled={page === 1} className="btn">Previous</button>
        <span className="page-info">{page}/{totalPage}</span>
        <button onClick={Next} disabled={page === totalPage} className="btn">Next</button>
      </div>
    </div>
  );
};

export default Home;
