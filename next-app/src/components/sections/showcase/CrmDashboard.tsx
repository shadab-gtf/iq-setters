import { Icon, type IconName } from "@/components/ui/icons";
import { CHART_DAYS, LeadChart } from "./LeadChart";

type Stat = { label: string; value: string; delta: string; icon: IconName };

const stats: Stat[] = [
  { label: "New leads", value: "658", delta: "+12K", icon: "grid" },
  { label: "Qualified leads", value: "864", delta: "+8.2%", icon: "briefcase" },
  { label: "Conversion", value: "32.4%", delta: "+6.2%", icon: "check" },
];

/** The dashboard mock inside the hero browser window. */
export function CrmDashboard() {
  return (
    <div className="crm-dashboard">
      <div className="crm-main">
        <div className="crm-stats">
          {stats.map((stat) => (
            <article className="crm-stat" key={stat.label}>
              <span className="crm-stat-icon">
                <Icon name={stat.icon} />
              </span>
              <div>
                <p>{stat.label}</p>
                <strong>{stat.value}</strong>
                <small>{stat.delta}</small>
              </div>
            </article>
          ))}
        </div>

        <article className="crm-widget crm-activity">
          <div className="crm-widget-heading">
            <div>
              <h3>Real-time lead activity</h3>
              <span>12 August &ndash; 18 August 2025</span>
            </div>
            <span className="crm-menu-dots">&#8599;&#12288;&#10227;</span>
          </div>
          <LeadChart />
          <div className="crm-chart-days">
            {CHART_DAYS.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </article>

        <div className="crm-bottom-row">
          <article className="crm-widget crm-recent-leads">
            <div className="crm-widget-heading">
              <div>
                <h3>Task &amp; Follow-Up</h3>
                <span>Keep each enquiry moving</span>
              </div>
              <span className="crm-menu-dots">&bull;&bull;&bull;</span>
            </div>
            <div className="lead-row">
              <span className="lead-avatar">RS</span>
              <span>
                <b>New residential enquiry</b>
                <small>Website &middot; 12 min ago</small>
              </span>
              <em>New</em>
            </div>
          </article>

          <article className="crm-widget crm-tasks">
            <div className="crm-widget-heading">
              <div>
                <h3>Field monitoring</h3>
                <span>Team activity across locations</span>
              </div>
              <span className="crm-menu-dots">&bull;&bull;&bull;</span>
            </div>
            <div className="distribution-preview">
              <span>New lead</span>
              <i />
              <b>A</b>
              <b>B</b>
              <b>C</b>
            </div>
            <div className="task-progress">
              <span>
                <i />
              </span>
              <b>84% assigned</b>
            </div>
          </article>
        </div>
      </div>

      <aside className="crm-side-widgets">
        <article className="crm-promo">
          <div className="crm-promo-top">
            <span>iQSetters CRM</span>
            <span className="crm-promo-arrow">&#8599;</span>
          </div>
          <div className="crm-promo-icon">
            <Icon name="grid" />
          </div>
          <p>
            Track. Engage.
            <br />
            <strong>Convert. Control.</strong>
          </p>
          <span className="crm-promo-link">
            Lead management <Icon name="arrow" />
          </span>
        </article>

        <article className="crm-widget crm-conversion">
          <div className="crm-widget-heading">
            <div>
              <h3>Lead conversion</h3>
              <span>Monthly overview</span>
            </div>
            <span className="crm-menu-dots">&bull;&bull;&bull;</span>
          </div>
          <div className="conversion-ring">
            <div>
              <strong>
                32.4<small>%</small>
              </strong>
              <span>growth rate</span>
            </div>
          </div>
          <div className="conversion-note">
            <span>
              <i />
              Qualified enquiries
            </span>
            <b>+6.2%</b>
          </div>
        </article>
      </aside>
    </div>
  );
}
