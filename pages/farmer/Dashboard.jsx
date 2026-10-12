import FarmerLayout from '../../components/FarmerLayout';

export default function FarmerDashboard() {
  return (
    <FarmerLayout active="dashboard" title="Dashboard">
      <div className="head">
        <div>
          <h1>Welcome, Juan</h1>
          <p className="sub">Here is an overview of your farm health parameters</p>
        </div>
        <div className="head-r"></div>
      </div>
      <div className="cols c-21">
        <div className="stack">
          <div className="cols c-2 tight">
            <div className="card kpi">
              <div className="kl">MY TARGET FARM</div>
              <div className="kv">1</div>
            </div>
            <div className="card kpi warnk">
              <div className="kl">
                ACTIVE ALERTS <i className="dot" style={{ background: '#E07B1F' }}></i>
              </div>
              <div className="kv">1</div>
            </div>
          </div>
          <section className="card">
            <h2>My Farm Health</h2>
            <div className="cols c-2 tight">
              <div className="wpc">
                <div className="ch">
                  <strong>Initao Cacao Farm — Waypoint 1</strong>
                  <span className="pill lime">Low Risk</span>
                </div>
                <div className="rt sm">
                  <span className="mut">Health score</span>
                  <b>82%</b>
                </div>
                <div className="bar">
                  <i style={{ '--w': '82%', '--c': '#7DBE4F' }}></i>
                </div>
              </div>
              <div className="wpc">
                <div className="ch">
                  <strong>Initao Cacao Farm — Waypoint 5</strong>
                  <span className="pill orange">Moderate Risk</span>
                </div>
                <div className="rt sm">
                  <span className="mut">Health score</span>
                  <b>58%</b>
                </div>
                <div className="bar">
                  <i style={{ '--w': '58%', '--c': '#E07B1F' }}></i>
                </div>
              </div>
            </div>
          </section>
          <section className="card">
            <h2>Recent Scan Results</h2>
            <div className="scroll">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Farm</th>
                    <th>Waypoint</th>
                    <th>Date</th>
                    <th>Severity</th>
                    <th>AI Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Initao Cacao Farm</b>
                    </td>
                    <td>Waypoint 3</td>
                    <td className="mut">Today, 09:12</td>
                    <td>
                      <span className="pill red">Defective</span>
                    </td>
                    <td className="ai">98% AI</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Initao Cacao Farm</b>
                    </td>
                    <td>Waypoint 2</td>
                    <td className="mut">Today, 08:44</td>
                    <td>
                      <span className="pill red">Defective</span>
                    </td>
                    <td className="ai">94% AI</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Initao Cacao Farm</b>
                    </td>
                    <td>Waypoint 1</td>
                    <td className="mut">Yesterday</td>
                    <td>
                      <span className="pill green">Healthy</span>
                    </td>
                    <td className="ai">99% AI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <section className="card">
          <h2>Latest Alerts</h2>
          <div className="note n-orange">
            <div className="nt">
              <b>WARNING</b>
              <span>1h ago</span>
            </div>
            <strong>Outbreak in Waypoint 3, Initao Cacao Farm</strong>
          </div>
        </section>
      </div>
    </FarmerLayout>
  );
}
