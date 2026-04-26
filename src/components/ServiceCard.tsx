import { useNavigate } from "react-router-dom";
import { type ServiceCardData } from "../data/services";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ data }: { data: ServiceCardData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (data.num === "01") {
      navigate("/electrical-power-distribution");
    } else if (data.num === "02") {
      navigate("/fire-life-safety-solutions");
    } else if (data.num === "03") {
      navigate("/sustainable-solar-solutions");
    }
  };

  const isClickable = data.num === "01" || data.num === "02" || data.num === "03";

  return (
    <article 
      className="service-card reveal" 
      onClick={handleClick}
      style={isClickable ? { cursor: "pointer" } : undefined}
    >
      <div className="sc-bg" style={{ backgroundImage: `url(${data.image})` }} />
      <div className="sc-overlay" />
      <span className="service-num">{data.num}</span>
      <div className="service-icon">
        <ServiceIcon kind={data.icon} />
      </div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="service-tags">
        {data.tags.map((t) => (
          <span key={t} className="service-tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
