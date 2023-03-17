import PropTypes from "prop-types";

const CalendarHeader = ({ date }) => {
  return (
    <>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">Среда</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">8</div>
          <div className="ui-datepicker-material-month">Марта</div>
          <div className="ui-datepicker-material-year">2017</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">Март</span>&nbsp;
          <span className="ui-datepicker-year">2017</span>
        </div>
      </div>
    </>
  );
};

CalendarHeader.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarHeader;
