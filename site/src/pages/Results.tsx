import React from 'react'

const images = [
  'Plots__UGDS_WHITE_interaction.png',
  'Plots__UGDS_HISP_interaction.png',
  'Plots__UGDS_ASIAN_interaction.png',
  'Plots__UGDS_BLACK_interaction.png',
  'Plots__UGDS_MEN_interaction.png',
  'Plots__UGDS_WOMEN_interaction.png',
  'UGDS_BLACK_interaction.png',
  'UGDS_HISP_interaction.png',
  'pair_plots.png',
]

export default function Results() {
  return (
    <div className="container">
      <h1>Figure Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {images.map((img) => (
          <div key={img} className="card">
            <img
              src={`/football-to-admissions/assets/img/${img}`}
              alt={img.replace(/_/g, ' ').replace(/\.png$/, '')}
              style={{ width: '100%', maxHeight: 280, objectFit: 'contain', borderRadius: 8 }}
            />
            <div style={{ marginTop: 8, opacity: 0.8, fontSize: 12 }}>{img}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

