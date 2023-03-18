import CalendarHeader from "./CalendarHeader";
import { daysOfWeek, listOfMonths } from "../../store/defaultCalendarData";
import PropTypes from "prop-types";
import { getWeeksWithDays } from "./CalendarUtils";

const Calendar = ({ date }) => {
  const weeksWithDays = getWeeksWithDays(date);

  const headThs = daysOfWeek.map((day) => {
    return (
      <th scope="col" title={day.name} key={day.day}>
        {day.shortcutName}
      </th>
    );
  });

  const datepickerDays = weeksWithDays.map((week, weekIdx) => {
    const days = week.days.map((day, dayIdx) => {
      let daysClass = null;
      if (!day.isCurrentMonth) {
        daysClass = "ui-datepicker-other-month";
      } else if (day.isCurrentDay) {
        daysClass = "ui-datepicker-today";
      }
      return (
        <td className={daysClass} key={dayIdx}>
          {day.dayOfMonth}
        </td>
      );
    });

    return <tr key={weekIdx}>{days}</tr>;
  });

  return (
    <div className="ui-datepicker">
      <CalendarHeader date={date} />
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>{headThs}</tr>
        </thead>
        <tbody>{datepickerDays}</tbody>
      </table>
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Calendar;
