import { Icon, type IconName } from "@/components/ui/icons";
import { cx } from "@/lib/cx";

type SidebarItem = {
  label: string;
  icon: IconName;
  current?: boolean;
  badge?: string;
};

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", icon: "grid", current: true },
  { label: "Leads", icon: "people" },
  { label: "Follow-ups", icon: "calendar" },
  { label: "Communication", icon: "chat", badge: "24" },
  { label: "Reports", icon: "briefcase" },
];

/** Static chrome for the product preview — presentational, not interactive. */
export function AppSidebar() {
  return (
    <aside className="app-sidebar" aria-label="iQSetters CRM preview">
      <div className="app-brand">
        <span className="app-mark">iQ</span>
        <span>iQSetters</span>
      </div>
      <span className="sidebar-label">Menu</span>
      {sidebarItems.map((item) => (
        <span key={item.label} className={cx("sidebar-item", item.current && "is-current")}>
          <Icon name={item.icon} />
          <span>{item.label}</span>
          {item.badge ? <small>{item.badge}</small> : null}
        </span>
      ))}
      <div className="sidebar-foot">
        <span className="mini-avatar">iQ</span>
        <span>iQSetters</span>
      </div>
    </aside>
  );
}
