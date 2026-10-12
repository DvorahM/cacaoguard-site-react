import { Link } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout';
import Icon from '../../components/Icon';

export default function Dashboard() {
  return (
    <AdminLayout active="dashboard" title="Dashboard">
      <div className="head">
        <div>
          <h1>Dashboard</h1>
          <p className="sub">Black Pod Disease monitoring overview</p>
        </div>
        <div className="head-r">
          <span className="chip">
            <i className="dot" style={{ background: '#B7633A' }}></i>Alert Level: Medium
          </span>
          <span className="chip">
            <Icon name="drone" size={16} />
            UAV: Standby
          </span>
          <Link className="btn btn-gold" to="/monitoring">
            <Icon name="play" size={16} />
            Start AI Scan
          </Link>
          <Link className="btn btn-w" to="/monitoring">
            <Icon name="video" size={16} />
            Live Feed
          </Link>
        </div>
      </div>
      <div className="cols c-4 mb">
        <div className="card kpi">
          <div className="kl">
            TARGET FARM <Icon name="map" size={18} />
          </div>
          <div className="kv">1</div>
          <div className="ks">1 active farm monitored</div>
        </div>
        <div className="card kpi">
          <div className="kl">
            UAV SCANS <Icon name="drone" size={18} />
          </div>
          <div className="kv">156</div>
          <div className="ks">+12 completed today</div>
        </div>
        <div className="card kpi warnk">
          <div className="kl">
            DETECTED CASES <Icon name="warning" size={18} />
          </div>
          <div className="kv">42</div>
          <div className="ks">18 high severity cases</div>
        </div>
        <div className="card kpi goldk">
          <div className="kl">
            FARM HEALTH RATE <Icon name="heart" size={18} />
          </div>
          <div className="kv">74%</div>
          <div className="ks">Target threshold {'>'} 80%</div>
        </div>
      </div>
      <div className="cols c-21 mb">
        <section className="card">
          <div className="ch">
            <div>
              <h2>Disease Trend Analysis</h2>
              <p className="cs">Classified pathogen severity levels for Initao Cacao Farm</p>
            </div>
            <div className="legend">
              <span>
                <i style={{ background: '#8BAE5F' }}></i>Healthy
              </span>
              <span>
                <i style={{ background: '#B7633A' }}></i>Defective
              </span>
            </div>
          </div>
          <svg
            className="chart"
            viewBox="0 0 640 200"
            preserveAspectRatio="none"
            role="img"
            aria-label="Disease trend, June to November"
          >
            <g stroke="#DAD6CB" strokeDasharray="4 4">
              <line x1="0" y1="45" x2="640" y2="45" />
              <line x1="0" y1="130" x2="640" y2="130" />
            </g>
            <path d="M0 62 L640 20 L640 200 L0 200Z" fill="#8BAE5F" fillOpacity=".14" />
            <path d="M0 108 L320 124 L640 152 L640 200 L0 200Z" fill="#D5A94A" fillOpacity=".22" />
            <path d="M0 142 L320 160 L640 174 L640 200 L0 200Z" fill="#B7633A" fillOpacity=".30" />
            <path d="M0 170 L220 160 L440 176 L640 180 L640 200 L0 200Z" fill="#B7633A" fillOpacity=".45" />
            <path d="M0 62 L640 20" stroke="#7FA64E" strokeWidth="2" fill="none" />
            <path d="M0 108 L320 124 L640 152" stroke="#D5A94A" strokeWidth="2" fill="none" />
            <path d="M0 142 L320 160 L640 174" stroke="#B7633A" strokeWidth="2" fill="none" />
          </svg>
          <div className="xlab">
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
          </div>
        </section>
        <section className="card">
          <h2>Active AI Alerts</h2>
          <p className="cs">Unresolved infections requiring attention</p>
          <div className="note n-red">
            <div className="nt">
              <b>CRITICAL</b>
              <span>12m ago</span>
            </div>
            <strong>Black Pod Outbreak</strong>
            <p>Waypoint 3, Initao Cacao Farm</p>
          </div>
          <div className="note n-orange">
            <div className="nt">
              <b>WARNING</b>
              <span>1h ago</span>
            </div>
            <strong>Mild Pod Rot Detected</strong>
            <p>Waypoint 3, Initao Cacao Farm</p>
          </div>
        </section>
      </div>
      <div className="cols c-32">
        <section className="card">
          <h2>Recent UAV Diagnostic Runs</h2>
          <p className="cs">Real-time telemetry reports from active scout sweeps</p>
          <div className="scroll">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Target Waypoint</th>
                  <th>Drone ID</th>
                  <th>AI Conf.</th>
                  <th>Diagnosis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mut">Today, 09:12</td>
                  <td>
                    <b>Initao Cacao Farm - Waypoint 1</b>
                  </td>
                  <td className="mut">UAV-04</td>
                  <td className="ai">
                    <Icon name="scan" size={15} /> 98% AI
                  </td>
                  <td>
                    <span className="pill gray">Defective</span>
                  </td>
                </tr>
                <tr>
                  <td className="mut">Today, 08:44</td>
                  <td>
                    <b>Initao Cacao Farm - Waypoint 1</b>
                  </td>
                  <td className="mut">UAV-02</td>
                  <td className="ai">
                    <Icon name="scan" size={15} /> 94% AI
                  </td>
                  <td>
                    <span className="pill gray">Defective</span>
                  </td>
                </tr>
                <tr>
                  <td className="mut">Yesterday</td>
                  <td>
                    <b>Initao Cacao Farm - Waypoint 3</b>
                  </td>
                  <td className="mut">UAV-04</td>
                  <td className="ai">
                    <Icon name="scan" size={15} /> 99% AI
                  </td>
                  <td>
                    <span className="pill green">Healthy</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="card">
          <h2>Waypoint Risk Overview</h2>
          <p className="cs">Pathogen load relative to acreage</p>
          <div className="risk">
            <div className="rt">
              <span>Sector Alpha (Acre 1-12)</span>
              <span>
                <b style={{ color: '#D64545' }}>High Risk</b> <em>• 82%</em>
              </span>
            </div>
            <div className="bar">
              <i style={{ '--w': '82%', '--c': '#B7633A' }}></i>
            </div>
          </div>
          <div className="risk">
            <div className="rt">
              <span>Sector Bravo (Acre 13-24)</span>
              <span>
                <b style={{ color: '#E07B1F' }}>Medium Risk</b> <em>• 54%</em>
              </span>
            </div>
            <div className="bar">
              <i style={{ '--w': '54%', '--c': '#B7633A' }}></i>
            </div>
          </div>
          <div className="risk">
            <div className="rt">
              <span>Sector Delta (Acre 25-36)</span>
              <span>
                <b style={{ color: '#1F9D55' }}>Low Risk</b> <em>• 18%</em>
              </span>
            </div>
            <div className="bar">
              <i style={{ '--w': '18%', '--c': '#8BAE5F' }}></i>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
