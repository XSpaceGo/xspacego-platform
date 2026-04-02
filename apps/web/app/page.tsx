import { SectionCard } from "@/components/section-card";
import { siteConfig } from "@/lib/site";

const metrics = [
  { label: "Detection Pipeline", value: "5 stages" },
  { label: "System Mode", value: "Research-ready" },
  { label: "Deployment", value: "Web + API" }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-grid">
        <div className="hero-copy">
          <div className="badge">XSpaceGo Atlas</div>
          <p className="kicker">Lunar SAR Intelligence Platform</p>
          <h1>{siteConfig.tagline}</h1>
          <p className="lead">{siteConfig.description}</p>

          <div className="metric-row">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="moon-panel" aria-hidden="true">
          <div className="moon-orbit" />
          <div className="moon-sphere" />
          <div className="scanline" />
        </div>
      </section>

      <section className="content-grid">
        <SectionCard eyebrow="Algorithm Flow" title="Mission pipeline">
          <ol className="numbered-list">
            {siteConfig.pipeline.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </SectionCard>

        <SectionCard eyebrow="Platform Strategy" title="Why this structure works">
          <ul className="plain-list">
            {siteConfig.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard eyebrow="Backend Design" title="API-first algorithm integration">
          <p>
            The backend is prepared for stage-by-stage processing so your own XSpaceGo
            algorithm can evolve from prototypes into a production research service.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Deployment" title="Ready for hosting">
          <p>
            Frontend is optimized for Vercel. Backend is structured for Docker-based
            deployment on Render or Railway with minimal repo changes.
          </p>
        </SectionCard>
      </section>
    </main>
  );
}
