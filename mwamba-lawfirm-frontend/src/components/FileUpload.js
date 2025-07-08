import React, { useState, useRef } from 'react';
import './FileUpload.css';

function FileUpload({ label, onFileSelect }) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="file-upload-container">
      {label && <label className="file-upload-label">{label}</label>}

      <div
        className={`file-upload-dropzone ${dragActive ? 'active' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          type="file"
          ref={inputRef}
          className="file-upload-input"
          onChange={handleChange}
          hidden
        />
        {fileName ? (
          <p className="file-upload-filename">{fileName}</p>
        ) : (
          <p className="file-upload-text">
            Drag & drop a file here, or click to select a file
          </p>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
