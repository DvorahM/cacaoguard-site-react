import { useState } from 'react';
import { Link } from 'react-router-dom';
import FarmerLayout from '../../components/FarmerLayout';
import Icon from '../../components/Icon';

const scans = [
  {
    id: 1,
    when: 'Oct 24, 09:12 AM',
    waypoint: 'Waypoint 3',
    severity: 'moderate',
    pill: 'orange',
    label: 'Moderate Outbreak',
    confidence: 91,
    area: '1.1 ha',
  },
  {
    id: 2,
    when: 'Oct 24, 08:44 AM',
    waypoint: 'Waypoint 1',
    severity: 'healthy',
    pill: 'green',
    label: 'Healthy Canopy',
    confidence: 98,
    area: '0.0 ha',
  },
  {
    id: 3,
    when: 'Oct 23, 14:05 PM',
    waypoint: 'Waypoint 2',
    severity: 'mild',
    pill: 'lime',
    label: 'Mild Spots',
    confidence: 94,
    area: '0.2 ha',
  },
  {
    id: 4,
    when: 'Oct 22, 11:44 AM',
    waypoint: 'Waypoint 5',
    severity: 'moderate',
    pill: 'orange',
    label: 'Moderate Outbreak',
    confidence: 88,
    area: '0.8 ha',
  },
  {
    id: 5,
    when: 'Oct 20, 08:30 AM',
    waypoint: 'Waypoint 1',
    severity: 'healthy',
    pill: 'green',
    label: 'Healthy Canopy',
    confidence: 99,
    area: '0.0 ha',
  },
];

export default function FarmerScanHistory() {
  const [severity, setSeverity] = useState('all');
  const count = (s) => scans.filter((r) => r.severity === s).length;
  const counts = {
    healthy: count('healthy'),
    mild: count('mild'),
    moderate: count('moderate'),
    severe: count('severe'),
  };
  const visible = scans.filter((r) => severity === 'all' || r.severity === severity);
  return (
    <FarmerLayout active="scans" title="Scan History">
      <div className="head">
        <div>
          <h1>Scan History & UAV Diagnostics</h1>
          <p className="sub">
            Search, filter, and review historical diagnostic datasets captured by autonomous agricultural
            drone flights
          </p>
        </div>
        <div className="head-r"></div>
      </div>
      <div className="card filt mb">
        <Icon name="search" size={18} />
        <b>Filter Diagnostic Runs:</b>
        <select
          className="sel"
          aria-label="Severity"
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option value="all">Severity: All Statuses</option>
          <option value="healthy">Healthy</option>
          <option value="mild">Mild</option>
          <option value="moderate">Moderate</option>
        </select>
        <select className="sel" aria-label="Farm">
          <option>Farm: Initao Cacao Farm</option>
        </select>
      </div>
      <div className="cols c-4 mb">
        <div className="card kpi">
          <div className="kl">
            HEALTHY RUNS <i className="dot" style={{ background: '#1F9D55' }}></i>
          </div>
          <div className="kv">{counts.healthy}</div>
        </div>
        <div className="card kpi">
          <div className="kl">
            MILD RUNS <i className="dot" style={{ background: '#7FB43E' }}></i>
          </div>
          <div className="kv">{counts.mild}</div>
        </div>
        <div className="card kpi">
          <div className="kl">
            MODERATE RUNS <i className="dot" style={{ background: '#E07B1F' }}></i>
          </div>
          <div className="kv">{counts.moderate}</div>
        </div>
        <div className="card kpi">
          <div className="kl">
            SEVERE OUTBREAKS <i className="dot" style={{ background: '#D64545' }}></i>
          </div>
          <div className="kv">{counts.severe}</div>
        </div>
      </div>
      <section className="card">
        <h2>Completed UAV Diagnostics Runs</h2>
        <div className="scroll">
          <table className="tbl">
            <thead>
              <tr>
                <th>Date / Time</th>
                <th>Farm Name</th>
                <th>Waypoint</th>
                <th>Diagnosis Severity</th>
                <th>AI Confidence</th>
                <th>Affected Area</th>
                <th className="r">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((r) => (
                <tr key={r.id}>
                  <td className="mut">{r.when}</td>
                  <td>
                    <b>Initao Cacao Farm</b>
                  </td>
                  <td>
                    <b>{r.waypoint}</b>
                  </td>
                  <td>
                    <span className={`pill ${r.pill}`}>{r.label}</span>
                  </td>
                  <td>
                    <div className="cf g">
                      <i style={{ '--w': `${r.confidence}%`, '--c': '#1F9D55' }}></i>
                      <span>{r.confidence}% AI</span>
                    </div>
                  </td>
                  <td>{r.area}</td>
                  <td className="r">
                    <Link className="lk" to="/farmer/my-farm">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </FarmerLayout>
  );
}
