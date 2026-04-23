// Inquiry submission helper.
// Uses FormSubmit.co — a free, no-backend service that forwards form
// submissions to a destination email address. The very first time a
// submission is sent the recipient will receive a one-time confirmation
// email from FormSubmit; once confirmed, all future inquiries flow
// directly to the inbox.
//
// Destination inbox:
export const INQUIRY_EMAIL = "good.deal326@gmail.com";

export interface InquiryPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function sendInquiry(data: InquiryPayload): Promise<void> {
  const endpoint = `https://formsubmit.co/ajax/${INQUIRY_EMAIL}`;

  const body = {
    _subject: `New Inquiry from ${data.name || "Website Visitor"} — Good Deal`,
    _template: "table",
    _captcha: "false",
    Name: data.name,
    Company: data.company,
    Email: data.email,
    Phone: data.phone,
    "Service Interest": data.service,
    Message: data.message,
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Failed to send inquiry (${res.status})`);
  }

  const json = (await res.json().catch(() => ({}))) as { success?: string };
  if (json.success && String(json.success).toLowerCase() !== "true") {
    throw new Error("Submission rejected by mail service");
  }
}
