import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Preview.css';

const Preview = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [relatedImages, setRelatedImages] = useState([]);

  // Fetch selected image details
  useEffect(() => {
    axios
      .get(`https://pixabay.com/api/?key=48545552-fc9a15f1c0e7ed54aeba440c7&id=${id}`)
      .then((res) => {
        if (res.data.hits.length > 0) {
          setImage(res.data.hits[0]);
        }
      })
      .catch((error) => console.error("Error fetching image:", error));

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Fetch related images based on image tags
  useEffect(() => {
    if (image && image.tags) {
      axios
        .get(`https://pixabay.com/api/?key=48545552-fc9a15f1c0e7ed54aeba440c7&q=${image.tags}&per_page=15`)
        .then((res) => {
          setRelatedImages(res.data.hits);
        })
        .catch((error) => console.error("Error fetching related images:", error));
    }
  }, [image]); // Runs when `image` updates

  return (
    <div className="preview-container">
      {image ? (
        <div className="preview-content">
          <div className="selected-image">
            <img src={image.largeImageURL} alt="Selected" className="main-image" />
          </div>
          <h3 className="related-title">Related Images</h3>
          <div className="related-images">
            {relatedImages.map((item) => (
              <div key={item.id} className="related-card">
                <Link to={`/Preview/${item.id}`} className="related-link">
                  <img src={item.webformatURL} alt={item.tags} className="related-image" />
                  <p className="related-tags">{item.tags.split(',').slice(0, 4).join(', ')}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="loading-text">Loading...</p>
      )}
    </div>
  );
};

export default Preview;
