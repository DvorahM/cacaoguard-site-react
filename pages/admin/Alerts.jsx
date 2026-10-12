import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import Icon from '../../components/Icon';

const initialAlerts = [
  {
    id: 1,
    tagColor: 'red',
    color: 'red',
    sev: 'critical',
    status: 'new',
    tag: 'NEW',
    icon: 'warning',
    text: 'Severe Black Pod detected in Waypoint 2 - 45% pod area affected. Immediate action required.',
    time: '2 hours ago',
  },
  {
    id: 2,
    tagColor: 'orange',
    color: 'orange',
    sev: 'warning',
    status: 'new',
    tag: 'NEW',
    icon: 'warning',
    text: 'Moderate infection spreading in Waypoint 1. Schedule fungicide application.',
    time: '5 hours ago',
  },
  {
    id: 3,
    tagColor: 'green',
    color: 'green',
    sev: 'info',
    status: 'acknowledged',
    tag: 'ACKNOWLEDGED',
    icon: 'info',
    text: 'Mild symptoms detected in Waypoint 1. Monitor closely over next 48 hours.',
    time: '1 day ago',
  },
  {
    id: 4,
    tagColor: 'green',
    color: 'orange',
    sev: 'warning',
    status: 'acknowledged',
    tag: 'ACKNOWLEDGED',
    icon: 'warning',
    text: 'Rising moisture levels may increase disease risk. Preventive measures recommended.',
    time: '1 day ago',
  },
];

export default function Alerts() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [severity, setSeverity] = useState('all');
  const [status, setStatus] = useState('all');

  const resolve = (id) =>
    setAlerts((list) => list.map((a) => (a.id === id ? { ...a, status: 'resolved' } : a)));

  const activeCount = alerts.filter((a) => a.status !== 'resolved').length;
  const visible = alerts.filter(
    (a) => (severity === 'all' || a.sev === severity) && (status === 'all' || a.status === status),
  );

  return (
    <AdminLayout active="alerts" title="Alerts">
      <div className="head">
        <div>
          <h1>Alerts</h1>
          <p className="sub">{activeCount} active alerts requiring attention</p>
        </div>
        <div className="head-r">
          <label className="selw">
            Severity:{' '}
            <select className="sel sm-sel" value={severity} onChange={(e) => setSeverity(e.target.value)}>
              <option value="all">All</option>
              <option value="critical">Critical</option>
              <option value="warning">Warning</option>
              <option value="info">Info</option>
            </select>
          </label>
          <label className="selw">
            Status:{' '}
            <select className="sel sm-sel" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="acknowledged">Acknowledged</option>
              <option value="resolved">Resolved</option>
            </select>
          </label>
        </div>
      </div>
      <div className="stack">
        {visible.map((a) => (
          <article key={a.id} className={`al a-${a.color}${a.status === 'resolved' ? ' done' : ''}`}>
            <span className="ai-ic">
              <Icon name={a.icon} size={22} />
            </span>
            <div className="al-b">
              <div className="al-t">
                <strong>Initao Cacao Farm</strong>
                <span className={`tag tag-${a.tagColor}`}>{a.tag}</span>
              </div>
              <p>{a.text}</p>
              <small className="mut">
                <Icon name="clock" size={13} /> {a.time}
              </small>
            </div>
            {a.status === 'resolved' ? (
              <span className="resolved-tag">&#10003; Resolved</span>
            ) : (
              <button className="btn btn-lime resolve" onClick={() => resolve(a.id)}>
                <Icon name="checkCircle" size={16} />
                Resolve
              </button>
            )}
          </article>
        ))}
      </div>
    </AdminLayout>
  );
}
