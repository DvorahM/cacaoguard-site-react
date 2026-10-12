import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

const reports = [
  {
    id: 1,
    waypoint: 'Waypoint 1',
    date: '2026-02-13',
    severity: 'defective',
    confidence: '87.5',
    color: '#7FB43E',
    area: 12,
  },
  {
    id: 2,
    waypoint: 'Waypoint 2',
    date: '2026-02-12',
    severity: 'defective',
    confidence: '94.2',
    color: '#D64545',
    area: 45,
  },
  {
    id: 3,
    waypoint: 'Waypoint 1',
    date: '2026-02-12',
    severity: 'defective',
    confidence: '78.3',
    color: '#E8A21A',
    area: 28,
  },
  {
    id: 4,
    waypoint: 'Waypoint 3',
    date: '2026-02-11',
    severity: 'healthy',
    confidence: '96.1',
    color: '#1F9D55',
    area: 0,
  },
  {
    id: 5,
    waypoint: 'Waypoint 1',
    date: '2026-02-11',
    severity: 'defective',
    confidence: '82.0',
    color: '#7FB43E',
    area: 8,
  },
];

export default function Reports() {
  const [severity, setSeverity] = useState('all');
  const healthyCount = reports.filter((r) => r.severity === 'healthy').length;
  const defectiveCount = reports.length - healthyCount;
  const visible = reports.filter((r) => severity === 'all' || r.severity === severity);
  return (
    <AdminLayout active="reports" title="Reports">
      <div className="head">
        <div>
          <h1>Reports</h1>
          <p className="sub">Disease detection reports & history</p>
        </div>
        <div className="head-r">
          <select
            className="sel"
            aria-label="Severity filter"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option value="all">All Severities</option>
            <option value="healthy">Healthy</option>
            <option value="defective">Defective</option>
          </select>
        </div>
      </div>
      <div className="cols c-2 mb">
        <div className="card ctr">
          <span className="pill green">HEALTHY</span>
          <div className="kv">{healthyCount}</div>
          <div className="ks">Scans</div>
        </div>
        <div className="card ctr">
          <span className="pill red">DEFECTIVE</span>
          <div className="kv">{defectiveCount}</div>
          <div className="ks">Scans</div>
        </div>
      </div>
      <section className="card">
        <div className="scroll">
          <table className="tbl">
            <thead>
              <tr>
                <th>Farm</th>
                <th>Waypoint</th>
                <th>Date</th>
                <th>Severity</th>
                <th>Confidence</th>
                <th className="r">Affected Area</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((r) => (
                <tr key={r.id}>
                  <td>
                    <b>Initao Cacao Farm</b>
                  </td>
                  <td className="mut">{r.waypoint}</td>
                  <td className="mut">{r.date}</td>
                  <td>
                    <span className={`pill ${r.severity === 'healthy' ? 'green' : 'red'}`}>
                      {r.severity === 'healthy' ? 'Healthy' : 'Defective'}
                    </span>
                  </td>
                  <td>
                    <div className="cf">
                      <i style={{ '--w': `${r.confidence}%`, '--c': r.color }}></i>
                      <span>{r.confidence}%</span>
                    </div>
                  </td>
                  <td className="r">
                    <b>{r.area}%</b>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
}
