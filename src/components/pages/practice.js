// the following code was written almost entirely by chatgpt... thanks!

import React, { useState } from 'react';

import image1 from "../../resources/image1.jpg";
import image2 from "../../resources/image2.jpg";
import image3 from "../../resources/image3.jpg";
import image4 from "../../resources/image4.jpg";

// Sample data for gallery
const photoData = [
  { 
    id: 1, 
    src: image1, 
    title: 'Photo 1',
    description: 'This is a description of Photo 1. It provides more details about the image.',
  },
  { 
    id: 2, 
    src: image2, 
    title: 'Photo 2',
    description: 'This is a description of Photo 2. It provides more details about the image.',
  },
  { 
    id: 3, 
    src: image3, 
    title: 'Photo 3',
    description: 'This is a description of Photo 3. It provides more details about the image.',
  },
  { 
    id: 4, 
    src: image4, 
    title: 'Photo 4',
    description: 'This is a description of Photo 4. It provides more details about the image.',
  },

];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div style={styles.container}>
      {/* Title and Introduction */}
      <div style={styles.header}>
        <h1>My Photo Gallery</h1>
        <p>Welcome to my photo gallery! Click on any image to learn more about it.</p>
      </div>

      {/* Photo Gallery Grid */}
      <div style={styles.gallery}>
        {photoData.map((photo) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.title}
            style={styles.thumbnail}
            onClick={() => handlePhotoClick(photo)}
          />
        ))}
      </div>

      {/* Modal for Selected Photo */}
      {selectedPhoto && (
        <div style={styles.modalOverlay} onClick={handleClose}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span style={styles.closeButton} onClick={handleClose}>&times;</span>
            <div style={styles.modalBody}>
              <img src={selectedPhoto.src} alt={selectedPhoto.title} style={styles.largeImage} />
              <div style={styles.description}>
                <h2>{selectedPhoto.title}</h2>
                <p>{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  gallery: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  thumbnail: {
    maxWidth: '300px', // Updated max width for thumbnail
    maxHeight: '300px', // Updated max height for thumbnail
    margin: '10px',
    cursor: 'pointer',
    objectFit: 'contain',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  modalBody: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  largeImage: {
    maxWidth: '50%',
    maxHeight: '80vh',
    width: 'auto',
    height: 'auto',
    marginRight: '20px',
    objectFit: 'contain',
  },
  description: {
    maxWidth: '40%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer',
  },
};

export default PhotoGallery;
