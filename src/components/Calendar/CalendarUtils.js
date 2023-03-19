import { daysOfWeek, listOfMonths } from "../../store/defaultCalendarData";

const getCalendarDays = (date) => {
  const listOfDays = [];
  const currentMonth = date.getMonth();
  const currentDayOfMonth = date.getDate();
  let dateToCount = new Date(date);
  dateToCount.setMonth(currentMonth + 1, 1);
  dateToCount.setDate(dateToCount.getDate() - 1);

  let isCycle = true;

  while (isCycle) {
    let dayOfMonth = dateToCount.getDate();
    let dayOfWeek = dateToCount.getDay();
    let isCurrentMonth = currentMonth === dateToCount.getMonth() ? true : false;
    let isCurrentDay =
      currentMonth === dateToCount.getMonth() &&
      currentDayOfMonth === dayOfMonth
        ? true
        : false;

    listOfDays.push({
      dayOfWeek,
      dayOfMonth,
      isCurrentMonth,
      isCurrentDay,
    });

    if (dayOfWeek === 1 && currentMonth !== dateToCount.getMonth()) {
      isCycle = false;
    }

    dateToCount.setDate(dateToCount.getDate() - 1);
  }

  let lastDayOfWeek = listOfDays[0].dayOfWeek;
  let newDayOfMonth = 1;

  for (let i = lastDayOfWeek + 1; i <= 7; i++) {
    let dayOfWeek = i === 7 ? 0 : i;
    listOfDays.unshift({
      dayOfWeek,
      dayOfMonth: newDayOfMonth,
      isCurrentMonth: false,
      isCurrentDay: false,
    });

    newDayOfMonth++;
  }

  return listOfDays.reverse();
};

export const getWeeksWithDays = (date) => {
  let weeksList = [];
  let calendarDays = getCalendarDays(date);
  const numberOfWeeks = Math.ceil(calendarDays.length / 7);

  for (let i = 1; i <= numberOfWeeks; i++) {
    let start = (i - 1) * 7;
    let end = i * 7;
    weeksList.push({
      days: calendarDays.slice(start, end),
    });
  }

  return weeksList;
};

export const getCurrentDate = (date) => {
  const year = date.getFullYear();
  const month = listOfMonths[date.getMonth()];
  const week = daysOfWeek[date.getDay()].name;
  const day = date.getDate();

  return {
    year,
    month,
    week,
    day,
  };
};
