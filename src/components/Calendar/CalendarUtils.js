export const getWeeksWithDays = (date) => {
  const listOfDays = [];
  const currentMonth = date.getMonth();
  let dateToCount = new Date(date);
  dateToCount.setMonth(currentMonth + 1, 1);
  dateToCount.setDate(dateToCount.getDate() - 1);
  // const amountOfDays = dateToCount.getDate();

  while (currentMonth === dateToCount.getMonth()) {
    let dayOfMonth = dateToCount.getDate();
    let dayOfWeek = dateToCount.getDay();

    listOfDays.push({
      dayOfWeek,
      dayOfMonth,
    });

    dateToCount.setDate(dateToCount.getDate() - 1);
  }

  console.log(listOfDays);
};
