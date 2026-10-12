import { Link } from 'react-router-dom';
import Icon from './Icon';
import useDocumentTitle from '../lib/useDocumentTitle';

// Sidebar + top bar shared by every dashboard page (admin and farmer)
export default function AppShell({ nav, active, title, brandTo, bellTo, avatar, children }) {
  useDocumentTitle(`${title} | CacaoGuard`);
  return (
    <div className="appx">
      <div className="app">
        <aside className="side">
          <Link className="brand" to={brandTo}>
            <span className="logo">
              <Icon name="shield" size={18} />
            </span>
            CacaoGuard
          </Link>
          <nav className="nav">
            {nav.map((item) => {
              const on = item.key === active;
              return (
                <Link
                  key={item.key}
                  to={item.to}
                  className={on ? 'on' : undefined}
                  aria-current={on ? 'page' : undefined}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.label}</span>
                  {item.badge ? <span className="badge">{item.badge}</span> : null}
                </Link>
              );
            })}
          </nav>
          <Link className="signout" to="/login">
            <Icon name="logout" size={20} />
            <span>Sign Out</span>
          </Link>
        </aside>
        <main className="main">
          <div className="top">
            <div className="loc">
              <Icon name="pin" size={18} />
              <span>Initao, Misamis Oriental</span>
            </div>
            <div className="top-r">
              <Link className="bellbtn" to={bellTo} aria-label="Alerts">
                <Icon name="bell" size={18} />
                <i></i>
              </Link>
              {avatar}
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
