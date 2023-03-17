import CalendarHeader from "./CalendarHeader";
import { daysOfWeek, listOfMonths } from "../store/defaultCalendarData";
import PropTypes from "prop-types";

const Calendar = ({ date }) => {
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
            <tr>
              <th scope="col" title="Понедельник">
                Пн
              </th>
              <th scope="col" title="Вторник">
                Вт
              </th>
              <th scope="col" title="Среда">
                Ср
              </th>
              <th scope="col" title="Четверг">
                Чт
              </th>
              <th scope="col" title="Пятница">
                Пт
              </th>
              <th scope="col" title="Суббота">
                Сб
              </th>
              <th scope="col" title="Воскресенье">
                Вс
              </th>
            </tr>
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
