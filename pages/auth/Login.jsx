import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../components/Img';
import { asset } from '../../lib/asset';
import useDocumentTitle from '../../lib/useDocumentTitle';

const FIGMA = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/';

export default function Login() {
  useDocumentTitle('Sign in | CacaoGuard');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Signing in...');
    // Demo only: any email containing "admin" goes to the admin dashboard
    navigate(email.toLowerCase().includes('admin') ? '/dashboard' : '/farmer/dashboard');
  };

  return (
    <div className="site">
      <div className="login">
        <div className="login-photo">
          <img src={asset('images/login-photo.jpg')} alt="Cacao trees with ripening pods" />
        </div>
        <main className="login-side">
          <section className="panel">
            <h1>Welcome back</h1>
            <p className="sub">Sign in to monitor Initao Cacao Farm and manage outbreaks.</p>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="email" style={{ display: 'block', marginBottom: '7px' }}>
                  EMAIL ADDRESS
                </label>
                <div className="input">
                  <Img
                    src={asset('images/icon-mail.png')}
                    fallback={`${FIGMA}7bf72052-eda8-49ca-ae2c-6c8e1446abcd`}
                    alt=""
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="farmer@cacaoguard.ph"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="field-head">
                  <label htmlFor="pw">PASSWORD</label>
                  <Link to="/forgot-password">Forgot?</Link>
                </div>
                <div className="input">
                  <Img
                    src={asset('images/icon-lock.png')}
                    fallback={`${FIGMA}07f5b8dc-649d-43c0-9628-f566c72c7aed`}
                    alt=""
                  />
                  <input
                    id="pw"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••••"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword((s) => !s)}
                  >
                    <Img
                      src={asset('images/icon-eye.png')}
                      fallback={`${FIGMA}17dcc61b-5dc7-4852-91f0-38dec7c67f04`}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <label className="remember">
                <input type="checkbox" /> Remember this device
              </label>
              <button className="btn btn-primary" type="submit">
                Sign In to Dashboard
              </button>
              <p className="msg" role="status">
                {message}
              </p>
            </form>
            <p className="alt">
              No account yet? <Link to="/signup">Create one</Link>
            </p>
            <div className="divider"></div>
            <div className="demo">
              <h2>DEMO ACCOUNTS</h2>
              <div>
                <b>Admin:</b> admin@cacaoguard.ph
              </div>
              <div>
                <b>Farmer:</b> farmer@cacaoguard.ph
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
