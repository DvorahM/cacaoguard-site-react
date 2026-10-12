import { Link } from 'react-router-dom';
import FarmerLayout from '../../components/FarmerLayout';
import Icon from '../../components/Icon';
import { asset } from '../../lib/asset';
import { useToast } from '../../components/Toast';

export default function FarmerMyFarm() {
  const toast = useToast();
  return (
    <FarmerLayout active="myfarm" title="My Farm">
      <div className="head">
        <div>
          <h1>My Farm Overview</h1>
          <p className="sub">Manage your agricultural blocks, crop parameters, and treatment reports</p>
        </div>
        <div className="head-r"></div>
      </div>
      <section className="card mb farmtop">
        <img className="thumb" alt="Aerial view of Initao Cacao Farm" src={asset('images/farm-thumb.jpg')} />
        <div className="ft">
          <h2 className="h-lg">
            Initao Cacao Farm <span className="pill orange">Moderate Risk</span>
          </h2>
          <p className="mut">
            Owner: Juan Dela Cruz • Location: <b className="ink">Initao, Misamis Oriental</b> • Size:{' '}
            <b className="ink">8.3 Hectares</b>
          </p>
        </div>
        <div className="gauge">
          <div className="donut" style={{ '--p': '65' }}>
            <span>65%</span>
          </div>
          <div>
            <b>Farm Health Score</b>
            <p className="mut sm">Based on real-time pathogen load of drone diagnostic scans</p>
          </div>
        </div>
      </section>
      <div className="cols c-32 mb">
        <section className="card">
          <h2>Farm Waypoints</h2>
          <div className="stack tight">
            <div className="wpc">
              <div className="ch">
                <strong className="big">Waypoint 1</strong>
                <span className="pill green">Healthy</span>
              </div>
              <div className="rt sm">
                <span className="mut">Health Index</span>
                <b>92%</b>
              </div>
              <div className="bar">
                <i style={{ '--w': '92%', '--c': '#1F9D55' }}></i>
              </div>
              <div className="rt sm">
                <span className="mut">Last Scanned: Today</span>
                <span className="mut">
                  Affected: <b className="ink">0.0 ha</b>
                </span>
              </div>
            </div>
            <div className="wpc">
              <div className="ch">
                <strong className="big">Waypoint 2</strong>
                <span className="pill lime">Mild Spots</span>
              </div>
              <div className="rt sm">
                <span className="mut">Health Index</span>
                <b>81%</b>
              </div>
              <div className="bar">
                <i style={{ '--w': '81%', '--c': '#7FB43E' }}></i>
              </div>
              <div className="rt sm">
                <span className="mut">Last Scanned: Today</span>
                <span className="mut">
                  Affected: <b className="ink">0.2 ha</b>
                </span>
              </div>
            </div>
            <div className="wpc">
              <div className="ch">
                <strong className="big">Waypoint 3</strong>
                <span className="pill orange">Moderate Outbreak</span>
              </div>
              <div className="rt sm">
                <span className="mut">Health Index</span>
                <b>58%</b>
              </div>
              <div className="bar">
                <i style={{ '--w': '58%', '--c': '#E07B1F' }}></i>
              </div>
              <div className="rt sm">
                <span className="mut">Last Scanned: 1d ago</span>
                <span className="mut">
                  Affected: <b className="ink">1.1 ha</b>
                </span>
              </div>
            </div>
            <div className="wpc">
              <div className="ch">
                <strong className="big">Waypoint 5</strong>
                <span className="pill red">Severe Risk</span>
              </div>
              <div className="rt sm">
                <span className="mut">Health Index</span>
                <b>29%</b>
              </div>
              <div className="bar">
                <i style={{ '--w': '29%', '--c': '#D64545' }}></i>
              </div>
              <div className="rt sm">
                <span className="mut">Last Scanned: 1d ago</span>
                <span className="mut">
                  Affected: <b className="ink">2.4 ha</b>
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="stack">
          <section className="card">
            <h2 className="h-sm">Quick Actions</h2>
            <div className="stack tight">
              <button className="btn btn-g wide" onClick={() => toast('UAV scan requested')}>
                <Icon name="drone" size={16} />
                Request UAV Scan
              </button>
              <Link className="btn btn-o wide" to="/farmer/scan-history">
                View Scan History
              </Link>
              <a className="btn btn-o wide" href="#feedback">
                Report Urgent Issue
              </a>
            </div>
          </section>
          <section className="card">
            <h2 className="h-sm">Recent Activity Log</h2>
            <div className="act">
              <span className="actic">
                <Icon name="drone" size={16} />
              </span>
              <div>
                <b>UAV Autonomous Scan Completed</b>
                <p>Drone scan successful in Waypoint 1 and Waypoint 2</p>
                <small className="mut">Today, 10:15 AM</small>
              </div>
            </div>
            <div className="act">
              <span className="actic">
                <Icon name="warning" size={16} />
              </span>
              <div>
                <b>Critical Alert: Severe Black Pod Detection</b>
                <p>High infection rate identified in Waypoint 5</p>
                <small className="mut">Yesterday, 4:32 PM</small>
              </div>
            </div>
            <div className="act">
              <span className="actic">
                <Icon name="checkCircle" size={16} />
              </span>
              <div>
                <b>Feedback Form Submitted</b>
                <p>Reported treatment update for Waypoint 3</p>
                <small className="mut">Oct 24, 11:15 AM</small>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="card" id="feedback">
        <h2>Farmer Action & Ground Feedback Report</h2>
        <p className="mut sm">
          Help tune our drone AI diagnostic capabilities. If you have confirmed infections, please submit
          treatment feedback back to the system.
        </p>
        <form
          className="form cols c-2 tight"
          onSubmit={(e) => {
            e.preventDefault();
            toast('Feedback submitted');
          }}
        >
          <label>
            <span>
              FARM NAME <b className="r-st">*</b>
            </span>
            <input className="inp" defaultValue="Initao Cacao Farm" />
          </label>
          <label>
            INFECTION CONFIRMATION
            <select className="inp" defaultValue="Black Pod Infection Confirmed">
              <option>Black Pod Infection Confirmed</option>
              <option>Mild pod rot</option>
              <option>No infection</option>
            </select>
          </label>
          <label>
            TREATMENT STATUS
            <select className="inp" defaultValue="Fungicide Application In Progress">
              <option>Fungicide Application In Progress</option>
              <option>Not started</option>
              <option>Completed</option>
            </select>
          </label>
          <label>
            AFFECTED AREA (HECTARES)
            <input className="inp" defaultValue="1.5 ha" />
          </label>
          <label className="span2">
            NOTES & OBSERVATIONS
            <textarea
              className="inp"
              rows="3"
              defaultValue="Fungicide applied to diagnostic Waypoint 3 and Waypoint 4 this morning. Will monitor spreading closely over next 48 hours."
            ></textarea>
          </label>
          <div className="span2">
            <button className="btn btn-g" type="submit">
              Submit Feedback
            </button>
          </div>
        </form>
      </section>
    </FarmerLayout>
  );
}
