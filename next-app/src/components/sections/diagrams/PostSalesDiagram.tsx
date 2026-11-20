/** Post-Sales CRM flow illustration. */
export function PostSalesDiagram() {
  return (
    <svg
      className="suite-diagram"
      viewBox="0 0 446 520"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <marker
          id="suite-flow-arrow"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="m1 1 4 2-4 2" stroke="#D2D2D2" strokeWidth=".8" />
        </marker>
      </defs>
      <g stroke="#D2D2D2" strokeWidth="1" markerEnd="url(#suite-flow-arrow)">
        <path d="M223 114v43M223 189v27M223 248v27M223 307v71M223 307v11q0 28-30 28H90q-32 0-32 32M223 307v11q0 28 30 28h103q32 0 32 32" />
      </g>
      <rect x="197" y="62" width="52" height="52" rx="5" fill="white" />
      <rect x="202" y="67" width="42" height="42" rx="4" fill="#F7F7F7" />
      <text x="223" y="97" textAnchor="middle" className="diagram-mark">
        iQ
      </text>
      <g fill="white">
        <rect x="143" y="157" width="160" height="32" rx="4" />
        <rect x="148" y="216" width="150" height="32" rx="4" />
        <rect x="145" y="275" width="156" height="32" rx="4" />
        <rect x="5" y="378" width="111" height="34" rx="4" />
        <rect x="160" y="378" width="126" height="34" rx="4" />
        <rect x="329" y="378" width="112" height="34" rx="4" />
      </g>
      <g className="diagram-accent-fill">
        <circle cx="158" cy="173" r="3" />
        <circle cx="163" cy="232" r="3" />
        <circle cx="160" cy="291" r="3" />
        <circle cx="19" cy="395" r="3" />
        <circle cx="174" cy="395" r="3" />
        <circle cx="343" cy="395" r="3" />
      </g>
      <g className="diagram-flow-label">
        <text x="170" y="177">Booking received</text>
        <text x="175" y="236">Applicant details</text>
        <text x="172" y="295">Booking review</text>
        <text x="30" y="399">Price module</text>
        <text x="186" y="399">File submission</text>
        <text x="355" y="399">Follow-up</text>
      </g>
    </svg>
  );
}
