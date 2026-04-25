import { services } from "../../data/services";
import { ServiceCard } from "../ServiceCard";

export function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="section-label">
        <span>Core Services</span>
      </div>
      <div className="services-intro">
        <h2 className="section-title reveal">
          Five Verticals of
          <br />
          <em>Engineering Excellence</em>
        </h2>
        <p className="reveal">
          End-to-end turnkey solutions engineered to the highest global standards, delivered with local expertise
          and direct-import reliability.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <ServiceCard key={s.num} data={s} />
        ))}
      </div>
    </section>
  );
}
