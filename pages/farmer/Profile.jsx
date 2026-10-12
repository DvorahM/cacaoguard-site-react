import { Link } from 'react-router-dom';
import FarmerLayout from '../../components/FarmerLayout';
import { useToast } from '../../components/Toast';

export default function FarmerProfile() {
  const toast = useToast();
  return (
    <FarmerLayout active="profile" title="Profile">
      <div className="head">
        <div>
          <h1>My Profile Settings</h1>
          <p className="sub">
            Manage your personal agriculturist information, change security parameters, and configure
            notification alerts
          </p>
        </div>
        <div className="head-r"></div>
      </div>
      <div className="cols c-21 start">
        <div className="stack">
          <section className="card">
            <h2>Personal Information</h2>
            <form
              className="form cols c-2 tight"
              onSubmit={(e) => {
                e.preventDefault();
                toast('Changes saved');
              }}
            >
              <label>
                <span>
                  FULL NAME <b className="r-st">*</b>
                </span>
                <input className="inp" defaultValue="Juan Dela Cruz" />
              </label>
              <label>
                <span>
                  EMAIL ADDRESS <b className="r-st">*</b>
                </span>
                <input className="inp" type="email" defaultValue="juan@cacaoguard.com" />
              </label>
              <label>
                <span>
                  PHONE NUMBER <b className="r-st">*</b>
                </span>
                <input className="inp" defaultValue="+63 912 345 6789" />
              </label>
              <label>
                LOCATION / BARANGAY
                <input className="inp" defaultValue="Initao, Misamis Oriental" />
              </label>
              <div className="span2">
                <button className="btn btn-g" type="submit">
                  Save Changes
                </button>
              </div>
            </form>
          </section>
          <section className="card">
            <h2>Change Password</h2>
            <form
              className="form cols c-2 tight"
              onSubmit={(e) => {
                e.preventDefault();
                toast('Password updated');
              }}
            >
              <label className="span2">
                CURRENT PASSWORD
                <input className="inp" type="password" defaultValue="••••••••••••" />
              </label>
              <label>
                NEW PASSWORD
                <input className="inp" type="password" defaultValue="••••••••••••" />
              </label>
              <label>
                CONFIRM NEW PASSWORD
                <input className="inp" type="password" defaultValue="••••••••••••" />
              </label>
              <div className="span2">
                <button className="btn btn-o" type="submit">
                  Update Password
                </button>
              </div>
            </form>
          </section>
        </div>
        <div className="stack">
          <section className="card">
            <h2 className="h-sm">Notification Rules</h2>
            <div className="tr">
              <span>
                <b>Email Alerts</b>
                <small className="mut blk">Infection detection reports</small>
              </span>
              <input className="sw" type="checkbox" defaultChecked aria-label="Email Alerts" />
            </div>
            <div className="tr">
              <span>
                <b>Push Notifications</b>
                <small className="mut blk">Instant smart device alarms</small>
              </span>
              <input className="sw" type="checkbox" defaultChecked aria-label="Push Notifications" />
            </div>
            <div className="tr">
              <span>
                <b>Critical Alerts Only</b>
                <small className="mut blk">Mute non-severe diagnostics</small>
              </span>
              <input className="sw" type="checkbox" aria-label="Critical Alerts Only" />
            </div>
            <div className="tr">
              <span>
                <b>Weekly Summary Report</b>
                <small className="mut blk">Aggregated pathogen parameters</small>
              </span>
              <input className="sw" type="checkbox" defaultChecked aria-label="Weekly Summary Report" />
            </div>
          </section>
          <section className="card">
            <h2 className="h-sm">Account Details</h2>
            <dl className="kv-list">
              <div>
                <dt>Role</dt>
                <dd>
                  <span className="pill green">Farmer</span>
                </dd>
              </div>
              <div>
                <dt>Member Since</dt>
                <dd>January 2026</dd>
              </div>
              <div>
                <dt>Linked Farm</dt>
                <dd>1 Active</dd>
              </div>
            </dl>
            <Link className="btn btn-red wide" to="/login">
              Sign Out Account
            </Link>
          </section>
        </div>
      </div>
    </FarmerLayout>
  );
}
