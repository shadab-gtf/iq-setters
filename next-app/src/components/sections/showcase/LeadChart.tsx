const LINE_PATH =
  "M40 126C86 115 98 100 136 105S195 83 228 92 278 113 320 84 374 49 414 64 476 87 512 60 574 35 605 46 643 26 665 20";

export const CHART_DAYS = ["12 Aug", "13 Aug", "14 Aug", "15 Aug", "16 Aug", "17 Aug", "18 Aug"];

export function LeadChart() {
  return (
    <svg
      className="lead-chart"
      viewBox="0 0 680 170"
      role="img"
      aria-label="Lead activity over the past week"
    >
      <defs>
        <linearGradient id="lead-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#e9777d" stopOpacity=".14" />
          <stop offset="1" stopColor="#e9777d" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path className="chart-gridline" d="M40 25H665M40 62H665M40 99H665M40 136H665" />
      <path className="chart-area" d={`${LINE_PATH}V145H40Z`} />
      <path className="chart-line" d={LINE_PATH} />
      <circle cx="665" cy="20" r="5" className="chart-point" />
    </svg>
  );
}
