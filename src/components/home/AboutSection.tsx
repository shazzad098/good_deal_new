import { HighlightIcon } from "../HighlightIcon";

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="section-label">
        <span>About Good Deal</span>
      </div>
      <h2 className="section-title reveal">
        Bridging Global Innovation
        <br />
        with <em>Local Expertise</em>
      </h2>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            GOOD DEAL is a premier, multi-disciplinary engineering and supply-chain firm headquartered in Dhaka,
            Bangladesh. As a <strong>Direct Importer and Authorized Partner</strong>, we bridge the gap between
            global technological innovations and local industrial requirements.
          </p>
          <p>
            By sourcing premium components directly from world-class manufacturers such as{" "}
            <strong>ABB, Schneider Electric, and Siemens</strong>, and integrating them with expert engineering, we
            ensure the highest standards of safety, efficiency, and sustainability.
          </p>
          <p>
            We are the <strong>authorized partner of PCJ Industries Co., Ltd. (Thailand)</strong> for the Bangladesh
            territory, bringing internationally certified fire and life safety solutions to the local market.
          </p>
          <div className="divider" />
          <div className="partners">
            <div className="partners-label">Authorized Partners &amp; Direct Importers</div>
            <div className="partner-logos">
              <div className="partner-tag">ABB — Switzerland</div>
              <div className="partner-tag">Schneider Electric — France</div>
              <div className="partner-tag">Siemens — Germany</div>
              <div className="partner-tag">EAE Busbar Systems</div>
              <div className="partner-tag">PCJ Industries — Thailand</div>
            </div>
          </div>
        </div>

        <div className="about-highlights reveal">
          <div className="highlight-card">
            <div className="hc-icon">
              <HighlightIcon name="compliance" />
            </div>
            <h4>International Compliance</h4>
            <p>
              All projects strictly adhere to IEC, NFPA, and BNBC safety and quality benchmarks — ensuring global
              standards on every installation.
            </p>
          </div>
          <div className="highlight-card">
            <div className="hc-icon">
              <HighlightIcon name="import" />
            </div>
            <h4>Direct Import Advantage</h4>
            <p>
              We eliminate middlemen by importing core components directly, guaranteeing 100% genuine products with
              full manufacturer warranties.
            </p>
          </div>
          <div className="highlight-card">
            <div className="hc-icon">
              <HighlightIcon name="sustainable" />
            </div>
            <h4>Sustainable Focus</h4>
            <p>
              Dedicated to supporting "Green Factory" initiatives through energy-efficient systems, solar EPC, and
              sustainable engineering practices.
            </p>
          </div>
          <div className="highlight-card">
            <div className="hc-icon">
              <HighlightIcon name="expertise" />
            </div>
            <h4>Technical Expertise</h4>
            <p>
              A team of seasoned engineers committed to technical precision, operational excellence, and continuous
              client support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
