function updateTimeUTC() {
    let Current_dayOfweek = document.querySelector(
      '[data-testId="currentDayOfWeek"]'
    );
    let Current_UTCTime = document.querySelector(
      '[data-testId="currentUTCTime"]'
    );

    const current = new Date();

    const days_OfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDay = days_OfTheWeek[current.getDay()];
    const timeOfTheDay = current.toLocaleTimeString();

    Current_dayOfweek.textContent = `Today is:  ${currentDay}`;
    Current_UTCTime.textContent = `Current time is:  ${timeOfTheDay}`;
  }
  setInterval(updateTimeUTC, 1000);
  updateTimeUTC();