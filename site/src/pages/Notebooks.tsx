import React from 'react'

const notebooks = [
  'bayes_model.ipynb',
  'clustering.ipynb',
  'college_groups.ipynb',
  'data_cleaning.ipynb',
  'regression.ipynb',
  'xgboost.ipynb',
  'xgboost copy.ipynb',
]

const GITHUB_BASE = 'https://github.com/jpatrickb/football-to-admissions/blob/main'

export default function Notebooks() {
  return (
    <div className="container">
      <h1>Notebooks</h1>
      <p>Selected analysis notebooks from this repository:</p>
      <ul>
        {notebooks.map((nb) => (
          <li key={nb}>
            <a href={`${GITHUB_BASE}/${encodeURIComponent(nb)}`} target="_blank" rel="noreferrer">
              <code>{nb}</code>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

