function updateDayAndTime() {
  const dayOfWeekElement = document.querySelector(
    '[data-testid= "currentDayOfTheWeek"]'
  );
  const currentTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  const now = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const time = now.getTime();

  dayOfWeekElement.textContent = `Today is ${dayOfWeek}`;
  currentTimeElement.textContent = `Current time is ${time}`;
}

setInterval(updateDayAndTime, 1000);

// Initial update
updateDayAndTime();
