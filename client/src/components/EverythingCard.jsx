import React from 'react';

function EverythingCard({ title, description, imgUrl, publishedAt, url, author, source }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="everything-card-link"
    >
      <div className="everything-card">
        <div className="everything-card-img">
          <img
            src={imgUrl || "https://via.placeholder.com/400x200?text=No+Image"}
            alt={title}
          />
        </div>

        <h3 className="title">{title || "Untitled"}</h3>
        <p className="description-text">
          {description || "No description available."}
        </p>

        <div className="info">
          <span>
            <strong>Published:</strong> {new Date(publishedAt).toLocaleDateString()}
          </span>
          {author && (
            <span>
              <strong>Author:</strong> {author}
            </span>
          )}
          {source && (
            <span className="source-info">
              <strong>Source:</strong> {source}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

export default EverythingCard;
