import { type ServiceCardData } from "../data/services";

export function ServiceIcon({ kind }: { kind: ServiceCardData["icon"] }) {
  switch (kind) {
    case "electrical":
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L6 18v26h36V18L24 4z" stroke="var(--gold)" strokeWidth="1.5" />
          <path d="M16 44V28h16v16" stroke="var(--gold)" strokeWidth="1.5" />
          <circle cx="24" cy="20" r="4" stroke="var(--gold)" strokeWidth="1.5" />
        </svg>
      );
    case "fire":
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 40h32M12 40V20l12-8 12 8v20" stroke="var(--gold)" strokeWidth="1.5" />
          <path d="M20 40v-10h8v10" stroke="var(--gold)" strokeWidth="1.5" />
          <path d="M24 8v4M18 14l-3-3M30 14l3-3" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "lightning":
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6v36M24 6l-8 10M24 6l8 10" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="var(--gold)" strokeWidth="1.5" />
          <path d="M8 44c1.333-4 8-10 16-10s14.667 6 16 10" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "solar":
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="6" stroke="var(--gold)" strokeWidth="1.5" />
          <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="var(--gold)" strokeWidth="1.5" />
          <path
            d="M24 10V6M14.1 13l-3-2.8M33.9 13l3-2.8M10 22H6M38 22h4"
            stroke="var(--gold)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "construction":
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 40h40M8 40V20h32v20" stroke="var(--gold)" strokeWidth="1.5" />
          <path d="M4 20l20-12 20 12" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="14" y="28" width="8" height="12" stroke="var(--gold)" strokeWidth="1.5" />
          <rect x="26" y="24" width="8" height="8" stroke="var(--gold)" strokeWidth="1.5" />
        </svg>
      );
  }
}
