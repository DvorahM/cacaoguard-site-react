import { Link } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout';

export default function FarmDetail() {
  return (
    <AdminLayout active="farms" title="Initao Cacao Farm">
      <div className="head">
        <div>
          <h1>
            Initao Cacao Farm <span className="pill lime">Low Risk</span>
          </h1>
          <p className="sub">
            Owner: <b>Juan Dela Cruz</b> • Size: <b>12.5 hectares</b> • Health Index: <b className="g">82%</b>
          </p>
        </div>
        <div className="head-r">
          <Link className="btn btn-o" to="/farms">
            Edit Farm Details
          </Link>
        </div>
      </div>
      <div className="cols c-21">
        <div className="stack">
          <section className="card">
            <h2>Waypoint Health Map</h2>
            <div className="cols c-3 tight">
              <div className="wpc">
                <div className="ch">
                  <strong>Waypoint 1</strong>
                  <span className="pill green">Healthy</span>
                </div>
                <div className="rt sm">
                  <span className="mut">Health Rate</span>
                  <b>96%</b>
                </div>
                <div className="bar">
                  <i style={{ '--w': '96%', '--c': '#1F9D55' }}></i>
                </div>
                <small className="mut">Last Scanned: Today</small>
              </div>
              <div className="wpc">
                <div className="ch">
                  <strong>Waypoint 2</strong>
                  <span className="pill red">Defective</span>
                </div>
                <div className="rt sm">
                  <span className="mut">Health Rate</span>
                  <b>84%</b>
                </div>
                <div className="bar">
                  <i style={{ '--w': '84%', '--c': '#7FB43E' }}></i>
                </div>
                <small className="mut">Last Scanned: Today</small>
              </div>
              <div className="wpc">
                <div className="ch">
                  <strong>Waypoint 3</strong>
                  <span className="pill red">Defective</span>
                </div>
                <div className="rt sm">
                  <span className="mut">Health Rate</span>
                  <b>28%</b>
                </div>
                <div className="bar">
                  <i style={{ '--w': '28%', '--c': '#D64545' }}></i>
                </div>
                <small className="mut">Last Scanned: 1d ago</small>
              </div>
              <div className="wpc">
                <div className="ch">
                  <strong>Waypoint 5</strong>
                  <span className="pill red">Defective</span>
                </div>
                <div className="rt sm">
                  <span className="mut">Health Rate</span>
                  <b>54%</b>
                </div>
                <div className="bar">
                  <i style={{ '--w': '54%', '--c': '#E07B1F' }}></i>
                </div>
                <small className="mut">Last Scanned: 2d ago</small>
              </div>
              <div className="wpc">
                <div className="ch">
                  <strong>Waypoint 6</strong>
                  <span className="pill green">Healthy</span>
                </div>
                <div className="rt sm">
                  <span className="mut">Health Rate</span>
                  <b>91%</b>
                </div>
                <div className="bar">
                  <i style={{ '--w': '91%', '--c': '#1F9D55' }}></i>
                </div>
                <small className="mut">Last Scanned: 3d ago</small>
              </div>
              <div className="wpc">
                <div className="ch">
                  <strong>Waypoint 7</strong>
                  <span className="pill green">Healthy</span>
                </div>
                <div className="rt sm">
                  <span className="mut">Health Rate</span>
                  <b>88%</b>
                </div>
                <div className="bar">
                  <i style={{ '--w': '88%', '--c': '#1F9D55' }}></i>
                </div>
                <small className="mut">Last Scanned: 3d ago</small>
              </div>
            </div>
          </section>
          <section className="card">
            <h2>Recent UAV Diagnostics Runs</h2>
            <div className="scroll">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Date / Time</th>
                    <th>Waypoint</th>
                    <th>Diagnosis</th>
                    <th>AI Confidence</th>
                    <th>Affected Area</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="mut">Oct 24, 09:12</td>
                    <td>
                      <b>Waypoint 3</b>
                    </td>
                    <td>
                      <span className="pill red">Defective</span>
                    </td>
                    <td className="ai">98% AI</td>
                    <td>1.2 ha</td>
                  </tr>
                  <tr>
                    <td className="mut">Oct 23, 14:05</td>
                    <td>
                      <b>Waypoint 2</b>
                    </td>
                    <td>
                      <span className="pill red">Defective</span>
                    </td>
                    <td className="ai">91% AI</td>
                    <td>0.4 ha</td>
                  </tr>
                  <tr>
                    <td className="mut">Oct 22, 11:44</td>
                    <td>
                      <b>Waypoint 5</b>
                    </td>
                    <td>
                      <span className="pill red">Defective</span>
                    </td>
                    <td className="ai">88% AI</td>
                    <td>0.8 ha</td>
                  </tr>
                  <tr>
                    <td className="mut">Oct 20, 08:30</td>
                    <td>
                      <b>Waypoint 1</b>
                    </td>
                    <td>
                      <span className="pill green">Healthy</span>
                    </td>
                    <td className="ai">96% AI</td>
                    <td>3.5 ha</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="stack">
          <section className="card">
            <h2 className="h-sm">Health Trend Analysis</h2>
            <p className="cs">Pathogen load trend over last 6 months</p>
            <div className="trend">
              <svg
                viewBox="0 0 300 110"
                preserveAspectRatio="none"
                role="img"
                aria-label="Pathogen load trend May to October"
              >
                <polyline
                  points="10,38 60,62 120,18 180,88 240,52 290,38"
                  fill="none"
                  stroke="#173D2C"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="xlab">
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
            </div>
          </section>
          <section className="card">
            <h2 className="h-sm">Recent Alerts</h2>
            <div className="note n-red">
              <div className="nt">
                <b>CRITICAL</b>
                <span>12m ago</span>
              </div>
              <strong>Outbreak in Waypoint 3</strong>
            </div>
            <div className="note n-orange">
              <div className="nt">
                <b>WARNING</b>
                <span>2h ago</span>
              </div>
              <strong>Mild Pathogen Waypoint 5</strong>
            </div>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
}
