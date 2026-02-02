import { useState, useEffect } from 'react';
import './App.css';

interface Investor {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  iq: number;
  totalInvested: string;
  winRate: number;
  bestCall: string;
  joinedDate: string;
  tier: 'diamond' | 'gold' | 'silver';
}

const investors: Investor[] = [
  {
    id: 1,
    name: "Nexus Prime",
    handle: "@nexus_alpha",
    avatar: "NP",
    iq: 187,
    totalInvested: "$4.2M",
    winRate: 94.7,
    bestCall: "Early CLAWD accumulator",
    joinedDate: "Jan 2024",
    tier: 'diamond'
  },
  {
    id: 2,
    name: "Phantom Whale",
    handle: "@phantom_whale",
    avatar: "PW",
    iq: 172,
    totalInvested: "$2.8M",
    winRate: 91.2,
    bestCall: "Called the Q2 pump",
    joinedDate: "Feb 2024",
    tier: 'diamond'
  },
  {
    id: 3,
    name: "Cipher Mind",
    handle: "@cipher_mind",
    avatar: "CM",
    iq: 165,
    totalInvested: "$1.9M",
    winRate: 88.5,
    bestCall: "DCA strategy pioneer",
    joinedDate: "Mar 2024",
    tier: 'gold'
  },
  {
    id: 4,
    name: "Quantum Sage",
    handle: "@qsage",
    avatar: "QS",
    iq: 158,
    totalInvested: "$1.4M",
    winRate: 86.3,
    bestCall: "Identified support at 0.42",
    joinedDate: "Mar 2024",
    tier: 'gold'
  },
  {
    id: 5,
    name: "Oracle Drift",
    handle: "@oracle_drift",
    avatar: "OD",
    iq: 151,
    totalInvested: "$980K",
    winRate: 84.1,
    bestCall: "Momentum trader elite",
    joinedDate: "Apr 2024",
    tier: 'gold'
  },
  {
    id: 6,
    name: "Nebula Ark",
    handle: "@nebula_ark",
    avatar: "NA",
    iq: 147,
    totalInvested: "$720K",
    winRate: 81.8,
    bestCall: "Volume analysis master",
    joinedDate: "Apr 2024",
    tier: 'silver'
  },
  {
    id: 7,
    name: "Sigma Vector",
    handle: "@sigma_vec",
    avatar: "SV",
    iq: 143,
    totalInvested: "$540K",
    winRate: 79.4,
    bestCall: "On-chain whale tracker",
    joinedDate: "May 2024",
    tier: 'silver'
  },
  {
    id: 8,
    name: "Apex Theorem",
    handle: "@apex_thm",
    avatar: "AT",
    iq: 139,
    totalInvested: "$410K",
    winRate: 77.2,
    bestCall: "Social sentiment analyzer",
    joinedDate: "May 2024",
    tier: 'silver'
  }
];

function IQMeter({ value, tier }: { value: number; tier: string }) {
  const percentage = ((value - 100) / 100) * 100;

  return (
    <div className="iq-meter">
      <div className="iq-track">
        <div
          className={`iq-fill ${tier}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="iq-value">{value}</span>
    </div>
  );
}

function InvestorCard({ investor, index }: { investor: Investor; index: number }) {
  return (
    <div
      className={`investor-card ${investor.tier}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-rank">#{index + 1}</div>

      <div className="card-header">
        <div className={`avatar ${investor.tier}`}>
          {investor.avatar}
        </div>
        <div className="investor-info">
          <h3 className="investor-name">{investor.name}</h3>
          <span className="investor-handle">{investor.handle}</span>
        </div>
        <div className={`tier-badge ${investor.tier}`}>
          {investor.tier}
        </div>
      </div>

      <div className="iq-section">
        <span className="iq-label">Intelligence Quotient</span>
        <IQMeter value={investor.iq} tier={investor.tier} />
      </div>

      <div className="stats-grid">
        <div className="stat">
          <span className="stat-value">{investor.totalInvested}</span>
          <span className="stat-label">Total Invested</span>
        </div>
        <div className="stat">
          <span className="stat-value">{investor.winRate}%</span>
          <span className="stat-label">Win Rate</span>
        </div>
      </div>

      <div className="best-call">
        <span className="call-icon">&#9670;</span>
        <span className="call-text">{investor.bestCall}</span>
      </div>

      <div className="card-footer">
        <span className="joined">Joined {investor.joinedDate}</span>
      </div>
    </div>
  );
}

function Particle({ style }: { style: React.CSSProperties }) {
  return <div className="particle" style={style} />;
}

function App() {
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
    }));
    setParticles(newParticles);
  }, []);

  const totalInvested = "$13.0M+";
  const avgWinRate = "85.4%";
  const avgIQ = "158";

  return (
    <div className="app">
      <div className="background-layer">
        {particles.map((style, i) => (
          <Particle key={i} style={style} />
        ))}
        <div className="grid-overlay" />
      </div>

      <header className="header">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-icon">&#9671;</span>
            <span className="logo-text">META CLAWD</span>
          </div>
          <span className="tagline">Smart Money Intelligence</span>
        </div>

        <nav className="nav">
          <span className="nav-item active">Leaderboard</span>
          <span className="nav-item">Analytics</span>
          <span className="nav-item">About</span>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="hero-title">
            <span className="title-line">The Smartest</span>
            <span className="title-line accent">Investors</span>
            <span className="title-line">in Meta Clawd</span>
          </h1>
          <p className="hero-subtitle">
            Track the alpha. Follow the intelligence. These are the minds shaping the future of CLAWD.
          </p>
        </section>

        <section className="stats-overview">
          <div className="overview-stat">
            <span className="overview-value">{totalInvested}</span>
            <span className="overview-label">Total Capital Deployed</span>
          </div>
          <div className="divider" />
          <div className="overview-stat">
            <span className="overview-value">{avgWinRate}</span>
            <span className="overview-label">Average Win Rate</span>
          </div>
          <div className="divider" />
          <div className="overview-stat">
            <span className="overview-value">{avgIQ}</span>
            <span className="overview-label">Average IQ Score</span>
          </div>
        </section>

        <section className="investors-section">
          <div className="section-header">
            <h2 className="section-title">Elite Investor Rankings</h2>
            <div className="filter-tabs">
              <button className="filter-tab active">All Tiers</button>
              <button className="filter-tab">Diamond</button>
              <button className="filter-tab">Gold</button>
              <button className="filter-tab">Silver</button>
            </div>
          </div>

          <div className="investors-grid">
            {investors.map((investor, index) => (
              <InvestorCard key={investor.id} investor={investor} index={index} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="footer-text">Requested by @GoldenFarFR · Built by @clonkbot</span>
      </footer>
    </div>
  );
}

export default App;
