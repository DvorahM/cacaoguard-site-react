import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { asset } from '../../lib/asset';
import useDocumentTitle from '../../lib/useDocumentTitle';

export default function Signup() {
  useDocumentTitle('Create account | CacaoGuard');
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', farm: '' });
  const [message, setMessage] = useState('');

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setMessage('Passwords do not match. Check both fields and try again.');
      return;
    }
    navigate('/farmer/dashboard');
  };

  return (
    <div className="site">
      <div className="login">
        <div className="login-photo">
          <img src={asset('images/signup-photo.jpg')} alt="Aerial view of cacao farm rows" />
        </div>
        <main className="login-side">
          <section className="panel">
            <h1>Create Account</h1>
            <p className="sub">Register to monitor Initao Cacao Farm.</p>
            <form onSubmit={handleSubmit}>
              <div className="field tight">
                <label htmlFor="n">FULL NAME</label>
                <div className="input">
                  <input
                    id="n"
                    placeholder="Juan Dela Cruz"
                    value={form.name}
                    onChange={update('name')}
                    required
                  />
                </div>
              </div>
              <div className="field tight">
                <label htmlFor="e">EMAIL ADDRESS</label>
                <div className="input">
                  <input
                    id="e"
                    type="email"
                    placeholder="juan@cacaoguard.com"
                    value={form.email}
                    onChange={update('email')}
                    required
                  />
                </div>
              </div>
              <div className="field tight">
                <label htmlFor="p1">PASSWORD</label>
                <div className="input">
                  <input
                    id="p1"
                    type="password"
                    minLength={8}
                    placeholder="At least 8 characters"
                    value={form.password}
                    onChange={update('password')}
                    required
                  />
                </div>
              </div>
              <div className="field tight">
                <label htmlFor="p2">CONFIRM PASSWORD</label>
                <div className="input">
                  <input
                    id="p2"
                    type="password"
                    placeholder="Repeat your password"
                    value={form.confirm}
                    onChange={update('confirm')}
                    required
                  />
                </div>
              </div>
              <div className="field tight">
                <label htmlFor="fm">FARM NAME</label>
                <div className="input">
                  <input
                    id="fm"
                    placeholder="Initao Cacao Farm"
                    value={form.farm}
                    onChange={update('farm')}
                  />
                </div>
              </div>
              <div className="field tight">
                <label htmlFor="lc">LOCATION</label>
                <div className="input">
                  <input id="lc" value="Initao, Misamis Oriental" readOnly />
                </div>
              </div>
              <button className="btn btn-primary" type="submit" style={{ marginTop: '8px' }}>
                Create Account
              </button>
              <p className="msg" role="status">
                {message}
              </p>
            </form>
            <p className="alt">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
