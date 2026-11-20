import { Icon } from "@/components/ui/icons";
import { calendarAgenda } from "@/data/content";

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];
const TODAY_INDEX = 2;

export function CalendarVisual() {
  return (
    <div className="home-calendar-visual" aria-hidden="true">
      <div className="calendar-week">
        {WEEKDAYS.map((day, index) =>
          index === TODAY_INDEX ? (
            <b key={`${day}-${index}`}>{day}</b>
          ) : (
            <span key={`${day}-${index}`}>{day}</span>
          ),
        )}
      </div>
      <div className="calendar-agenda">
        <div className="calendar-agenda-heading">
          <h4>Today</h4>
          <span className="calendar-navigation">
            <span>
              <Icon name="chevron-down" />
            </span>
            <span>
              <Icon name="chevron-down" />
            </span>
          </span>
        </div>
        {calendarAgenda.map((entry) => (
          <p key={entry.label}>
            <Icon name={entry.icon} />
            {entry.label}
          </p>
        ))}
      </div>
    </div>
  );
}
