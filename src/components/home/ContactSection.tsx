import { INQUIRY_EMAIL } from "../../lib/sendInquiry";

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="section-label">
        <span>Get in Touch</span>
      </div>
      <h2 className="section-title reveal">
        Start Your Next
        <br />
        <em>Engineering Project</em>
      </h2>
      <div className="contact-grid">
        <div className="contact-info reveal">
          <div className="contact-item">
            <div className="contact-item-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  stroke="var(--gold)"
                  strokeWidth="0.5"
                  fill="rgba(196,154,60,0.12)"
                />
              </svg>
            </div>
            <div className="contact-item-text">
              <div className="label">Head Office</div>
              <div className="value">
                163/6 Tejkunipara Road, Tejgaon
                <br />
                Dhaka-1215, Bangladesh
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"
                  stroke="var(--gold)"
                  strokeWidth="1.3"
                />
              </svg>
            </div>
            <div className="contact-item-text">
              <div className="label">Phone</div>
              <div className="value">
                <a href="tel:+8801619302150">+880 1619-302150</a>
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
                  stroke="var(--gold)"
                  strokeWidth="1.3"
                />
                <path d="M22 6l-10 7L2 6" stroke="var(--gold)" strokeWidth="1.3" />
              </svg>
            </div>
            <div className="contact-item-text">
              <div className="label">Email</div>
              <div className="value" style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>
                <a href="mailto:prince@goodeal-bd.com">prince@goodeal-bd.com</a>
                <a href="mailto:sales@gooddeal-bd.com">sales@gooddeal-bd.com</a>
                <a href="mailto:supplychain@goodeal-bd.com">supplychain@goodeal-bd.com</a>
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="var(--gold)" strokeWidth="1.3" />
                <circle cx="12" cy="7" r="4" stroke="var(--gold)" strokeWidth="1.3" />
              </svg>
            </div>
            <div className="contact-item-text">
              <div className="label">Managing Director</div>
              <div className="value">MD. Prince</div>
            </div>
          </div>
        </div>

        <div className="contact-right-panel" style={{ width: "100%" }}>
          <div className="contact-map reveal" style={{ height: "450px", overflow: "hidden", borderRadius: "var(--radius)" }}>
            <video
              src="/connect.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
