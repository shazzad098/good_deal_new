export function HighlightIcon({ name }: { name: string }) {
  switch (name) {
    case "compliance":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" />
        </svg>
      );
    case "import":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" />
          <path d="M3 7l9 4 9-4M12 11v10" strokeLinecap="round" />
        </svg>
      );
    case "sustainable":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M20 4c-9 0-14 5-14 12 0 2 1 4 1 4M20 4c0 9-5 14-12 14" strokeLinecap="round" />
        </svg>
      );
    case "expertise":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c1-4 4-7 8-7s7 3 8 7" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
