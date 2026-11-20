import { Icon } from "@/components/ui/icons";
import { networkNodes } from "@/data/content";

/** Lead sources converging on one hub. */
export function SourceNetwork() {
  return (
    <div className="source-network" aria-hidden="true">
      <svg className="network-paths" viewBox="0 0 572 295" fill="none">
        <path
          d="M286.75 85V208 M252.5 206.5C242.5 179.5 229 118.5 170.5 111.5 M315 198C325 171 344.5 122 400 112.5 M246.5 236C210.5 198 141.45 188.2 97 207.5 M329 225.6C361.7 191.9 430.5 191.8 475 211"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <circle cx="92.5" cy="209.5" r="2.5" fill="currentColor" />
        <circle cx="166.5" cy="110.5" r="2.5" fill="currentColor" />
        <circle cx="286.5" cy="87.5" r="2.5" fill="currentColor" />
        <circle cx="404.5" cy="111.5" r="2.5" fill="currentColor" />
        <circle cx="480.5" cy="212.5" r="2.5" fill="currentColor" />
      </svg>
      {networkNodes.map((node) => (
        <span key={node.modifier} className={`network-node network-node--${node.modifier}`}>
          <Icon name={node.icon} />
        </span>
      ))}
      <span className="network-hub">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/iq-mark.svg" width={40} height={34} alt="" />
      </span>
    </div>
  );
}
