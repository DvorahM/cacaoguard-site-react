import { Link } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout';
import Icon from '../../components/Icon';

export default function Farms() {
  return (
    <AdminLayout active="farms" title="Farm">
      <div className="head">
        <div>
          <h1>Farm</h1>
          <p className="sub">1 target farm under active diagnostic management</p>
        </div>
        <div className="head-r">
          <Link className="btn btn-g" to="/farm-detail">
            <Icon name="plus" size={16} />
            View Details
          </Link>
        </div>
      </div>
      <div className="cols c-farm">
        <section className="card farmcard">
          <div className="ch">
            <div>
              <strong className="big">Initao Cacao Farm</strong>
              <p className="mut sm">Owner: Juan Dela Cruz</p>
            </div>
            <span className="pill green">Low Risk</span>
          </div>
          <p className="mut sm wpl">
            <Icon name="pin" size={15} /> 12.5 ha monitored area
          </p>
          <div className="rt sm">
            <span className="mut">Crop Health Score</span>
            <b className="g">82%</b>
          </div>
          <div className="bar">
            <i style={{ '--w': '82%', '--c': '#1F9D55' }}></i>
          </div>
        </section>
        <section className="card">
          <h2 className="h-sm g2">
            <svg
              className="ic gr"
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
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
              <path d="M2 21c0-3 1.9-5.6 5-7" />
            </svg>{' '}
            Target Farm Details
          </h2>
          <p className="cs">Your single target farm details</p>
          <form className="form" id="ff">
            <label>
              Farm Name
              <input className="inp" defaultValue="Initao Cacao Farm" />
            </label>
            <label>
              Owner Name
              <input className="inp" defaultValue="Juan Dela Cruz" />
            </label>
            <label>
              Location (Pre-filled)
              <span className="inp ro">
                Initao, Misamis Oriental <Icon name="lock" size={16} />
              </span>
            </label>
            <label>
              Monitored Area Size (ha)
              <input className="inp" defaultValue="12.4" />
            </label>
            <Link className="btn btn-g wide" to="/farm-detail">
              <Icon name="check" size={16} />
              View Farm
            </Link>
          </form>
        </section>
      </div>
    </AdminLayout>
  );
}
