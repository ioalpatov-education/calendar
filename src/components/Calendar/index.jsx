import CalendarHeader from "./CalendarHeader";
import { daysOfWeek, listOfMonths } from "../../store/defaultCalendarData";
import PropTypes from "prop-types";
import { getWeeksWithDays } from "./CalendarUtils";

const Calendar = ({ date }) => {
  const currentMonth = date.getMonth();

  getWeeksWithDays(date);
  const headThs = daysOfWeek.map((day) => {
    return (
      <th scope="col" title={day.name} key={day.day}>
        {day.shortcutName}
      </th>
    );
  });

  return (
    <>
      <CalendarHeader date={date} />
      <div className="ui-datepicker">
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
          <tbody>
            <tr>
              <td className="ui-datepicker-other-month">27</td>
              <td className="ui-datepicker-other-month">28</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>6</td>
              <td>7</td>
              <td className="ui-datepicker-today">8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Calendar;
