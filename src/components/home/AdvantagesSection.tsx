export function AdvantagesSection() {
  return (
    <section className="advantages" id="advantages">
      <div className="section-label">
        <span>Why Good Deal</span>
      </div>
      <h2 className="section-title reveal">
        The <em>Good Deal</em> Advantage
      </h2>
      <div className="adv-grid reveal">
        <div className="adv-item">
          <div className="adv-number">
            100<sup>%</sup>
          </div>
          <div className="adv-label">Genuine Products</div>
        </div>
        <div className="adv-item">
          <div className="adv-number">3+</div>
          <div className="adv-label">Global OEM Partners</div>
        </div>
        <div className="adv-item">
          <div className="adv-number">5</div>
          <div className="adv-label">Service Verticals</div>
        </div>
        <div className="adv-item">
          <div className="adv-number">IEC</div>
          <div className="adv-label">International Standards</div>
        </div>
      </div>

      <div className="adv-cards">
        <div className="adv-card reveal">
          <div className="adv-card-icon">
            <svg viewBox="0 0 36 36" fill="none">
              <path
                d="M18 4L4 10v10c0 8.837 6.268 17.12 14 19 7.732-1.88 14-10.163 14-19V10L18 4z"
                stroke="var(--gold)"
                strokeWidth="1.3"
              />
              <path d="M12 18l4 4 8-8" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <h4>Direct Import &amp; Authenticity</h4>
          <p>
            We eliminate middlemen by importing core components directly from ABB, Schneider, and Siemens. This
            ensures 100% genuine products and full manufacturer warranties on every order.
          </p>
        </div>
        <div className="adv-card reveal">
          <div className="adv-card-icon">
            <svg viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="14" stroke="var(--gold)" strokeWidth="1.3" />
              <path d="M18 10v8l5 5" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <h4>International Compliance</h4>
          <p>
            All projects strictly adhere to IEC, NFPA, and BNBC safety and quality benchmarks — ensuring every
            installation meets global standards and local regulatory requirements.
          </p>
        </div>
        <div className="adv-card reveal">
          <div className="adv-card-icon">
            <svg viewBox="0 0 36 36" fill="none">
              <path
                d="M18 4v28M8 9l10 5 10-5M8 18l10 5 10-5"
                stroke="var(--gold)"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h4>Turnkey Solutions</h4>
          <p>
            From initial engineering assessment to final commissioning and O&amp;M, we handle every aspect of your
            project under one roof — reducing complexity and ensuring seamless delivery.
          </p>
        </div>
        <div className="adv-card reveal">
          <div className="adv-card-icon">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="M6 28c3-6 8-10 12-10s9 4 12 10" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" />
              <circle cx="18" cy="12" r="5" stroke="var(--gold)" strokeWidth="1.3" />
            </svg>
          </div>
          <h4>Sustainable &amp; Green Focus</h4>
          <p>
            Dedicated to supporting "Green Factory" initiatives through energy-efficient systems, solar EPC
            services, and environmentally responsible engineering practices across all projects.
          </p>
        </div>
      </div>
    </section>
  );
}
