import React from "react";

export default function FormattedDate(props) {
  let dateInfo = new Date(props.date * 1000);

  let dayNoOfWeek = dateInfo.getDay();
  let monthNoOfYear = dateInfo.getMonth();
  let dayNoOfMonth = dateInfo.getDate();
  let year = dateInfo.getFullYear();
  let hour = dateInfo.getHours();
  let minute = dateInfo.getMinutes();

  const arrDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const arrMonth = [
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

  function getFormattedDate() {
    let result = `${arrDay[dayNoOfWeek]}, ${arrMonth[monthNoOfYear]} ${dayNoOfMonth}, ${year}`;
    return result;
  }
  function getFormattedTime() {
    if (minute.length < 2) {
      minute = `0${minute}`;
    }
    return `Last updated: ${hour}:${minute}`;
  }
  return (
    <div className="FormattedDate">
      <div>{getFormattedDate()}</div>
      <div>{getFormattedTime}</div>
    </div>
  );
}
