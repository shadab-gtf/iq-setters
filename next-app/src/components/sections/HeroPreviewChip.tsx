/** The miniature browser that sits inline in the hero headline. */
export function HeroPreviewChip() {
  return (
    <span className="hero-preview-chip" aria-hidden="true">
      <svg viewBox="0 0 120 74" focusable="false">
        <rect x="1" y="1" width="118" height="72" rx="8" fill="#fff" stroke="#dedfe4" />
        <path d="M8 1h104a7 7 0 0 1 7 7v5H1V8a7 7 0 0 1 7-7Z" fill="#202124" />
        <circle cx="9" cy="7" r="1.5" fill="#ff6259" />
        <circle cx="15" cy="7" r="1.5" fill="#ffc247" />
        <circle cx="21" cy="7" r="1.5" fill="#38c979" />
        <path d="M1 13h23v60H8a7 7 0 0 1-7-7Z" fill="#f5f5f7" />
        <rect x="6" y="19" width="12" height="4" rx="2" fill="#ff121c" opacity=".85" />
        <rect x="6" y="29" width="12" height="3" rx="1.5" fill="#d7d8dc" />
        <rect x="6" y="37" width="12" height="3" rx="1.5" fill="#d7d8dc" />
        <rect x="6" y="45" width="12" height="3" rx="1.5" fill="#d7d8dc" />
        <rect x="30" y="19" width="38" height="5" rx="2.5" fill="#dfe1e5" />
        <rect x="30" y="29" width="79" height="26" rx="4" fill="#fafafa" stroke="#ececf0" />
        <path
          d="m35 48 13-9 11 4 12-10 12 7 13-5 14 3"
          fill="none"
          stroke="#ff121c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="30" y="60" width="34" height="7" rx="3.5" fill="#fff1f1" />
        <rect x="69" y="60" width="40" height="7" rx="3.5" fill="#f0f1f3" />
      </svg>
    </span>
  );
}
