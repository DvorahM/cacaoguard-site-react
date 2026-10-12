import { useState } from 'react';
import FarmerLayout from '../../components/FarmerLayout';
import Icon from '../../components/Icon';
import { useFarmerAlerts } from '../../context/FarmerAlerts';

export default function FarmerAlerts() {
  const { alerts, resolve } = useFarmerAlerts();
  const [severity, setSeverity] = useState('all');
  const [status, setStatus] = useState('active');

  const visible = alerts.filter(
    (a) => (severity === 'all' || a.sev === severity) && (status === 'all' || a.status === status),
  );

  return (
    <FarmerLayout active="alerts" title="Alerts">
      <div className="head">
        <div>
          <h1>Farm Pathology Alerts</h1>
          <p className="sub">
            Stay ahead of pathogens. Real-time system alarms driven by crop scans and climatic diagnostic
            telemetry.
          </p>
        </div>
        <div className="head-r"></div>
      </div>
      <div className="card filt mb">
        <Icon name="filter" size={18} />
        <b>Filter Alerts:</b>
        <select
          className="sel"
          aria-label="Severity"
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option value="all">Severity: All Alerts</option>
          <option value="critical">Critical</option>
          <option value="warning">Warning</option>
          <option value="notification">Notification</option>
        </select>
        <select
          className="sel"
          aria-label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="active">Status: Active</option>
          <option value="resolved">Resolved</option>
          <option value="all">All</option>
        </select>
      </div>
      <div className="stack">
        {visible.map((a) => (
          <article key={a.id} className={`al a-${a.color} pad${a.status === 'resolved' ? ' done' : ''}`}>
            <div className="al-b">
              <div className="al-t">
                <span className={`tag tag-${a.color}`}>{a.label}</span>
                <b>{a.farm}</b>
                <small className="mut">{a.time}</small>
              </div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
            {a.status === 'resolved' ? (
              <span className="resolved-tag">
                <Icon name="check" size={14} /> Resolved
              </span>
            ) : (
              <button className="btn btn-g resolve" onClick={() => resolve(a.id)}>
                Resolve Alert
              </button>
            )}
          </article>
        ))}
      </div>
      <p className="foot">Older alerts are archived automatically after 30 days.</p>
    </FarmerLayout>
  );
}
