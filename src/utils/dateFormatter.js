// Split and convert date like: 07/12/2021 into Wed, Dec 7, 2021 format
function formatDate(dateString) {
  var dateComponents = dateString.split("/");
  var dateObject = new Date(
    `${dateComponents[1] + "/" + dateComponents[0] + "/" + dateComponents[2]}`,
  );
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var formattedDate =
    daysOfWeek[dateObject.getDay()] +
    ", " +
    months[dateObject.getMonth()] +
    " " +
    dateObject.getDate() +
    ", " +
    dateObject.getFullYear();
  return formattedDate;
}

export default formatDate;