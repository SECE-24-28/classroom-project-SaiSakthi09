import React from 'react'
import './Gallery.css'

const Gallery = () => {
  const images = [1, 2, 3, 4, 5, 6]

  return (
    <main className="gallery">
      <h2>Gallery</h2>
      <div className="grid">
        {images.map((i) => (
          <div key={i} className="tile">Image {i}</div>
        ))}
      </div>
    </main>
  )
}

export default Gallery