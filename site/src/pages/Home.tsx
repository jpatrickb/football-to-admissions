import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <div className="card" style={{ marginBottom: 16 }}>
        <h1 style={{ marginTop: 0 }}>Football Performance and Admissions</h1>
        <p>
          This project  contains a findings-first summary of how NCAA football performance relates to university admissions outcomes
          (winning presentation of the 2025 BYU Statistics Case Competition).
        </p>
      </div>

      <div className="panel" style={{ padding: 18, marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>TL;DR</h2>
        <ul>
          <li>Higher win rates are often associated with increased enrollment over time (applicant data are limited).</li>
          <li>Diversity: higher win rates correlate with higher proportions of white students, lower proportions of Hispanic and Asian students; effects on Black student proportion are generally small.</li>
          <li>Cost clusters: effects are minimal in high-cost institutions; more pronounced in low- and mid-cost clusters.</li>
          <li>“Caliber” proxies (ACT/SAT, retention, completion) are mixed/inconclusive overall.</li>
          <li>Causality caution: interpret as associations; reverse causality is plausible.</li>
        </ul>
      </div>

      <div className="panel" style={{ padding: 18 }}>
        <h2 style={{ marginTop: 0 }}>Navigate</h2>
        <ul>
          <li><a href="#/methodology">Methodology</a></li>
          <li><a href="#/findings">Findings</a></li>
          <li><a href="#/results">Results (Figures)</a></li>
          <li><a href="#/notebooks">Notebooks</a></li>
          <li><a href="#/authors">Authors</a></li>
        </ul>
      </div>
    </div>
  )
}

