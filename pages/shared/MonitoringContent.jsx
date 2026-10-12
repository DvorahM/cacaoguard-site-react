import Icon from '../../components/Icon';
import { asset } from '../../lib/asset';
import { useToast } from '../../components/Toast';

// Used by both the admin and the farmer Monitoring pages
export default function MonitoringContent() {
  const toast = useToast();
  return (
    <>
      <div className="head">
        <div>
          <h1>Monitoring</h1>
          <p className="sub">Live UAV feed & farm monitoring</p>
        </div>
        <div className="head-r">
          <span className="chip">
            <Icon name="drone" size={16} />
            UAV: Scanning (67%)
          </span>
          <button className="btn btn-gold" onClick={() => toast('AI scan restarted')}>
            <Icon name="play" size={16} />
            Restart AI Scan
          </button>
        </div>
      </div>
      <section className="card mb">
        <div className="ch">
          <h2 className="h-sm">
            <svg
              className="ic rust"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m22 8-6 4 6 4V8z" />
              <rect x="2" y="6" width="14" height="12" rx="2" />
            </svg>{' '}
            Active UAV Scan Sweep - Sector Alpha
          </h2>
          <div className="telem">
            Alt: 45m • Speed: 12km/h <span className="live">● LIVE</span>
          </div>
        </div>
        <img
          className="feed"
          alt="Live drone view of cacao farm with a Black Pod detection marker"
          src={asset('images/uav-feed.jpg')}
        />
      </section>
      <div className="cols c-3">
        <section className="card">
          <h2 className="h-sm">Target Farm Overview</h2>
          <p className="cs">Cacao farm located in Initao, Misamis Oriental, Philippines</p>
          <div className="inner">
            <div className="ch">
              <div>
                <strong className="big">Initao Cacao Farm</strong>
                <p className="mut sm">Initao, Misamis Oriental</p>
              </div>
              <span className="pill lime-soft">Active Target</span>
            </div>
            <p className="cs wpl">
              <Icon name="pin" size={15} /> Waypoint 3 monitoring • Initao, Misamis Oriental, Philippines
            </p>
          </div>
          <div className="cols c-2 tight">
            <div className="inner">
              <small className="mut">Acreage</small>
              <strong className="big">12.4 ha</strong>
            </div>
            <div className="inner">
              <small className="mut">Pathogen Load</small>
              <strong className="big">18%</strong>
            </div>
          </div>
          <dl className="kv-list">
            <div>
              <dt>Owner</dt>
              <dd>Juan Dela Cruz</dd>
            </div>
            <div>
              <dt>Current Risk</dt>
              <dd className="g">Low Risk</dd>
            </div>
            <div>
              <dt>Last UAV Scan</dt>
              <dd>Today, 10:14</dd>
            </div>
            <div>
              <dt>Waypoint</dt>
              <dd>Waypoint 3</dd>
            </div>
          </dl>
          <div className="rt">
            <span className="g">
              <b>Pathogen Load</b>
            </span>
            <b className="g">18%</b>
          </div>
          <div className="bar">
            <i style={{ '--w': '18%', '--c': '#8BAE5F' }}></i>
          </div>
          <p className="cs sm">Stable readings across the current monitoring sweep.</p>
        </section>
        <section className="card">
          <h2 className="h-sm">Scan Results - Initao Cacao Farm</h2>
          <p className="cs">Recent UAV diagnoses across farm waypoints</p>
          <table className="tbl compact">
            <thead>
              <tr>
                <th>Waypoint</th>
                <th>Severity</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="wp">
                    <Icon name="video" size={16} />
                    <div>
                      <b>Waypoint 1</b>
                      <small>Today, 10:14</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="pill green">Healthy</span>
                </td>
                <td className="ai">
                  <Icon name="scan" size={15} /> 98%
                </td>
              </tr>
              <tr>
                <td>
                  <div className="wp">
                    <Icon name="video" size={16} />
                    <div>
                      <b>Waypoint 2</b>
                      <small>Today, 09:42</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="pill orange">Defective</span>
                </td>
                <td className="ai">
                  <Icon name="scan" size={15} /> 91%
                </td>
              </tr>
              <tr>
                <td>
                  <div className="wp">
                    <Icon name="video" size={16} />
                    <div>
                      <b>Waypoint 3</b>
                      <small>Yesterday, 16:20</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="pill orange">Defective</span>
                </td>
                <td className="ai">
                  <Icon name="scan" size={15} /> 95%
                </td>
              </tr>
              <tr>
                <td>
                  <div className="wp">
                    <Icon name="video" size={16} />
                    <div>
                      <b>Waypoint 5</b>
                      <small>Yesterday, 14:05</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="pill orange">Defective</span>
                </td>
                <td className="ai">
                  <Icon name="scan" size={15} /> 87%
                </td>
              </tr>
              <tr>
                <td>
                  <div className="wp">
                    <Icon name="video" size={16} />
                    <div>
                      <b>Block E - Central</b>
                      <small>Oct 24, 11:15</small>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="pill green">Healthy</span>
                </td>
                <td className="ai">
                  <Icon name="scan" size={15} /> 99%
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="card">
          <h2 className="h-sm">Farmer Feedback</h2>
          <p className="cs">Log ground truth validation reports</p>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              toast('Feedback submitted');
            }}
          >
            <label>
              Farm Name
              <input className="inp" defaultValue="Initao Cacao Farm" />
            </label>
            <label>
              Infection Confirmation
              <select className="inp">
                <option value="">Select infection diagnosis...</option>
                <option>Black Pod confirmed</option>
                <option>Mild pod rot</option>
                <option>No infection</option>
              </select>
            </label>
            <label>
              Treatment Status
              <select className="inp">
                <option value="">Select current status...</option>
                <option>Not started</option>
                <option>In progress</option>
                <option>Completed</option>
              </select>
            </label>
            <label>
              Ground Notes
              <textarea
                className="inp"
                rows="4"
                placeholder="Observation notes from field sweep..."
              ></textarea>
            </label>
            <button className="btn btn-gold wide" type="submit">
              <Icon name="report" size={16} />
              Submit Feedback
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
