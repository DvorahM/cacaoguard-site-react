import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import Icon from '../../components/Icon';
import { useToast } from '../../components/Toast';

export default function Settings() {
  const toast = useToast();
  const [affected, setAffected] = useState(30);
  const [confidence, setConfidence] = useState(75);
  const [autoScan, setAutoScan] = useState(false);
  const [interval, setInterval] = useState(30);
  return (
    <AdminLayout active="settings" title="Settings">
      <div className="head">
        <div>
          <h1>Settings</h1>
          <p className="sub">System configuration & preferences</p>
        </div>
        <div className="head-r">
          <button className="btn btn-g" onClick={() => toast('Settings saved')}>
            <Icon name="save" size={16} />
            Save All
          </button>
        </div>
      </div>
      <div className="cols c-2 start">
        <div className="stack">
          <section className="card">
            <h2>Disease Thresholds</h2>
            <p className="cs">Set the sensitivity for Black Pod Disease detection.</p>
            <div className="rng">
              <div className="rt">
                <b>Affected Area Threshold</b>
                <b>{affected}%</b>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={affected}
                onChange={(e) => setAffected(Number(e.target.value))}
                aria-label="Affected area threshold"
              />
              <small className="mut">Minimum affected area to trigger detection</small>
            </div>
            <div className="rng">
              <div className="rt">
                <b>Confidence Threshold</b>
                <b>{confidence}%</b>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={confidence}
                onChange={(e) => setConfidence(Number(e.target.value))}
                aria-label="Confidence threshold"
              />
              <small className="mut">Minimum AI confidence score required</small>
            </div>
          </section>
          <section className="card">
            <h2>Alert Configuration</h2>
            <p className="cs">Configure how and when alerts are triggered.</p>
            <label className="form-l">
              Alert Sensitivity
              <select className="inp" defaultValue="Medium">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>
            <div className="tr">
              <span>
                <b>Email Notifications</b>
              </span>
              <input className="sw" type="checkbox" defaultChecked aria-label="Email notifications" />
            </div>
            <div className="tr">
              <span>
                <b>Push Notifications</b>
              </span>
              <input className="sw" type="checkbox" defaultChecked aria-label="Push notifications" />
            </div>
            <div className="tr">
              <span>
                <b>Critical Alerts Only</b>
              </span>
              <input className="sw" type="checkbox" aria-label="Critical alerts only" />
            </div>
          </section>
        </div>
        <section className="card">
          <h2>UAV Scan Settings</h2>
          <p className="cs">Configure automatic scan behavior.</p>
          <div className="tr">
            <span>
              <b>Auto-Scan Enabled</b>
            </span>
            <input
              className="sw"
              type="checkbox"
              checked={autoScan}
              onChange={(e) => setAutoScan(e.target.checked)}
              aria-label="Auto-scan enabled"
            />
          </div>
          <label className={`form-l${autoScan ? '' : ' dis'}`}>
            Scan Interval (minutes)
            <input
              className="inp"
              type="number"
              min="5"
              max="120"
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              disabled={!autoScan}
            />
          </label>
          <small className="mut">Time between automatic scans (5-120 minutes)</small>
        </section>
      </div>
    </AdminLayout>
  );
}
