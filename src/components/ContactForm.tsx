import { useState, type FormEvent } from "react";
import { sendInquiry, INQUIRY_EMAIL } from "../lib/sendInquiry";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    setSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      await sendInquiry({
        name: String(fd.get("name") || ""),
        company: String(fd.get("company") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        service: String(fd.get("service") || ""),
        message: String(fd.get("message") || ""),
      });
      setStatus("success");
      setMessage(`Inquiry sent successfully to ${INQUIRY_EMAIL}. We'll be in touch shortly.`);
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Could not send inquiry. Please try again, or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" placeholder="Company name" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+880..." />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Interest</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option>Electrical &amp; Power Distribution</option>
          <option>Fire &amp; Life Safety Solutions</option>
          <option>Solar EPC Solutions</option>
          <option>Civil &amp; Industrial Construction</option>
          <option>Other / General Inquiry</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Describe your project requirements..." required />
      </div>
      <button className="btn-submit" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send Inquiry"}
      </button>
      {status !== "idle" && <div className={`form-status ${status}`}>{message}</div>}
    </form>
  );
}
