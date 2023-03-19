import PropTypes from "prop-types";

const CalendarHeader = ({ currentDate }) => {
  const { year, month, week, day } = currentDate;

  return (
    <>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{week}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{day}</div>
          <div className="ui-datepicker-material-month">
            {month.nameInGenitive}
          </div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month.name}</span>&nbsp;
          <span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
    </>
  );
};

CalendarHeader.propTypes = {
  currentDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.shape({
      nameInGenitive: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    week: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
  }),
};

export default CalendarHeader;
