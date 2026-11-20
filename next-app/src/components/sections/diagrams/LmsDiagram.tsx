/** Pre-Sales CRM / LMS illustration. */
export function LmsDiagram() {
  return (
    <svg
      className="suite-diagram"
      viewBox="0 0 446 520"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="suite-card-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dy="4" stdDeviation="4" floodColor="#171717" floodOpacity=".05" />
        </filter>
      </defs>
      <rect x="5" y="24" width="436" height="298" rx="20" fill="#090909" />
      <rect x="5" y="108" width="436" height="214" rx="20" fill="white" stroke="#E5E5E5" />
      <rect x="195" y="79" width="56" height="56" rx="13" fill="white" filter="url(#suite-card-shadow)" />
      <path
        d="M223 97v20m-10-10h20"
        className="diagram-accent-stroke"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="223" y="183" textAnchor="middle" className="diagram-title">
        Every lead, in one place.
      </text>
      <text x="223" y="209" textAnchor="middle" className="diagram-muted">
        Capture. Assign. Follow up.
      </text>
      <path d="M6 227h434" stroke="#EEEEEE" />
      <rect x="28" y="244" width="390" height="59" rx="8" fill="#F2F2F2" />
      <rect x="66" y="258" width="30" height="30" rx="5" fill="white" />
      <g className="diagram-accent-stroke" strokeWidth="1.4">
        <rect x="73" y="265" width="6" height="6" rx="1" />
        <rect x="83" y="265" width="6" height="6" rx="1" />
        <rect x="73" y="275" width="6" height="6" rx="1" />
        <rect x="83" y="275" width="6" height="6" rx="1" />
      </g>
      <text x="108" y="279" className="diagram-body">
        iQSetters lead workspace
      </text>
      <g filter="url(#suite-card-shadow)">
        <rect x="5" y="358" width="211" height="60" rx="4" fill="white" />
        <rect x="230" y="358" width="211" height="60" rx="4" fill="white" />
        <rect x="5" y="433" width="211" height="60" rx="4" fill="white" />
        <rect x="230" y="433" width="211" height="60" rx="4" fill="white" />
      </g>
      <g
        className="diagram-accent-stroke"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 388h13m-6-6 6 6-6 6M249 383h14v10h-14zm4-4h6M24 458h14v10H24zm4-4v7m6-7v7M249 463l5 5 9-11" />
      </g>
      <g className="diagram-label">
        <text x="48" y="393">Lead capture</text>
        <text x="273" y="393">Smart distribution</text>
        <text x="48" y="468">Call tracking</text>
        <text x="273" y="468">Follow-up reminders</text>
      </g>
    </svg>
  );
}
