// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName = new Date(dateString).getDay();
  // Write your code here

  switch (dayName) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
    // default:
    //   return "invalid date";
  }
  console.log(dayName)
  return dayName;
}

// getDayName("01/01/1990");
getDayName("09/11/1999");
// getDayName("12/12/2013");
// getDayName("12/12/2012");

module.exports = {
  getDayName
};
