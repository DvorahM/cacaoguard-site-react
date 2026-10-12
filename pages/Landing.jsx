import { Link } from 'react-router-dom';
import Img from '../components/Img';
import { asset } from '../lib/asset';
import useDocumentTitle from '../lib/useDocumentTitle';

const FIGMA = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/';

const steps = [
  {
    icon: 'icon-camera.png',
    fallback: '4fa927a5-8cf1-482e-9f72-48f8e1aabc86',
    title: 'Capture',
    text: 'Drones fly over the farm and photograph the cacao trees.',
  },
  {
    icon: 'icon-bug.png',
    fallback: '4e196083-12bb-4c34-8758-e46743244a19',
    title: 'Detect',
    text: 'Deep learning checks each image for signs of Black Pod Disease.',
  },
  {
    icon: 'icon-leaf.png',
    fallback: 'c43c35d7-44e2-492c-a9a6-b569b3524ac4',
    title: 'Protect',
    text: 'Farmers get alerts early, so they can treat affected trees before it spreads.',
  },
];

export default function Landing() {
  useDocumentTitle('CacaoGuard');
  return (
    <div className="site">
      <header className="hero">
        <Img
          className="hero-photo"
          src={asset('images/hero.jpg')}
          fallback={`${FIGMA}c1821ea6-dd1b-4722-9471-ce182d5f652a`}
          alt="Aerial view of Initao Cacao Farm"
        />
        <div className="hero-fade" aria-hidden="true"></div>
        <div className="hero-body">
          <h1>CacaoGuard</h1>
          <p>
            AI-powered Black Pod Disease detection using drone imagery. Protecting Initao Cacao Farm in
            Initao, Misamis Oriental.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/signup">
              <Img
                src={asset('images/icon-play.png')}
                fallback={`${FIGMA}8a47f47e-c139-40ae-b3a9-24a2851c02d0`}
                alt=""
              />
              Get Started
            </Link>
            <Link className="btn btn-ghost" to="/login">
              Login
            </Link>
          </div>
        </div>
      </header>

      <main className="how">
        <h2>How It Works</h2>
        <div className="cards">
          {steps.map((s) => (
            <article className="card" key={s.title}>
              <Img src={asset(`images/${s.icon}`)} fallback={FIGMA + s.fallback} alt="" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
