import { useState } from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../lib/asset';
import useDocumentTitle from '../../lib/useDocumentTitle';

export default function ForgotPassword() {
  useDocumentTitle('Reset password | CacaoGuard');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div className="site">
      <div className="login flip">
        <div className="login-photo">
          <img src={asset('images/forgot-photo.jpg')} alt="Terraced cacao hills" />
        </div>
        <main className="login-side">
          <section className="panel">
            <h1>Reset Password</h1>
            <p className="sub">Enter your email and we will send you a reset link.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="field">
                <label htmlFor="e" style={{ display: 'block', marginBottom: '7px' }}>
                  EMAIL ADDRESS
                </label>
                <div className="input">
                  <input
                    id="e"
                    type="email"
                    placeholder="juan@cacaoguard.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                Send Reset Link
              </button>
            </form>
            {sent && (
              <p className="note-box">
                Check your inbox for the password reset email. If you do not receive it within 5 minutes,
                please inspect your spam folder.
              </p>
            )}
            <p className="alt">
              <Link to="/login">Back to Sign In</Link>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
